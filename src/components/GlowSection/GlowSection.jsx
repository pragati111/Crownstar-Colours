import React from 'react'
import GlowCard from '../GlowCard/GlowCard'
import './GlowSection.css'

const GlowSection = () => {
  return (
    <section className="glow-section">
      <GlowCard
        title="Industrial Coatings"
        description="High-performance coatings engineered for durability and precision."
      />
      <GlowCard
        title="Powder Coatings"
        description="Durable, heat-resistant powder coating solutions."
      />
      <GlowCard
        title="Heat Resistant Paints"
        description="Advanced coatings resistant up to 600°C."
      />
    </section>
  )
}

export default GlowSection
