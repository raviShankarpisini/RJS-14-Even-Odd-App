// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    console.log(randomNumber)
    this.setState(prevState => ({
      count: prevState.count + randomNumber,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          {count % 2 === 0 ? (
            <p className="count-heading">Count is Even</p>
          ) : (
            <p className="count-heading">Count is Odd</p>
          )}
          <button
            className="button"
            type="button"
            onClick={this.onClickIncrement}
          >
            Increment
          </button>
          <p className="description">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
