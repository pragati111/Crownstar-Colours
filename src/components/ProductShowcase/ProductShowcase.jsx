import React from "react";
import "./ProductShowcase.css";

import bucket_dpp from "../../assets/damp-proof-paint.png";
import wall_filler from "../../assets/wall-filler.png";
import wood_polish from "../../assets/wood-polish.png";
import wall_primer from "../../assets/wall-primer.png";
import ultimo_shine from "../../assets/ultimo-shine.png";
import premium_acrylic_emulsion from "../../assets/premium-acrylic-emulsion.png";
import heat_resistant_paint from "../../assets/heat-resistant-paint.png";
import uv_paint_for_exterior from "../../assets/uv-paint-for-exterior.png";
import acrylic_bond_distemper from "../../assets/acrylic-bond-distemper.png";
import floor_coating from "../../assets/floor-coating.png";
import synthetic_enamel from "../../assets/synthetic-enamel.png";

const users = [
  {
    title: "Damp Proof Paint",
    details: {
      text:
        "Excellent waterproofing solution that seals and waterproofs fine cracks and porous plaster,\nSolar Reflectance Index : 107,\nPercent Elongation : 300,\n7 years warranty",
      image: bucket_dpp,
    },
  },
  {
    title: "Wall Filler",
    details: {
      text:
        "Enhances durability and provides excellent long lasting foundation base increasing wall life",
      image: wall_filler,
    },
  },
  {
    title: "Wood Polish",
    details: {
      text:
        "Enhances wood beauty with lacquer, PU, melamine & duco finishes for doors, windows, and furniture",
      image: wood_polish,
    },
  },
  {
    title: "Wall Primer",
    details: {
      text:
        "Ensures better cohesiveness and excellent adhesion of finish coats before final application",
      image: wall_primer,
    },
  },
  {
    title: "Ultimo Shine",
    details: {
      text:
        "Radiates higher sheen with smooth silky finish and unique anti-bacterial shield for walls,\nScratch Resistant,\nEquivalent to Royale Shine,\n8 yrs warranty",
      image: ultimo_shine,
    },
  },
  {
    title: "Premium Acrylic Emulsion",
    details: {
      text:
        "Gives rich matte finish and designed to prevent fungal growth on walls with durability,\nVarieties -- Matt and Gloss,\n5 yrs warranty",
      image: premium_acrylic_emulsion,
    },
  },
  {
    title: "Heat Resistant Paint",
    details: {
      text:
        "Ensures excellent heat protection, drop in room temperature & provides power saving benefits,\nSRI value -- 110,\nBased on Nano Technology,\n7 yrs warranty",
      image: heat_resistant_paint,
    },
  },
  {
    title: "UV Paint for Exterior",
    details: {
      text:
        "Protects against sunlight and rain water degradation with thermal barrier technology,\nVarities - Matt and Finish,\nScratch Resistant,\nUV protection",
      image: uv_paint_for_exterior,
    },
  },
  {
    title: "Acrylic Bond Distemper",
    details: {
      text:
        "Wide coverage area ensuring good opacity and delivers tough durable economical interior solutions,\n2 yrs warranty",
      image: acrylic_bond_distemper,
    },
  },
  {
    title: "Floor Coating",
    details: {
      text:
        "High-build durable product with excellent gloss, color retention and mechanical strength for industrial floors",
      image: floor_coating,
    },
  },
  {
    title: "Synthetic Enamel",
    details: {
      text:
        "Solvent-based paints with superior mirror gloss finish applicable on metal, wall & wood surfaces",
      image: synthetic_enamel,
    },
  },
];

const ProductShowcase = () => {
  return (
    <div className="product-showcase" id="product-showcase">
      <span className="vmv-subtitle">EXPLORE OUR PRODUCTS</span>
      {users.map((item, index) => (
        <div className="product-row" key={index}>
          
          {/* Left Image */}
          <div className="product-image">
            <img src={item.details.image} alt={item.title} />
          </div>

          {/* Right Black Box */}
          <div className="product-details-box">
            <h2 className="product-title">
              {item.title.toUpperCase()}
            </h2>

            <div className="product-text">
              {item.details.text.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ProductShowcase;
