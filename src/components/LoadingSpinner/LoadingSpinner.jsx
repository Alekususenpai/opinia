import React from "react";

import "./LoadingSpinner.css";

export default function LoadingSpinner() {
  return (
    <section className="spinner-background h-[100vh]">
      <div className="glassmorphism w-full h-full flex justify-center items-center">
        <div className="waveform">
          <div className="waveform__bar"></div>
          <div className="waveform__bar"></div>
          <div className="waveform__bar"></div>
          <div className="waveform__bar"></div>
        </div>
      </div>
    </section>
  );
}
