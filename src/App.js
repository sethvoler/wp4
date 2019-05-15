import React from 'react'
import {test} from './api'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  changeName () {
    test(3).then(res => this.setState({name: res.data}))
  }
  componentDidMount () {
    this.changeName()
  }
  render () {
    return (
      <div style={{
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '32px',
        color: 'red'
      }}>
        {
          this.state.name === 'Not Find'
          ? <p>我是无名氏</p>
          : <p>My name is {this.state.name}</p>
        }
        <div style={{
          position: 'absolute',
          top: '200px',
          left: 0,
          width: '100%',
          fontSize: '18px',
        }}>
          <p style={{
            fontSize: '16px',
            color: '#ccc'
          }}>Tips: 点击按钮提问</p>
          <button style={{
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '10px',
            paddingBottom: '10px',
            fontSize: '18px',
            backgroundColor: '#5678ff',
            borderRadius: '6px',
            outline: 'none',
            border: 0,
            cursor: 'pointer'
          }}
          onClick={() => this.changeName()}>What's your name?</button>
        </div>
      </div>
    )
  }
}