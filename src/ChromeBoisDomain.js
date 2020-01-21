import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {

    const x = event.clientX
    const y = event.clientY

    drawChromeBoiAtCoords(x, y)
  }
  
  handleMouseClick = () => {
    toggleCycling()
  }

  handleKeyPress = (e) => {
    if (e.key === 'a') {
      resize('+')
    }

    if (e.key === 's') {
      resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleMouseClick}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
