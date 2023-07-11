import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Loading() {
  return (
    <div className="error">
      <div className="error-container">
        <FontAwesomeIcon
          icon={solid("triangle-exclamation")}
          beat
          size="2xl"
          style={{ color: "#ff7878" }}
        />
        <p className="logo">An error has ocurred, please refresh the page!</p>
      </div>
    </div>
  );
}
