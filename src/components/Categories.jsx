import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'All',
        },
        {
          key: 'tulips',
          name: 'Tulips',
        },
        {
          key: 'rose',
          name: 'Roses',
        },
        {
          key: 'lily',
          name: 'Lilies',
        },
        {
          key: 'hyndrangea',
          name: 'Hyndrangeas',
        },
        {
          key: 'peonies',
          name: 'Peonies',
        },
        {
          key: 'carnations',
          name: 'Carnations',
        },
        {
          key: 'daisy',
          name: 'Daises',
        },
        {
          key: 'dahlia',
          name: 'Dahlias',
        },
        {
          key: 'sunflower',
          name: 'Sunflowers',
        },
        {
          key: 'plumeria',
          name: 'Plumeria',
        },
        {
          key: 'gypsophila',
          name: 'Gypsophila',
        },
      ],
    }
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    )
  }
}

export default Categories
