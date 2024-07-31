import { useState } from 'react'
import React, { Component } from 'react'
import axios from 'axios'

const ContactUsInput = () => {
  const [fLName, setFLName] = useState('')
  const [email, setEmail] = useState('')

  const handleFLNameChange = (event) => {
    setFLName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .get('https://api.example.com/data')
      .then((response) => console.log(response.data))
      .catch((error) => console.error('Error:', error))
    console.log('Sent data:', {
      fLName,
      email,
    })
  }

  return (
    <div className="contact-us-input">
      <form>
        <label>
          <input
            type="text"
            placeholder="First name and Last name"
            value={fLName}
            onChange={handleFLNameChange}
          />
        </label>
        <br />
        <label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
      </form>
      <div className="contact-button">
        <button type="submit">Send</button>
      </div>
    </div>
  )
}

export default ContactUsInput
