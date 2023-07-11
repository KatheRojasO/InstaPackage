import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Parcels from "../pages/Parcels";
import ParcelDetail from "../pages/ParcelDetail";
import NotFound from "./NotFound";

export default function Router({ orders }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parcels" element={<Parcels orders={orders} />} />
        <Route path="/parcels/:id" element={<ParcelDetail orders={orders} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
