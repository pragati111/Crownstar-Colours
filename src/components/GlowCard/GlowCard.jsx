import React from 'react'
import './GlowCard.css'

const GlowCard = ({ title, description }) => {

  const handlePointerMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const xp = x / rect.width
    const yp = y / rect.height

    card.style.setProperty('--x', x)
    card.style.setProperty('--y', y)
    card.style.setProperty('--xp', xp)
    card.style.setProperty('--yp', yp)
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
      <span data-glow></span>

      <h3>{title}</h3>
      <p>{description}</p>

      <button data-glow>
        <span>Know More</span>
      </button>
    </article>
  )
}

export default GlowCard
