import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Loading() {
  return (
    <div className="spinner">
      <FontAwesomeIcon
        icon={solid("spinner")}
        spinPulse
        size="2xl"
        style={{ color: "#ff7878" }}
      />
      <p className="logo">InstaPackage</p>
    </div>
  );
}
