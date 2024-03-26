import React from "react";

export const MainHeader = () => {
  return (
    <div
      className="header-container"
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>All Records</h1>
      </div>
      <div>
        <button
          style={{
            backgroundColor: "#206EF3",
            color: "#FFFFFF",
            border: "0px",
            borderRadius: "1rem",
            padding: "0.5rem 0.8rem",
            fontSize: "10px",
          }}
        >
          New Record
        </button>
      </div>
    </div>
  );
};
