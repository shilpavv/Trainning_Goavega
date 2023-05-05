import React,{Component} from "react";
//class component
class Message extends Component{
    //state component
    constructor(){
        //super method it required bcz we extend react component class and call as made a base class constructor
        super()
        this.state={
            message:"welcome visitors"

        }
    }
    changeMessage()
        {
            this.setState({
                message:'thankyou for subscribing'
            })
        }
    
    render(){
        return(
           <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
           </div>
        )
    }
}
export default Message