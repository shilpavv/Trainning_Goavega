// import React from "react"
// import Header from "./Header"
// import Body from "./Body"


// export default function App() {
//   const [user, setUser] = React.useState("Joe")
//   return (
//     <main>
//       <Header user={user}/>
//       <Body user={user}/>
//     </main>
//   );
// }

// import React from "react"
// import Boxes from "./Boxes"
// import './index.css';

//     /**
//      * Challenge part 1:
//      * 1. Initialize state with the default value of the
//      *    array pulled in from boxes.js
//      * 2. Map over that state array and display each one
//      *    as an empty square (black border, transparent bg color)
//      *    (Don't worry about using the "on" property yet)
//      * 
//      */
    
// export default function App(props) {
//   const [squares, setSquares] = React.useState(Boxes)
  
//   // Challenge: use a ternary to determine the backgroundColor.
//   // If darkMode is true, set it to "#222222"
//   // If darkMode is false, set it to #cccccc
  
//   const styles = {
//       backgroundColor: props.darkMode ? "#222222" : "#cccccc"
//   }
  
//   const squareElements = squares.map(square => (
//       <div style={styles} className="box" key={square.id}></div>
//   ))
//   return (
//       <main>
//           {squareElements}
//       </main>
//   )
// }




import React from "react"
import Boxes from "./Boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(Boxes)
          /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */
          function toggle(id) {
            // console.log(id)
               /**
         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 
         * Hint: look back at the lesson on updating arrays
         * in state if you need a reminder on how to do this
         */
        setSquares(prevsquare=>{
            // const newsquare=[]
            // for(let i=0;i<prevsquare.length;i++){
            //     const currentsquare=prevsquare[i]
            //     if(currentsquare.id === id) {
            //         const updatedSquare = {
            //             ...currentsquare,
            //             on: !currentsquare.on
            //         }
            //         newsquare.push(updatedSquare)
            //     } else {
            //         newsquare.push(currentsquare)
            //     }
            // }
            // return newsquare
                   return prevsquare.map((square) => {
                    return square.id === id ? {...square, on: !square.on} : square
                })
            })
    }
        
        const squareElements = squares.map(square => (
             // <div className="box" key={square.id}></div>
            <Box 
                key={square.id} 
                on={square.on} 
                handleClick={()=>toggle(square.id)}
            />
        ))
        
        return (
            <main>
                {squareElements}
            </main>
        )
    }
    
  
    /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */

 

