import React from "react";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t: translation } = useTranslation();
  return (
    <div className="error-page">
      <NavBar />
      <div className="error-container">
        <FontAwesomeIcon
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