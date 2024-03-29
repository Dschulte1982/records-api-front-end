import React from "react";
import { Link } from "react-router-dom";

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
        <Link
          to={"/show-record/id"}
          style={{
            textDecoration: "none",
            backgroundColor: "#206EF3",
            color: "#FFFFFF",
            border: "0px",
            borderRadius: "1rem",
            padding: "0.6rem 1.2rem",
            fontSize: "11px",
          }}
        >
          New Record
        </Link>
      </div>
    </div>
  );
};
