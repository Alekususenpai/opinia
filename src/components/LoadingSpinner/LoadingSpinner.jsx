import React from "react";

import "./LoadingSpinner.css";

export default function LoadingSpinner() {
  return (
    <section className="spinner-background w-full h-[100vh] flex justify-center items-center">
      <div className="waveform">
        <div className="waveform__bar"></div>
        <div className="waveform__bar"></div>
        <div className="waveform__bar"></div>
        <div className="waveform__bar"></div>
      </div>
    </section>
  );
}
