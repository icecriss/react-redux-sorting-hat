import React, { Component } from 'react'


export default class Message extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <b>{this.props.message}</b>
      </div>
    )
  }
}