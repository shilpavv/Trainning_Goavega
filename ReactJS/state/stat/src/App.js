import React from "react"

//  export default function App() {
//     const [isImportant, setIsImportant] = React.useState("Yes")
    /**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
     */
//     // function handleClick() {
//     //   setIsImportant("No")

//     // }
    
//     return (
//         <div className="state">
//             <h1 className="state--title" >IS stateImportant to know</h1>
//             <div className="state--value" >
//                 <h1>{isImportant}</h1>
//             </div>
//         </div>
//     )
// }




// export default function App() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */


//second
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     *  * when the + button is clicked. (Can just console.log("add") for now)
     */
     /**
     * Challenge: 
     * See if you can think of a way to add 1 to the count
     * every time the + button is clicked
     */
      /**
     * Challenge: 
     * See if you can think of a way to minus 1 to the count
     * every time the - button is clicked
     */
    //   import Count from "./Count"
    // export default function App() { 
    // const [count,setCount]=React.useState(0)
    //   function add(){
    //        setCount(count+1)
    //   }
    //   function sub(){
    //       setCount(count-1)
    //   }
       /**
     * Challenge:
     * - Create a new component named Count
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the whole div.counter--count
     *      and display the incoming prop `number`
     * - Replace the div.counter--count below with an instance of
     *   the new Count component
     */
//        console.log("App compoent is rendered")
//     return (
     
//         <div className="counter">
//             <button className="counter--minus" onClick={sub}>–</button>
//             {/* <div className="counter--count">
//                 <h1>{count}</h1>
//             </div> */}
//             <Count number={count}
            
//             />
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     )
// }


//CALLBACK FUNCTION
//     export default function App() { 
//     const [count,setCount]=React.useState(0)
//         /**
//      * Note: if you ever need the old value of state
//      * to help you determine the new value of state,
//      * you should pass a callback function to your
//      * state setter function instead of using
//      * state directly. This callback function will
//      * receive the old value of state as its parameter,
//      * which you can then use to determine your new
//      * value of state.
//      */
//       function add(){
//            setCount(function(prevcount) {
//             return prevcount + 1
//               //setCount(prevcount=>prevcount+1)
//            })
//       }
//        // Challenge: update `substract` to use a callback function
//       function sub(){
//           setCount(function(prevcount){
//             return prevcount -1
//             //setCount(prevcount=>prevcount+1)
//           })
//       }
//     return (
//         <div className="counter">
//             <button className="counter--minus" onClick={sub}>–</button>
//             <div className="counter--count">
//                 <h1>{count}</h1>
//             </div>
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     )
// }

//TERNARY OPERATOR
// export default function App() {
//     /**
//      * Challenge: Replace the if/else below with a ternary
//      * to determine the text that should display on the page
//      */
//      const isGoingOut = false
    
//     // let answer  // Use ternary here
//     // if(isGoingOut === true) {
//     //     answer = "Yes"
//     // } else {
//     //     answer = "No"
//     // }
//     // Use ternary here
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div className="state--value">
//                 <h1>{isGoingOut ? "yes": "no" }</h1>
//             </div>
//         </div>
//     )
// }




// export default function App() {
//     /**
//      * Challenge: 
//      * - Initialize state for `isGoingOut` as a boolean
//      * - Make it so clicking the div.state--value flips that
//      *   boolean value (true -> false, false -> true)
//      * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
//      */
//     const [isGoingOut,setisgoing]=React.useState(true);
//     function answer(){
//         setisgoing(prevstate=>prevstate ? false:true)
//          }

//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div onClick={answer} className="state--value">
//                 <h1>{isGoingOut ? "yes":"no"}</h1>
//             </div>
//         </div>
//     )
// }


//complex state:object state
import Star from "./Star"
export default function App() {
    //parent component
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    // let starIcon = contact.isFavorite ? "star1.png" : "star2.png"
    
    function toggleFavorite() {
        setContact(prev=>{

            return{
                ...prev,
                isFavorite:!prev.isFavorite
            }
        })
    }
    return (
        <main>
            <article className="card">
                <img src="./profile.png" className="card--image"  width="50px"/>
                <div className="card--info">
                    {/* <img 
                        src={`../${starIcon}`} width="50px"
                        className="card--favorite"
                        onClick={toggleFavorite}
                    /> */}
                    {/*  setting state from child component */}
                    {/* its custom component all property is custom property simply onclick doest register  onclick exist on native DOM elememt */}
                    <Star isFilled={contact.isFavorite}  handleClick={toggleFavorite}/>
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
