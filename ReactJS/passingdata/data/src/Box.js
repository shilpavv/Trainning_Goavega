 import React from "react"

// export default function Box(props) {
//     const styles = {
//         backgroundColor: props.on ? "#222222" : "none"
//     }
    
//     return (
//         <div style={styles} className="box"></div>
//     )
// }


// export default function Box(props) {
//     /**
//      * Challenge: Create state controlling whether
//      * this box is "on" or "off". Use the incoming
//      * `props.on` to determine the initial state.
//      * 
//      * Create an event listener so when the box is clicked,
//      * it toggles from "on" to "off".
//      * 
//      * Goal: clicking each box should toggle it on and off.
//      */
//     const [on, setOn] = React.useState(props.on)
//     const styles = {
//         backgroundColor: on ? "#222222" : "transparent"
//     }
//     function toggle(){
//         setOn(prevOn=>!prevOn)
//     }
    
//     return (
//         <div style={styles} className="box" onClick={toggle}></div>
//     )
// }

export default function Box(props) {
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div 
            style={styles} 
            className="box"
            onClick={()=>props.handleClick(props.id)}
        >
        </div>
    )
}