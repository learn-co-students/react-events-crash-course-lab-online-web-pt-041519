import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (e) => {
    const [x, y] = [e.clientX, e.clientY]
    drawChromeBoiAtCoords(x, y)
  }
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  handleOnClick = (e) => {
    toggleCycling()
  }
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
   
  handleKeyPress = (e) => {
    if (e.key === 'a') {
      // console.log('bigger')
      resize('+')
    } else if (e.key === 's') {
      // console.log('smaller')
      resize('-')
    }
  }
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleOnClick}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
