import React, { Component } from 'react'
 class classclick extends Component {
    clickHandler(){
        console.log('button click')
    }
  render() {
    return (
      <div>
        <h4>Event handler using class Component</h4>
        <button onClick={this.clickHandler}>CLICK ME</button>
      </div>
    )
  }
}

export default classclick
