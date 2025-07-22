import React from "react";
import {Route, Routes} from "react-router";
import {MainPage} from "@/pages/MainPage";
import {OutfitDetailsPage} from "@/pages/OutfitDetailsPage";

export function App() {
  return <div className={'app light'}>
    Header
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/details" element={<OutfitDetailsPage />} />
    </Routes>
  </div>;
}