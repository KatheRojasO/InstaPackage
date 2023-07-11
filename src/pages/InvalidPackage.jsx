import React from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function InvalidPackage() {
  const navigate = useNavigate();
  const { t: translation } = useTranslation();

  return (
    <div className="error-page">
      <NavBar />
      <div className="error-page-container">
        <FontAwesomeIcon icon={solid("heart-crack")} fade size="3x" />
        <p>{translation("invalidpackage:text")}</p>
        <button className="goback-btn" onClick={() => navigate(-1)}>
          {translation("parcelsection:go-back")}
        </button>
      </div>
    </div>
  );
}
