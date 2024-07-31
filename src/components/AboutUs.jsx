import React, { Component } from 'react'
import { IoMdFlower } from 'react-icons/io'
import { Link } from 'react-router-dom'

export class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <div className="about-us-block">
          <h2 className="about-us-title">
            About Us <IoMdFlower className="about-flower" />
          </h2>
          <p className="about-us-text">
            Flower Shop is the best for you. We are a Flower Shop with a wide
            variety of flowers. Decor, wrapping for bouquets, we will do
            everything to your type. With us your home will smell fresh and with
            a floral scent. You can please your mother, grandmother and beloved
            woman only with us! We have many flowers of different types and
            colors. Maybe you will like bright tulips or May peonies of
            different colors. Why us? We do not only quickly but also
            beautifully. With us you can embody all your fantasies.
          </p>

          <div className="buy-now">
            <Link to="/shop">Buy Now</Link>
          </div>
        </div>
        <div className="about-us-image">
          <img src="./public/img/aboutus.jpg" alt="about us" />
        </div>
      </div>
    )
  }
}

export default AboutUs
