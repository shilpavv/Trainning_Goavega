//in class component we have to  include two import (react and component class from react)
import React,{Component} from "react";
//class component
class Welcome extends Component{
    render(){
        return (
            <h1>welcome{this.props.name}{this.props.heroname}</h1>
        )
    }
}
export default Welcome