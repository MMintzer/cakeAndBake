import React, {Component} from 'react'
import axios from 'axios'
import BuyCakeCoinForm from './buyCakeCoinForm'

export default class BuyCakeCoin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coins: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    try {
      const res = await axios.put('/api/users/addCoins', this.state)
      this.setState({
        coins: 0
      })
    } catch (error) {
      console.log(
        'Something went wrong in the buyCakeCoin component handlesubmit',
        error
      )
    }
  }

  render() {
    return (
      <div>
        <BuyCakeCoinForm
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          history={this.props.history}
        />
      </div>
    )
  }
}
