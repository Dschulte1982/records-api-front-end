import React, { useEffect, useState } from "react";

export const ShowRecord = () => {
  return (
    <div
      className="card-loader"
      style={{
        height: "270px",
        width: "233px",
        overflowY: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        textAlign: "justify",
        margin: "20px 0px 0px -8px",
        padding: "20px",
        WebkitScrollBar: { display: "none" },
      }}
    >
      Record will go here
    </div>
  );
};
