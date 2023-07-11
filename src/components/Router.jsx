import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ParcelDetail from "../pages/ParcelDetail";
import Parcels from "../pages/Parcels";
import NotFound from "./NotFound";

export default function Router({ orders }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/parcels" element={<Parcels orders={orders} />} />
        <Route path="/parcels/:id" element={<ParcelDetail orders={orders} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );

  // Naming:
  // ParcelSection: is a page with parcels ✅
  // ParcelPage: is a page with parcels ✅
  // Parcels: is a page with parcels ✅✅✅
  // Parl : is a page with parcels ❌
  // P : is a page with parcels ❌
}
