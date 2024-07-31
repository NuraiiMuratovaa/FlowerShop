import React, { Component } from 'react'
import { GiDandelionFlower } from 'react-icons/gi'

export class ContactUs extends Component {
  render() {
    return (
      <div className="contact-us">
        <div className="contact-us-title">
          Contact Us <GiDandelionFlower className="contact-flower" />
        </div>
        <div className="contact-us-block">
          <div className="contact-us-about">
            <p>
              Do you have any questions? We want to know what you like or
              dislike, or what you would like to buy from our store. We want to
              be closer to you. You can contact us with any questions!
            </p>
          </div>
          <div className="contact-block">
            <div className="address">
              <div className="contact-title">
                <p>Address:</p>
              </div>
              <div className="contact-text">
                <p>Kyrgyzstan Talas</p>
              </div>
            </div>
            <div className="phone-number">
              <div className="contact-title">
                <p>Phone number:</p>
              </div>
              <div className="contact-text">+996 000 00 00 00</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactUs
