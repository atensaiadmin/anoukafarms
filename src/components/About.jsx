import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Anouka Farms</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Located in the fertile lands of Borno State, Nigeria, Anouka Farms is dedicated to 
              sustainable agriculture and contributing to both Nigeria's and the world's food security. 
              Our mission is to produce high-quality, nutritious crops while supporting local communities 
              and promoting environmentally responsible farming practices.
            </p>
            <p>
              We specialize in cultivating a diverse range of crops suited to our region's climate, 
              including grains, legumes, and cash crops. Our commitment to excellence and sustainability 
              drives us to implement modern farming techniques while respecting traditional agricultural wisdom.
            </p>
          </div>
          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">🌱</div>
              <div className="feature-content">
                <h3>Sustainable Farming</h3>
                <p>Environmentally responsible practices for long-term soil health and biodiversity preservation</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">🤝</div>
              <div className="feature-content">
                <h3>Community Support</h3>
                <p>Supporting local farmers and contributing to regional economic development</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <div className="feature-content">
                <h3>Quality Focus</h3>
                <p>Premium crops that meet international standards and local market demands</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">🌍</div>
              <div className="feature-content">
                <h3>Global Impact</h3>
                <p>Contributing to food security in Nigeria and strengthening the global food basket</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
