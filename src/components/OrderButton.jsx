import React, { useState } from 'react'
import OrderModal from './OrderModal'

const OrderButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    event.target.reset()
  }

  return (
    <div className="to-order">
      <button onClick={openModal}>To Order</button>
      <OrderModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  )
}

export default OrderButton
