import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TrackingSection from "../pages/TrackingSection";
import ParcelSection from "../pages/ParcelSection";
import NotFound from "./NotFound";

export default function Router({ orders }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/parcels" element={<TrackingSection orders={orders} />} />
        <Route
          path="/parcels/:parcel_id"
          element={<ParcelSection orders={orders} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
