import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaShoppingBasket } from 'react-icons/fa'
import Order from './Order'
import Home from './Home'
import Shop from './Shop'
import OrderButton from './OrderButton'

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)))
  return (
    <div className="cart-block">
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">
        Subtotal: {new Intl.NumberFormat().format(summa)}$
        <OrderButton onDelete={props.onDelete} />
      </p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Basket is empty</h2>
    </div>
  )
}

export default function NavBar(props) {
  let [cartOpen, setCartOpen] = useState(false)
  let [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="nav-bar">
      <span className="logo">Flower Shop</span>
      <ul className="nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
      {/* <input
        className="input"
        value={searchTerm}
        autoFocus
        type="text"
        autoComplete="off"
        placeholder="Find a flower"
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}
      <FaShoppingBasket
        onClick={() => setCartOpen((cartOpen = !cartOpen))}
        className={`shop-cart-button ${cartOpen && 'active'}`}
      />
      {cartOpen && (
        <div className="shop-cart">
          {props.orders.length > 0 ? showOrders(props) : showNothing()}
        </div>
      )}
    </div>
  )
}
