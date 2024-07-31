import React, { Component } from 'react'
import { GiFlowerPot } from 'react-icons/gi'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  openModal = () => {
    this.setState({ isOpen: true })
  }

  closeModal = () => {
    this.setState({ isOpen: false })
  }

  render() {
    const { isOpen } = this.state

    return (
      <div>
        <div className="blog">
          <div className="blog-block">
            <div className="blog-image">
              <img src="./img/facts.jpg" alt="Facts" />
            </div>
            <div className="blog-wrapper">
              <h2 className="blog-title-if">
                Blog <GiFlowerPot className="blog-flower" />
              </h2>
              <h3 className="blog-if">Fun Facts</h3>

              <div className="preview-text">
                <p>On our Blog we have collected Fun Facts for you!</p>
              </div>
              <div className="blog-text-if">
                <ol>
                  <li>
                    Roses are related to apples, raspberries, cherries, peaches,
                    plums, nectarines, pears and almonds.
                  </li>
                  <li>
                    Tulip bulbs were more valuable than gold in Holland in the
                    1600s
                  </li>
                  <li>
                    Ancient civilizations burned aster leaves to ward off evil
                    spirits.
                  </li>
                  <li>
                    Tulip bulbs can be substituted for onions in a recipe.
                  </li>
                  <li>
                    Chrysanthemums are associated with funerals in Malta and are
                    considered unlucky.
                  </li>
                </ol>
                <div className="read-more">
                  <button onClick={this.openModal}>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.closeModal}>
                ×
              </span>
              <h3 className="blog-if-modal">Fun Facts</h3>

              <div className="preview-text-modal">
                <p>On our Blog we have collected Fun Facts for you!</p>
              </div>
              <div className="blog-text-if-modal">
                <ol>
                  <li>
                    Roses are related to apples, raspberries, cherries, peaches,
                    plums, nectarines, pears and almonds.
                  </li>
                  <li>
                    Tulip bulbs were more valuable than gold in Holland in the
                    1600s
                  </li>
                  <li>
                    Ancient civilizations burned aster leaves to ward off evil
                    spirits.
                  </li>
                  <li>
                    Tulip bulbs can be substituted for onions in a recipe.
                  </li>
                  <li>
                    Chrysanthemums are associated with funerals in Malta and are
                    considered unlucky.
                  </li>
                  <li>
                    The very expensive spice, saffron, comes from a type of
                    crocus flower.
                  </li>
                  <li>
                    Almost 60 percent of fresh-cut flowers grown in the U.S.
                    come from California.
                  </li>
                  <li>
                    Flowering nicotiana is related to tobacco, from which
                    cigarettes are made.
                  </li>
                  <li>
                    Gas plants produce a clear gas on humid, warm nights. This
                    gas is said to be ignitable with a lit match.
                  </li>
                  <li>
                    During the Middle Ages, lady’s mantle was thought to have
                    magic healing properties.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Modal
