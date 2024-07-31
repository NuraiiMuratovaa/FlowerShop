// Terminal
// cd my-app
// npm start

import React from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Shop from './components/Shop'
import NotFound from './components/NotFound'
import Items from './components/Items'
import Categories from './components/Categories'
import Colors from './components/Colors'
import ShowFullItem from './components/ShowFullItem'
import AboutUs from './components/AboutUs'
import Modal from './components/Modal'
import Flower from './components/Flower'
import ContactUs from './components/ContactUs'
import ContactUsInput from './components/ContactUsInput'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currenItems: [],
      items: [
        {
          id: 1,
          title: 'Daisy',
          price: 2.54,
          img: 'daisy.jpg',
          desc: 'Daisy, any of several species of flowering plants belonging to the aster family (Asteraceae). The name daisy commonly denotes the oxeye daisy (Leucanthemum vulgare), the Shasta daisy (L. ×superbum), and the English, or true, daisy (Bellis perennis). These and other plants called daisies are distinguished by a composite flower head composed of 15 to 30 white ray flowers surrounding a centre consisting of bright yellow disk flowers, though other colour combinations are common.',
          category: 'daisy',
          color: 'white',
        },
        {
          id: 2,
          title: 'Rose',
          price: 2.99,
          img: 'white-rose.jpg',
          desc: 'Rose, (genus Rosa), genus of some 100 species of perennial shrubs in the rose family (Rosaceae). Roses are native primarily to the temperate regions of the Northern Hemisphere. Many roses are cultivated for their beautiful flowers, which range in colour from white through various tones of yellow and pink to dark crimson and maroon, and most have a delightful fragrance, which varies according to the variety and to climatic conditions.',
          category: 'rose',
          color: 'white',
        },
        {
          id: 3,
          title: 'Sun Flower',
          price: 1.53,
          img: 'sunflower.jpg',
          desc: 'Sunflower, (genus Helianthus), genus of nearly 70 species of herbaceous plants of the aster family (Asteraceae). Sunflowers are native primarily to North and South America, and some species are cultivated as ornamentals for their spectacular size and flower heads and for their edible seeds. ',
          category: 'sunflower',
          color: 'yellow',
        },
        {
          id: 4,
          title: 'Rose',
          price: 2.99,
          img: 'red-rose.jpg',
          desc: 'Rose, (genus Rosa), genus of some 100 species of perennial shrubs in the rose family (Rosaceae). Roses are native primarily to the temperate regions of the Northern Hemisphere. Many roses are cultivated for their beautiful flowers, which range in colour from white through various tones of yellow and pink to dark crimson and maroon, and most have a delightful fragrance, which varies according to the variety and to climatic conditions.',
          category: 'rose',
          color: 'red',
        },
        {
          id: 5,
          title: 'Rose',
          price: 2.99,
          img: 'pink-rose.jpg',
          desc: 'Rose, (genus Rosa), genus of some 100 species of perennial shrubs in the rose family (Rosaceae). Roses are native primarily to the temperate regions of the Northern Hemisphere. Many roses are cultivated for their beautiful flowers, which range in colour from white through various tones of yellow and pink to dark crimson and maroon, and most have a delightful fragrance, which varies according to the variety and to climatic conditions.',
          category: 'rose',
          color: 'pink',
        },
        {
          id: 6,
          title: 'Dahlia',
          price: 2.95,
          img: 'dahlia.jpg',
          desc: 'Dahlia, (genus Dahlia), genus of about 40 species of flowering plants in the aster family (Asteraceae), native to the higher elevations of Mexico and Central America. About six of the species in the Dahlia genus have been bred for cultivation as ornamental flowers and are popular in the floral industry and in gardens.',
          category: 'dahlia',
          color: 'pink',
        },
        {
          id: 7,
          title: 'Peony',
          price: 3.66,
          img: 'pink-peonies.jpg',
          desc: 'Peony, (genus Paeonia), genus of about 30 species of flowering plants (family Paeoniaceae) known for their large showy blossoms. All but two species are native to Europe and Asia, and several species are cultivated as ornamentals and for the floral industry.',
          category: 'peonies',
          color: 'pink',
        },
        {
          id: 8,
          title: 'Tulip',
          price: 1.33,
          img: 'pink-tulips.jpg',
          desc: 'Tulip, (genus Tulipa), genus of about 100 species of bulbous herbs in the lily family, many of which are cultivated in temperate regions for their showy blooms. Native to Central Asia and Turkey, tulips are among the most popular of all garden flowers, and numerous cultivars and varieties have been developed.',
          category: 'tulips',
          color: 'pink',
        },
        {
          id: 9,
          title: 'Hyndrangea',
          price: 4.44,
          img: 'violet-hyndrangea.jpg',
          desc: 'Hydrangea, (genus Hydrangea), any of a genus of erect or climbing woody shrubs, in the family Hydrangeaceae, native to the Western Hemisphere and eastern Asia. About 23 species are known. Several species are grown in greenhouses and gardens for their showy, usually ball-like flower clusters.',
          category: 'hyndrangea',
          color: 'violet',
        },
        {
          id: 10,
          title: 'Lily',
          price: 4.85,
          img: 'white-lily.jpg',
          desc: 'Hydrangea, (genus Hydrangea), any of a genus of erect or climbing woody shrubs, in the family Hydrangeaceae, native to the Western Hemisphere and eastern Asia. About 23 species are known. Several species are grown in greenhouses and gardens for their showy, usually ball-like flower clusters.',
          category: 'lily',
          color: 'white',
        },
        {
          id: 11,
          title: 'Hyndrangea',
          price: 4.44,
          img: 'blue-hyndrangea.jpg',
          desc: 'Hydrangea, (genus Hydrangea), any of a genus of erect or climbing woody shrubs, in the family Hydrangeaceae, native to the Western Hemisphere and eastern Asia. About 23 species are known. Several species are grown in greenhouses and gardens for their showy, usually ball-like flower clusters.',
          category: 'hyndrangea',
          color: 'blue',
        },
        {
          id: 12,
          title: 'Tulip',
          price: 1.33,
          img: 'white-tulips.jpg',
          desc: 'Tulip, (genus Tulipa), genus of about 100 species of bulbous herbs in the lily family, many of which are cultivated in temperate regions for their showy blooms. Native to Central Asia and Turkey, tulips are among the most popular of all garden flowers, and numerous cultivars and varieties have been developed.',
          category: 'tulips',
          color: 'white',
        },
        {
          id: 13,
          title: 'Peony',
          price: 3.66,
          img: 'violet-peonies.jpg',
          desc: 'Peony, (genus Paeonia), genus of about 30 species of flowering plants (family Paeoniaceae) known for their large showy blossoms. All but two species are native to Europe and Asia, and several species are cultivated as ornamentals and for the floral industry.',
          category: 'peonies',
          color: 'violet',
        },
        {
          id: 14,
          title: 'Tulip',
          price: 1.33,
          img: 'yellow-tulips.jpg',
          desc: 'Tulip, (genus Tulipa), genus of about 100 species of bulbous herbs in the lily family, many of which are cultivated in temperate regions for their showy blooms. Native to Central Asia and Turkey, tulips are among the most popular of all garden flowers, and numerous cultivars and varieties have been developed.',
          category: 'tulips',
          color: 'yellow',
        },
        {
          id: 15,
          title: 'Carnation',
          price: 5.55,
          img: 'carnation.jpg',
          desc: 'Carnation, (Dianthus caryophyllus), herbaceous plant of the pink, or carnation, family (Caryophyllaceae), native to the Mediterranean area. It is widely cultivated for its fringe-petaled flowers, which often have a spicy fragrance, and is used extensively in the floral industry. ',
          category: 'carnations',
          color: 'red',
        },
        {
          id: 16,
          title: 'Hyndrangea',
          price: 4.44,
          img: 'pink-hyndrangea.jpg',
          desc: 'Hydrangea, (genus Hydrangea), any of a genus of erect or climbing woody shrubs, in the family Hydrangeaceae, native to the Western Hemisphere and eastern Asia. About 23 species are known. Several species are grown in greenhouses and gardens for their showy, usually ball-like flower clusters.',
          category: 'hyndrangea',
          color: 'pink',
        },
        {
          id: 17,
          title: 'Tulip',
          price: 1.33,
          img: 'red-tulips.jpg',
          desc: 'Tulip, (genus Tulipa), genus of about 100 species of bulbous herbs in the lily family, many of which are cultivated in temperate regions for their showy blooms. Native to Central Asia and Turkey, tulips are among the most popular of all garden flowers, and numerous cultivars and varieties have been developed.',
          category: 'tulips',
          color: 'red',
        },
        {
          id: 18,
          title: 'Dahlia',
          price: 2.95,
          img: 'blue-dahlia.jpg',
          desc: 'Dahlia, (genus Dahlia), genus of about 40 species of flowering plants in the aster family (Asteraceae), native to the higher elevations of Mexico and Central America. About six of the species in the Dahlia genus have been bred for cultivation as ornamental flowers and are popular in the floral industry and in gardens.',
          category: 'dahlia',
          color: 'blue',
        },
        {
          id: 19,
          title: 'Plumeria',
          price: 6.66,
          img: 'yellow-plumeria.jpg',
          desc: 'Plumeria (/pluːˈmɛriə/), also known as frangipani, is a genus of flowering plants in the subfamily Rauvolfioideae, of the family Apocynaceae. Most species are deciduous shrubs or small trees. The species are native to the Neotropical realm (in Mexico, Central America, and the Caribbean, and as far south as Brazil and as far north as Florida in the United States), but are often grown as cosmopolitan ornamentals in tropical regions, especially in Hawaii, as well as hot desert climates in the Arabian Peninsula with proper irrigation.',
          category: 'plumeria',
          color: 'yellow',
        },
        {
          id: 20,
          title: 'Carnation',
          price: 5.55,
          img: 'pink-carnation.jpg',
          desc: 'Carnation, (Dianthus caryophyllus), herbaceous plant of the pink, or carnation, family (Caryophyllaceae), native to the Mediterranean area. It is widely cultivated for its fringe-petaled flowers, which often have a spicy fragrance, and is used extensively in the floral industry. ',
          category: 'carnations',
          color: 'pink',
        },
        {
          id: 21,
          title: 'Rose',
          price: 2.99,
          img: 'yellow-rose.jpg',
          desc: 'Rose, (genus Rosa), genus of some 100 species of perennial shrubs in the rose family (Rosaceae). Roses are native primarily to the temperate regions of the Northern Hemisphere. Many roses are cultivated for their beautiful flowers, which range in colour from white through various tones of yellow and pink to dark crimson and maroon, and most have a delightful fragrance, which varies according to the variety and to climatic conditions.',
          category: 'rose',
          color: 'yellow',
        },
        {
          id: 22,
          title: 'Peony',
          price: 3.66,
          img: 'red-peonies.jpg',
          desc: 'Peony, (genus Paeonia), genus of about 30 species of flowering plants (family Paeoniaceae) known for their large showy blossoms. All but two species are native to Europe and Asia, and several species are cultivated as ornamentals and for the floral industry.',
          category: 'peonies',
          color: 'red',
        },
        {
          id: 23,
          title: 'Gypsophila',
          price: 7.77,
          img: 'white-gypsophila.jpg',
          desc: 'Gypsophila, an attractive flowering shrub with silver-gray stems and small flowers, first gained popularity around 150 years ago in Britain. Then this flower remained underestimated by florists for a long time - and only in recent years the gypsophila plant has become a full-fledged, independent element of touching bouquets.',
          category: 'gypsophila',
          color: 'white',
        },
        {
          id: 24,
          title: 'Plumeria',
          price: 6.66,
          img: 'pink-plumeria.jpg',
          desc: 'Plumeria (/pluːˈmɛriə/), also known as frangipani, is a genus of flowering plants in the subfamily Rauvolfioideae, of the family Apocynaceae. Most species are deciduous shrubs or small trees. The species are native to the Neotropical realm (in Mexico, Central America, and the Caribbean, and as far south as Brazil and as far north as Florida in the United States), but are often grown as cosmopolitan ornamentals in tropical regions, especially in Hawaii, as well as hot desert climates in the Arabian Peninsula with proper irrigation.',
          category: 'plumeria',
          color: 'pink',
        },
        {
          id: 25,
          title: 'Dahlia',
          price: 2.95,
          img: 'red-dahlia.jpg',
          desc: 'Dahlia, (genus Dahlia), genus of about 40 species of flowering plants in the aster family (Asteraceae), native to the higher elevations of Mexico and Central America. About six of the species in the Dahlia genus have been bred for cultivation as ornamental flowers and are popular in the floral industry and in gardens.',
          category: 'dahlia',
          color: 'red',
        },
        {
          id: 26,
          title: 'Carnation',
          price: 5.55,
          img: 'yellow-carnation.jpg',
          desc: 'Carnation, (Dianthus caryophyllus), herbaceous plant of the pink, or carnation, family (Caryophyllaceae), native to the Mediterranean area. It is widely cultivated for its fringe-petaled flowers, which often have a spicy fragrance, and is used extensively in the floral industry. ',
          category: 'carnations',
          color: 'yellow',
        },
        {
          id: 27,
          title: 'Gypsophila',
          price: 7.77,
          img: 'violet-gypsophila.jpg',
          desc: 'Gypsophila, an attractive flowering shrub with silver-gray stems and small flowers, first gained popularity around 150 years ago in Britain. Then this flower remained underestimated by florists for a long time - and only in recent years the gypsophila plant has become a full-fledged, independent element of touching bouquets.',
          category: 'gypsophila',
          color: 'violet',
        },
        {
          id: 28,
          title: 'Dahlia',
          price: 2.95,
          img: 'violet-dahlia.jpg',
          desc: 'Dahlia, (genus Dahlia), genus of about 40 species of flowering plants in the aster family (Asteraceae), native to the higher elevations of Mexico and Central America. About six of the species in the Dahlia genus have been bred for cultivation as ornamental flowers and are popular in the floral industry and in gardens.',
          category: 'dahlia',
          color: 'violet',
        },
        {
          id: 29,
          title: 'Plumeria',
          price: 6.66,
          img: 'red-plumeria.jpg',
          desc: 'Plumeria (/pluːˈmɛriə/), also known as frangipani, is a genus of flowering plants in the subfamily Rauvolfioideae, of the family Apocynaceae. Most species are deciduous shrubs or small trees. The species are native to the Neotropical realm (in Mexico, Central America, and the Caribbean, and as far south as Brazil and as far north as Florida in the United States), but are often grown as cosmopolitan ornamentals in tropical regions, especially in Hawaii, as well as hot desert climates in the Arabian Peninsula with proper irrigation.',
          category: 'plumeria',
          color: 'red',
        },
        {
          id: 30,
          title: 'Gypsophila',
          price: 7.77,
          img: 'blue-gypsophila.jpg',
          desc: 'Gypsophila, an attractive flowering shrub with silver-gray stems and small flowers, first gained popularity around 150 years ago in Britain. Then this flower remained underestimated by florists for a long time - and only in recent years the gypsophila plant has become a full-fledged, independent element of touching bouquets.',
          category: 'gypsophila',
          color: 'blue',
        },
        {
          id: 31,
          title: 'Peony',
          price: 3.66,
          img: 'yellow-peonies.jpg',
          desc: 'Peony, (genus Paeonia), genus of about 30 species of flowering plants (family Paeoniaceae) known for their large showy blossoms. All but two species are native to Europe and Asia, and several species are cultivated as ornamentals and for the floral industry.',
          category: 'peonies',
          color: 'yellow',
        },
        {
          id: 32,
          title: 'Hyndrangea',
          price: 4.44,
          img: 'white-gartenzia.jpg',
          desc: 'Hydrangea, (genus Hydrangea), any of a genus of erect or climbing woody shrubs, in the family Hydrangeaceae, native to the Western Hemisphere and eastern Asia. About 23 species are known. Several species are grown in greenhouses and gardens for their showy, usually ball-like flower clusters.',
          category: 'hyndrangea',
          color: 'white',
        },
        {
          id: 33,
          title: 'Plumeria',
          price: 6.66,
          img: 'blue-plumeria.jpg',
          desc: 'Plumeria (/pluːˈmɛriə/), also known as frangipani, is a genus of flowering plants in the subfamily Rauvolfioideae, of the family Apocynaceae. Most species are deciduous shrubs or small trees. The species are native to the Neotropical realm (in Mexico, Central America, and the Caribbean, and as far south as Brazil and as far north as Florida in the United States), but are often grown as cosmopolitan ornamentals in tropical regions, especially in Hawaii, as well as hot desert climates in the Arabian Peninsula with proper irrigation.',
          category: 'plumeria',
          color: 'blue',
        },
      ],
      ShowFullItem: false,
      fullItem: {},
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.chooseColor = this.chooseColor.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Router>
          <NavBar orders={this.state.orders} onDelete={this.deleteOrder} />
          <Switch>
            <Route path="/" exact>
              {/* Main page */}
              <Home />
              {/* Block-Component AboutUs */}
              <AboutUs />
              {/* Block-Component Blog */}
              <Modal />
              {/* Block-Component about properties of flowers */}
              <Flower />
              {/* Block-Component ContactUs */}
              <ContactUs />
              {/* Input ContactUs */}
              <ContactUsInput />
            </Route>
            {/*Page Shop  */}
            <Route path="/shop" component={Shop} exact>
              {/* Component Shop */}
              <Shop />
              {/* Title Categories of goods */}
              <Categories chooseCategory={this.chooseCategory} />
              {/* Title Color of goods */}
              <Colors chooseColor={this.chooseColor} />
              {/* Goods */}
              <Items
                onShowItem={this.onShowItem}
                items={this.state.currentItems}
                onAdd={this.addToOrder}
              />
              {this.state.showFullItem && (
                <ShowFullItem
                  onAdd={this.addToOrder}
                  onShowItem={this.onShowItem}
                  item={this.state.fullItem}
                />
              )}
            </Route>
            {/* Not Found */}
            <Route path="/*" component={NotFound} exact>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    })
  }

  chooseColor(color) {
    if (color === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.color === color),
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true
    })
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App
