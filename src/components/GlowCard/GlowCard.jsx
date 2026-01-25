import React from 'react'
import './GlowCard.css'


const GlowCard = ({ title, description, image }) => {

  const handlePointerMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    card.style.setProperty('--x', x)
    card.style.setProperty('--y', y)
  }

  const handlePointerLeave = (e) => {
    const card = e.currentTarget
    card.style.removeProperty('--x')
    card.style.removeProperty('--y')
  }

  return (
    <article
      className="glow-card"
      data-glow
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <span data-glow />

      {/* IMAGE */}
      <div className="glow-image">
        <img src={image} alt={title} />
      </div>

      {/* CONTENT */}
      <div className="glow-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <button data-glow>
        <span>Know More</span>
      </button>
    </article>
  )
}

export default GlowCard
