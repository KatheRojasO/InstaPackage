import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getFullDate, getShortTime } from "../services/date";
import NavBar from "../components/NavBar";
import Map from "../components/Map";
import InvalidPackage from "./InvalidPackage";
import pinIcon from "../assets/icons/location-dot-solid.svg";

export default function ParcelSection({ orders }) {
  const params = useParams();
  const navigate = useNavigate();
  const { t: translation } = useTranslation();

  const parcel = orders.find((parcel) => parcel.parcel_id === params.id);
  if (parcel === undefined || parcel === null) return <InvalidPackage />;

  const latitude = parcel.location_coordinate_latitude;
  const longitude = parcel.location_coordinate_longitude;
  const deliveryDate = getFullDate(parcel.eta);
  const deliveryTime = getShortTime(parcel.eta);

  return (
    <div className="parcel-section">
      <NavBar />
      <div className="parcel-section-container">
        <div className="content">
          <h2 className="title">
            {translation("parcelsection:title")} {parcel.sender}
          </h2>
          <div className="location-info">
            <img src={pinIcon} alt="location-icon" className="pin-icon" />
            <p className="location-name">{parcel.location_name}</p>
          </div>
          <Map coordinates={[latitude, longitude]} />
          <p className="arrival-time">
            {translation("parcelsection:time")}: {deliveryDate} {deliveryTime}
          </p>
          {parcel.notes && (
            <p className="notes">
              {translation("parcelsection:notes")}: {parcel.notes}
            </p>
          )}
        </div>
        <button className="goback-btn" onClick={() => navigate(-1)}>
          {translation("parcelsection:go-back")}
        </button>
      </div>
    </div>
  );
}
