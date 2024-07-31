import React from 'react'
import { Helmet } from 'react-helmet'
import NavBar from './NavBar'

function Home() {
  return (
    <header>
      <div>
        <Helmet>
          <title>Flower Shop</title>
          <meta
            name="description"
            content="Flower Shop, flowers for hollidays"
          />
        </Helmet>
      </div>
      <div className="presentation"></div>
    </header>
  )
}

export default Home
