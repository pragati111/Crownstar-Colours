import React from 'react'
import GlowCard from '../GlowCard/GlowCard'
import './GlowSection.css'
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"

const GlowSection = () => {
  return (
    <section className="glow-section">
      <h2 className="glow-section-heading">OUR 3 MAIN PRODUCTS</h2>

      <div className="glow-cards-wrapper">
        <GlowCard
          title="Industrial Coatings"
          description="High-performance coatings engineered for durability and precision."
          image={image2}
          glowColor="rgba(255, 140, 0, 0.6)"
        />
        <GlowCard
          title="Powder Coatings"
          description="Durable, heat-resistant powder coating solutions."
          image={image3}
          glowColor="rgba(0, 140, 255, 0.6)" 
        />
        <GlowCard
          title="Heat Resistant Paints"
          description="Advanced coatings resistant up to 600°C."
          image={image4}
          glowColor="rgba(255, 60, 60, 0.6)"
        />
      </div>
    </section>
  )
}

export default GlowSection
