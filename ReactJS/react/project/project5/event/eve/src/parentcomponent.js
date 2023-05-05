import React, { Component } from 'react'
import Childcomponent from './childcomponent'

 class parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname:'Parent'
      }
      this.Parent=this.Parent.bind(this)
    }
Parent(){
    //we can also written as("hello" + this.state.parentname)
    // since we use ES6  so use template literal {features in ES6}
    alert(`hello ${this.state.parentname}`)
}  
  render() {
    return (
      <div>
        <Childcomponent greetHandler={this.Parent}/>
      </div>
    )
  }
}

export default parentcomponent
