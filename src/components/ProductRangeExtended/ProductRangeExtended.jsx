import React from 'react'
import './ProductRangeExtended.css'

const productCategories = [
  {
    title: 'Industrial Coatings',
    items: [
      'Low Bake PU Paint System for Plastic Components',
      'Clear & Transparent Coatings',
      'Heat Resistant Paints (Metallic & Non-Metallic)',
      'Speciality Primers',
      'Unique Anti-Corrosive Primer Formulations',
      'Metallic Base Coats',
      'Fast Drying Paints'
    ]
  },
  {
    title: 'Powder Coatings',
    items: [
      'Epoxy Polyester (Hybrid)',
      'Pure Polyester',
      'Heat Resistant Powder (Up to 600°C)',
      'Nylon Powder',
      'PU Powders',
      'Pure Epoxy'
    ]
  },
  {
    title: 'Heat Resistant Coatings',
    items: [
      'HR Grey Paint up to 600°C (Internal application of Muffler / Silencer)',
      'HR Silver up to 600°C (Exhaust / Chimney)',
      'HR Black Paint up to 600°C (External application of Muffler / Silencer)'
    ]
  },
  {
    title: 'Eco-Friendly & Special Products',
    items: [
      'Paint Sludge Recycling',
      'Structural Paints',
      'Epoxy Primer for Automotive Components',
      'Casting Sealers',
      'All Types of Industrial Primers'
    ]
  }
]

const ProductRangeExtended = () => {
  return (
    <div className="product-range-container" id="product-range-container">
      {/*<span className="product-subtitle">Our Expertise</span>*/}
      <h2 className="product-title">EXTENDED PRODUCT RANGE</h2>

      <div className="product-sections">
        {productCategories.map((category, index) => (
          <div className="product-card" key={index}>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductRangeExtended
