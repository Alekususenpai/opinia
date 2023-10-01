import React, { createContext, useState } from "react";
import localData from "../../data.json";

export const ProdReqContext = createContext();

export function ProdReqProvider({ children }) {
  const [prodReqs, setProdReqs] = useState(localData.productRequests);

  const updateProdReqs = (prodReqs) => {
    //console.log(prodReqs);
    localStorage.setItem("prodReqs", JSON.stringify(prodReqs));

    setProdReqs(prodReqs);
  };

  return (
    <ProdReqContext.Provider value={[prodReqs, updateProdReqs]}>
      {children}
    </ProdReqContext.Provider>
  );
}
