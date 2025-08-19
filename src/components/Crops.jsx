import React from 'react'
import './Crops.css'

const Crops = () => {
  const crops = [
    {
      name: "Millet",
      description: "Drought-resistant grain crop, rich in nutrients and well-suited to Borno's climate",
      benefits: ["High protein", "Gluten-free", "Drought tolerant"],
      season: "Rainy season (May-October)"
    },
    {
      name: "Sorghum",
      description: "Versatile cereal grain used for food, animal feed, and traditional brewing",
      benefits: ["High fiber", "Iron rich", "Climate resilient"],
      season: "Rainy season (June-November)"
    },
    {
      name: "Cowpea (Black-eyed Peas)",
      description: "Protein-rich legume that improves soil fertility through nitrogen fixation",
      benefits: ["High protein", "Soil improvement", "Multiple uses"],
      season: "Rainy season (May-September)"
    },
    {
      name: "Groundnuts (Peanuts)",
      description: "Oil-rich crop valuable for food security and export potential",
      benefits: ["High oil content", "Export value", "Nutrition dense"],
      season: "Rainy season (May-October)"
    },
    {
      name: "Sesame",
      description: "High-value oil seed crop with excellent market demand",
      benefits: ["Premium oil", "Export crop", "Medicinal properties"],
      season: "Rainy season (June-October)"
    },
    {
      name: "Maize",
      description: "Staple grain crop providing food security and animal feed",
      benefits: ["Staple food", "Animal feed", "Processing potential"],
      season: "Rainy season (May-September)"
    }
  ]

  return (
    <section id="crops" className="crops">
      <div className="container">
        <h2>Our Crops</h2>
        <p className="crops-intro">
          We cultivate a diverse range of crops that are well-adapted to Borno State's climate 
          and contribute significantly to Nigeria's agricultural output and food security.
        </p>
        
        <div className="crops-grid">
          {crops.map((crop, index) => (
            <div key={index} className="crop-card">
              <h3>{crop.name}</h3>
              <p className="crop-description">{crop.description}</p>
              
              <div className="crop-benefits">
                <h4>Key Benefits:</h4>
                <ul>
                  {crop.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="crop-season">
                <strong>Growing Season:</strong> {crop.season}
              </div>
            </div>
          ))}
        </div>
        
        <div className="crops-footer">
          <p>
            All our crops are grown using sustainable farming practices that preserve soil health 
            and support biodiversity while maximizing yield and quality.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Crops
