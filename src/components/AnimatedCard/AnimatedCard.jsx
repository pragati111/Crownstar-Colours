import React from "react";
import "./AnimatedCard.css";

const AnimatedCard = ({ title, description, list, variant, icon }) => {
  return (
    <div className={`e-card playing ${variant}`}>
      
      <div className="infotop">
        {icon && <div className="icon-wrap">{icon}</div>}

        <h3 className="card-title">{title}</h3>

        {description && <p className="card-text">{description}</p>}

        {list && (
          <ul className="card-list">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
};

export default AnimatedCard;
