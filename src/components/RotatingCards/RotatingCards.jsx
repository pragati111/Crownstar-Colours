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


const equipments = [
  { name: "Salt Spray Chamber", desc: "Testing corrosion resistance" },
  { name: "QUV Apparatus", desc: "Testing weather resistance" },
  { name: "Impact Tester", desc: "Testing impact with weight and height" },
  { name: "Hot Water Bath", desc: "Testing water resistance" },
  { name: "Karl Fischer", desc: "Testing moisture content" },
  { name: "Melting Point Apparatus", desc: "Testing melting point of resin" },
  { name: "Taber Abrasion Tester", desc: "Testing abrasion resistance" },
  { name: "DFT Meter", desc: "Testing dry film thickness" },
  { name: "Glossometer", desc: "Testing gloss at various optical angles" },
  { name: "Scan-O-Lite", desc: "Comparing shades under various light sources" },
  { name: "Cryptometer", desc: "Testing covering capacity" },
  { name: "Spectrophotometer", desc: "Shade matching and color consistency" },
  { name: "Particle Size Analyzer", desc: "Testing particle distribution" },
  { name: "Humidity Chamber", desc: "Testing humidity resistance" },
  { name: "Incubator", desc: "Testing paint stability" },
];

const RotatingCards = () => {
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
