import React from 'react'
import './LabEquipments.css'
import RotatingCards from '../RotatingCards/RotatingCards'

const equipments = [
  { name: 'Salt Spray Chamber', desc: 'Testing corrosion resistance' },
  { name: 'QUV Apparatus', desc: 'Testing weather resistance' },
  { name: 'Impact Tester', desc: 'Testing impact with weight and height' },
  { name: 'Hot Water Bath', desc: 'Testing water resistance' },
  { name: 'Karl Fischer', desc: 'Testing moisture content' },
  { name: 'Melting Point Apparatus', desc: 'Testing melting point of resin' },
  { name: 'Taber Abrasion Tester', desc: 'Testing abrasion resistance' },
  { name: 'DFT Meter', desc: 'Testing dry film thickness' },
  { name: 'Glossometer', desc: 'Testing gloss at various optical angles' },
  { name: 'Scan-O-Lite', desc: 'Comparing shades under various light sources' },
  { name: 'Cryptometer', desc: 'Testing covering capacity' },
  { name: 'Spectrophotometer', desc: 'Shade matching and color consistency' },
  { name: 'Particle Size Analyzer', desc: 'Testing particle distribution in powder coating' },
  { name: 'Humidity Chamber', desc: 'Testing humidity resistance' },
  { name: 'Incubator', desc: 'Testing paint stability' }
]

const LabEquipments = () => {
  return (
    <div className="lab-container" id="lab-container">
      <span className="lab-subtitle">Quality Assurance</span>
      <h2 className="lab-title">Our Major Lab Equipments</h2>

      <div className="lab-animation">
        <RotatingCards />
      </div>
    </div>
  )
}

export default LabEquipments
