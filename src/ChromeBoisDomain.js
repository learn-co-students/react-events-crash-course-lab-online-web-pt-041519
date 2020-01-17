import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  // Capture x and y coordinates and invoke drawChromeBoiAtCoords
  handleMouseMove = (event) => {
    // Capture coordinates
    const xCoord = event.clientX
    const yCoord = event.clientY

    // Send coordinates to drawChromeBoiAtCoords
    drawChromeBoiAtCoords(xCoord, yCoord)
  }

  // Invoke toggleCycling on click
  handleClick = (event) => {
    // event.preventDefault();
    toggleCycling()
  }

  // Invoke resize with + or - arguments
  handleKeyPress = (event) => {
    // If the key pressed was 'a', then call `resize` with '+'. If the key pressed was 's', then call `resize` with '-' 
    if (event.key === 'a'){
      resize('+')
    } else if (event.key ==='s'){
      resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onKeyPress={this.handleKeyPress}
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
