import React, { useState } from 'react'
import Modal from 'react-modal'
import axios from 'axios'

const OrderModal = ({ isOpen, onRequestClose }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('creditCard')

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log('Selected payment method:', paymentMethod)
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleAddressChange = (event) => {
    setAddress(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .get('https://api.example.com/data')
      .then((response) => console.log(response.data))
      .catch((error) => console.error('Error:', error))
    console.log('Sent data:', {
      firstName,
      lastName,
      phoneNumber,
      address,
      paymentMethod,
    })
    onRequestClose()
  }

  return (
    <Modal
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: ' #0303039c',
          zIndex: '9999',
        },
        content: {
          position: 'absolute',
          height: '500px',
          justifyContent: 'spaceBetween',
          margin: '10% auto',
          padding: '60px 30px',
          width: '500px',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'rgb(239, 231, 235)',
          overflow: 'auto',
          //   WebkitOverflowScrolling: 'touch',
          webkitBoxShadow: '4px 5px 10px 2px rgba(49, 28, 47, 0.2)',
          mozBoxShadow: '4px 5px 10px 2px rgba(49, 28, 47, 0.2)',
          boxShadow: '4px 5px 10px 2px rgba(49, 28, 47, 0.2)',
          borderRadius: '9px',
          outline: 'none',
          padding: '20px',
        },
      }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Placing an Order"
    >
      <div className="form-block">
        <div className="form-title">
          <h2>Placing an Order</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              placeholder="enter your first name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              placeholder="enter your last name"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="tel"
              placeholder="enter your phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </label>
          <br />
          <label>
            Address:
            <input
              type="address"
              placeholder="enter your address"
              value={address}
              onChange={handleAddressChange}
            />
          </label>
          <br />
          <label>
            Payment Method:
            <select value={paymentMethod} onChange={handlePaymentChange}>
              <option value="creditCard">Credit Card</option>
              <option value="visa">VISA</option>
              <option value="paypal">PayPal</option>
            </select>
          </label>{' '}
          <div className="form-button">
            <button type="submit">Send</button>
          </div>
        </form>
        {/* <button onClick={onRequestClose}>Close</button> */}
      </div>
    </Modal>
  )
}
export default OrderModal
