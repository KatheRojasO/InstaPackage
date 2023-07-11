import React from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function HomePage() {
  const navigate = useNavigate();
  const { t: translation } = useTranslation();

  return (
    <div className="home-page">
      <NavBar />
      <div className="home-page-container">
        <FontAwesomeIcon
          icon={solid("hand-holding-heart")}
          beatFade
          size="7x"
          style={{ color: "#ff7878" }}
        />
        <p>{translation("homepage:text")}</p>
        <button className="start-btn" onClick={() => navigate("/parcels")}>
          {translation("homepage:start")}
        </button>
      </div>
    </div>
  );
}
