import React from "react";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t: translation } = useTranslation();
  // space
  return (
    <div className="error-page">
      <NavBar />
      <div className="error-container">
        {/* no CSS here, add the className icon and stylize there */}
        {/* small = 8px, medium = 16px, big = 32px, ultra = 48px */}
        <FontAwesomeIcon
          className="icon"
          icon={solid("triangle-exclamation")}
          beat
          size="5x"
          style={{ color: "#ff7878" }}
        />
        <p className="logo">{translation("notfoundpage:text")}</p>
      </div>
    </div>
  );
}
