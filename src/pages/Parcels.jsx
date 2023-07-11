import React from "react";
import NavBar from "../components/NavBar";
import ParcelCard from "../components/ParcelCard";
import { useTranslation } from "react-i18next";

export default function TrackingSection({ orders }) {
  const { t: translation } = useTranslation();

  console.log(orders)

  const ordersList = orders.map((item) => (
    <ParcelCard key={item.id} item={item} />
  ));

  return (
    <div className="tracking-section">
      <NavBar />
      <div className="tracking-section-container">
        <h1 className="title">
          {translation("parcels:greetings")}
          {orders[0].user_name}
        </h1>
        <p className="description">{translation("parcels:description")}</p>
        <section className="parcel-list">{ordersList}</section>
      </div>
    </div>
  );
}
