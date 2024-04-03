import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { HeroCard } from "../HeroCard/HeroCard";
import { CardLoader } from "../CardLoader/CardLoader";
import "./styles.css";

export const MainContainer = () => {
  return (
    <div className="main-container">
      <NavBar />
      <HeroCard />
      <CardLoader />
    </div>
  );
};
