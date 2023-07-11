import React from "react";
import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Error() {
  const { t: translation } = useTranslation();
  
  // formating leave a space between properties and the return
  return (
    <div className="error-page">
      <NavBar />
      <div className="error-container">
        <FontAwesomeIcon
          icon={solid("triangle-exclamation")}
          beat
          size="7x"
          style={{ color: "#ff7878" }}
        />
        <p className="logo">An error has ocurred, please refresh the page!</p>
      </div>
    </div>
  );
}
