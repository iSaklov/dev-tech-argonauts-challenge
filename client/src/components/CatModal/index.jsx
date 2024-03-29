import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import PlaceholderImage from '../../img/giphy.webp'
import classes from './index.module.css'

export default class CatModal extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.setState({ isOpen: true })}
          className="btn-floating btn-large waves-effect waves-light"
        >
          <i className="material-icons">adb</i>
        </button>
        {this.state.isOpen && (
          <div
            className={classes.__modal}
            onClick={() => this.setState({ isOpen: false })}
          >
            <div
              className={classes.__modal_body}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => this.setState({ isOpen: false })}
                className="waves-effect waves-light btn-small right"
              >
                <i className="material-icons">close</i>
              </button>
              <p>
                Bonjour, je m'appelle <strong>{this.props.name}</strong>
              </p>
              <LazyLoadImage
                src={this.props.img}
                alt={`La belle gueule de ${this.props.name}`}
                height={260} //? Optimization
                width="100%"
                placeholderSrc={PlaceholderImage}
              />
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}
