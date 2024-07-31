import React, { Component } from 'react'

export class Colors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [
        {
          key: 'all',
          name: 'All Colors',
        },
        {
          key: 'white',
          name: 'White',
        },
        {
          key: 'red',
          name: 'Red',
        },
        {
          key: 'pink',
          name: 'Pink',
        },
        {
          key: 'blue',
          name: 'Blue',
        },
        {
          key: 'violet',
          name: 'Violet',
        },
        {
          key: 'yellow',
          name: 'Yellow',
        },
      ],
    }
  }
  render() {
    return (
      <div className="colors">
        {this.state.colors.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseColor(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    )
  }
}

export default Colors
