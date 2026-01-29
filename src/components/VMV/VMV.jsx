import React from "react";
import "./VMV.css";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
import { VisionIcon, MissionIcon, ValuesIcon } from '../../icons'

const VMV = () => {
  return (
    <div className="vmv-container">
      <span className="vmv-subtitle">OUR FOUNDATION</span>
      <br />
      <br />
      <br />

      <div className="vmv-cards">
        <AnimatedCard
          title="VISION"
          description="To be a global organization that lives by strong values and consistently creates excellence in everything it does."
          variant="vision"
          icon={<VisionIcon />}
        />

        <AnimatedCard
          title="MISSION"
          description="To ethically grow by setting global benchmarks across all performance parameters, with an unwavering focus on 100% quality."
          variant="mission"
          icon={<MissionIcon />}
        />

        <AnimatedCard
          title="VALUES"
          list={[
            "Happiness in our work and workplace",
            "Peaceful and positive environment",
            "Self-motivation & continuous improvement",
          ]}
          variant="values"
          icon={<ValuesIcon />}
        />
      </div>
    </div>
  );
};

export default VMV;
