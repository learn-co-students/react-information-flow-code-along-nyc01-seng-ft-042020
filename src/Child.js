import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  clickHandler = () => {
    return this.props.changeColor(getRandomColor())

  }

  render() {


    return (
      <div onClick={this.clickHandler}
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child