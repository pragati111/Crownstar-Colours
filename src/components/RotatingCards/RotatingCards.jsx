import React from "react";
import "./RotatingCards.css";

const colors = [
  "142, 249, 252",
  "142, 252, 204",
  "142, 252, 157",
  "215, 252, 142",
  "252, 252, 142",
  "252, 208, 142",
  "252, 142, 142",
  "252, 142, 239",
  "204, 142, 252",
  "142, 202, 252",
];

const RotatingCards = ({ equipments }) => {
  return (
    <div className="wrapper">
      <div className="inner" style={{ "--quantity": equipments.length }}>
        {equipments.map((item, index) => (
          <div
            className="card"
            key={index}
            style={{
              "--index": index,
              "--color-card": colors[index % colors.length],
            }}
          >
            <div className="img card-content">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotatingCards;