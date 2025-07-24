import React from "react";
import {Route, Routes} from "react-router";
import {AllOutfitsPage} from "@/pages/AllOutfitsPage";
import {OutfitDetailsPage} from "@/pages/OutfitDetailsPage";
import Header from "@/widgets/Header/ui/Header";
import './style/style.scss'


export function App() {
  return <div className={'app light'}>
    <Header />
    <Routes>
      <Route path="/" element={<AllOutfitsPage />} />
      <Route path="/details/:id" element={<OutfitDetailsPage />} />
    </Routes>
  </div>;
}