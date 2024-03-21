import React from "react";

export const MainHeader = () => {
  return (
    <div className="header-container" style={{ backgroundColor: "white" }}>
      <h1>All Records</h1>
      <button className="button" style={{ color: "red" }}>
        New Record
      </button>
    </div>
  );
};
