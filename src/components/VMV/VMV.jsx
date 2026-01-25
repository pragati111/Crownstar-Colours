import React from 'react'
import './VMV.css'

const VMV = () => {
  return (
    <div className="vmv-container">
      <span className="vmv-subtitle">Our Foundation</span>
      <h2 className="vmv-title">Vision • Mission • Values</h2>

      <div className="vmv-cards">
        <div className="vmv-card">
          <h3>Vision</h3>
          <p>
            To be a global organization that lives by strong values and
            consistently creates excellence in everything it does.
          </p>
        </div>

        <div className="vmv-card">
          <h3>Mission</h3>
          <p>
            To ethically grow tenfold by setting global benchmarks across all
            performance parameters, with an unwavering focus on 100% quality.
          </p>
        </div>

        <div className="vmv-card">
          <h3>Values</h3>
          <ul>
            <li>Happiness in our work and workplace</li>
            <li>Peaceful and positive environment</li>
            <li>Self-motivation & continuous improvement</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VMV
