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
      <div style={{ fontFamily: "sans-serif" }}>
        <h2>All Records</h2>
      </div>
      <div>
        <button
          style={{
            backgroundColor: "#206EF3",
            color: "#FFFFFF",
            border: "0px",
            borderRadius: "1rem",
            padding: "0.5rem 0.9rem",
            fontSize: "10px",
          }}
        >
          New Record
        </button>
      </div>
    </div>
  );
};
