import React from 'react'
import {test} from './api'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  componentDidMount () {
    test(5).then(res => this.setState({name: res.data}))
  }
  render () {
    return (
      <div>
        {
          this.state.name === 'Not Find'
          ? '我是无名氏'
          : `My name is ${this.state.name}`
        }
      </div>
    )
  }
}