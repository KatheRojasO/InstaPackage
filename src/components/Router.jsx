import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrackingSection from "../pages/TrackingSection";
import ParcelSection from "../pages/ParcelSection";

export default function Router({orders}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrackingSection orders={orders}/>}/>
        <Route path="/parcels/:parcel_id" element={<ParcelSection orders={orders}/>}/>
      </Routes>
    </BrowserRouter>
  );
}
