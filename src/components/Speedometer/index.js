import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }

  onClickAccelerator = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({
        speed: prevState.speed + 10,
      }))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image"
          />
          <h1 className="description">Speed is {speed}mph</h1>
          <p className="under-text">Min Limit is 0mph, Max limit is 200mph</p>
          <div className="buttons-container">
            <button
              className="acc-button"
              onClick={this.onClickAccelerator}
              type="submit"
            >
              Accelerate
            </button>
            <button
              className="brake-button"
              type="submit"
              onClick={this.onClickBrake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
