import React from "react";
import Joke from "./Joke";
import jokedata from "./jokedata";

export default function App(){
    const jokeelement=jokedata.map(function(joke){
        return <Joke
        setup={joke.setup}
        punchline={joke.punchline}
        />
    })
    // const element=<h1>hello</h1>
    // console.log(element)
//    const color=[
//    <h3>red</h3>,
//    <h3>Orange</h3>,
//    <h3>yellow</h3>
// ]
// console.log(jokedata)

    return(
        <div>
            {/* {["red","blue","black"]} */}
           
            {/* {color} */}
            {/* <h3>red</h3>
            <h3>Orange</h3>
            <h3>yellow</h3> */}
            {jokeelement}
        </div>
    )
}