import React from "react";
import { Card } from "../Card/Card";

export const CardLoader = () => {
  const arrayOfRecords = [
    { id: 1, name: "Dog", description: "A Dog", price: "1.99", rating: "1" },
    { id: 2, name: "Pig", description: "A Pig", price: "2.99", rating: "2" },
    { id: 3, name: "Cat", description: "A Cat", price: "3.99", rating: "3" },
    { id: 4, name: "Bird", description: "A Bird", price: "4.99", rating: "4" },
    {
      id: 5,
      name: "Snake",
      description: "A Snake",
      price: "5.99",
      rating: "5",
    },
  ];
  return (
    <div
      className="card-loader"
      style={{
        height: "150px",
        overflowY: "scroll",
        textAlign: "justify",
        padding: "20px",
      }}
    >
      {arrayOfRecords.map((record) => (
        <p key={record.id}>
          <Card key={record.id} record={record} />
        </p>
      ))}
    </div>
  );
};
