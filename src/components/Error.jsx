import React from "react";
import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Error() {
  const { t: translation } = useTranslation();
  return (
    <div className="error-page">
      <NavBar />
      <div className="error-page-container">
        <FontAwesomeIcon icon={solid("triangle-exclamation")} beat size="3x" />
        <p className="logo">{translation("error:text")}</p>
      </div>
    </div>
  );
}
