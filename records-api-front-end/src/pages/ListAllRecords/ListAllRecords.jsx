import React from "react";
import { MainHeader } from "../../components/MainHeader/MainHeader";
import { CardLoader } from "../../components/CardLoader/CardLoader";

export const ListAllRecords = () => {
  return (
    <div className="list-page-container">
      <MainHeader />
      <CardLoader />
    </div>
  );
};
