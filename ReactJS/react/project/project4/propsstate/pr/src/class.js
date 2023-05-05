//in class component we have to  include two import (react and component class from react)
import React,{Component} from "react";
//class component
class Welcome extends Component{
    render(){
        const {name,heroname}=this.props
        return(
            <h1>welcome{name}{heroname}</h1>

        ) 
    }
}
export default Welcome