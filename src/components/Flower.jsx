import React, { Component } from 'react'
import { GiRose } from 'react-icons/gi'

export class AboutUs extends Component {
  render() {
    return (
      <div className="flower">
        <div className="flower-block">
          <h2 className="flower-title">
            Properties of flowers
            <GiRose className="icon-flower" />
          </h2>
          <p className="flower-text">
            Initially, people paid attention to plants not because of their
            beauty, but because of their benefits. For many years, nature has
            been a source of food and medicineThe healing capabilities of plants
            are based on active therapeutic. substances. To treat and prevent
            various diseases, polysaccharides, alkaloids, essential oils,
            pigments, amino acids, vitamins, antibiotics and other chemical
            compounds that are beneficial to health are obtained from flowers
            and herbs.If flowers are present in a person’s life for several
            months, the level of life satisfaction increases, people are in a
            good mood and more often experience a feeling of happiness.
          </p>
        </div>
        <div className="flower-image">
          <img src="./img/flower.jpg" alt="flower" />
        </div>
      </div>
    )
  }
}

export default AboutUs
