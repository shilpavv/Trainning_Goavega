import React, { Component } from 'react'

 class eventbind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"helooo"
      }
    // 3)  binding event handler in the comstructor  and appausebinding in the render method
      this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     //to change state we want to use set state method
    //     this.setState(
    //         {
    //             message:'goodbye'
              
    //         }
          
    //     )
    //     console.log(this);
    // }

    //4)arrow function as a class property
    clickHandler=()=>{
        this.setState(
            {
                message:'goodbye'
              
            }
          
        )

    }

  render() {
    return (
      <div>
          <h4>Binding event Handler</h4>
        <div>{this.state.message}</div>
        {/*1) using bind keyword */}
        <button onClick={this.clickHandler.bind(this)}>CLICK</button> 
       
         {/*2) arrow function */}
        {/* we are calling and returning the value that is why ()is needed */}
        <button onClick={()=>this.clickHandler()}>SUBMIT</button>
        
        {/* 3) */}
        <button onClick={this.clickHandler}>Ok</button>


      </div>
    )
  }
}

export default eventbind
