import React from "react";
import { Link } from "react-router-dom";
import chevron from "../assets/icons/chevron-right.svg";
import box from "../assets/icons/box-solid.svg";
import { useTranslation } from "react-i18next";

export default function ParcelCard({ item }) {
  const { t: translation } = useTranslation();
  const { sender, parcel_id, status } = item;

  return (
    <Link to={`/parcels/${parcel_id}`} className="parcel-card">
      <div className="cards">
        <div className="cards-content">
          <img src={box} alt="box-icon" className="box-icon" />
          <div className="cards-info">
            <h2>{sender}</h2>
            <p>{parcel_id}</p>
            <p className="label">
              {translation(`parcelcard:status:${status}`)}
            </p>
          </div>
        </div>
        <div className="go-icon">
          <img src={chevron} alt="chevron-right" className="chevron" />
        </div>
      </div>
    </Link>
  );
}
