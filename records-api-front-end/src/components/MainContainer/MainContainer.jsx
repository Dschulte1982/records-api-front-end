import React from "react";
import { MainHeader } from "../MainHeader/MainHeader";
import { CardLoader } from "../CardLoader/CardLoader";
import { NavBar } from "../NavBar/NavBar";
import "./styles.css";

export const MainContainer = () => {
  return (
    <div className="main-container">
      {/* <MainHeader /> */}
      <NavBar />
      <CardLoader />
    </div>
  );
};
