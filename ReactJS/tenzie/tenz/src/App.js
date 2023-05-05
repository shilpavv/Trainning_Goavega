import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
 import Confetti from "react-confetti"

/**
 * Challenge:
 * 
 * - Create a Die component that takes a `value` prop
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components 
 *   to look like they do in the slide
 */
/**
 * Challenge:
 * 
 * Write a function (allNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
 */

export default function App() {
  const [dice, setDice] = React.useState(allNewDice())
  //to know to win the game
  const [tenzies, setTenzies] = React.useState(false)
  React.useEffect(()=>{
    //every die has true  as in isheld property  then dice.every will return true even one of the die is not held then it will return false
      const allHeld = dice.every(die => die.isHeld)
      const firstValue = dice[0].value
      const allSameValue = dice.every(die=>die.value===firstValue)
      if (allHeld && allSameValue) {
        setTenzies(true)
          console.log("You won!")
      }
  }, [dice])

//adding random numbers
  function allNewDice(){
    const newdice=[]
    for(let i=0;i<10;i++){
       newdice.push({
       value: Math.ceil(Math.random()*6),
        isHeld:false,
        id:nanoid()
      })

  }
  console.log(newdice)
  return newdice
}
//roll dice expect selected number
function generate(){
  return{
    value: Math.ceil(Math.random()*6),
    isHeld:false,
    id:nanoid()
  }
 
}
function Rolldice(){
  if(!tenzies){
    setDice(olddice=>olddice.map(die=>{
      return die.isHeld ? die : generate()
    }))
  }else{
    setTenzies(false)
    setTenzies(allNewDice)
  }
 
}
//toggle the number
function Holddice(id){  
   setDice(olddice=>olddice.map(die=>{
    return die.id===id ? {...die,isHeld:!die.isHeld}:die
   }))
}
// Map over the state numbers array to generate our array
//  * of Die elements and render those in place of our
//  * manually-written 10 Die elements.
//  */
   const dieelement=dice.map(die=>
   <Die  value={die.value}  isHeld={die.isHeld} Holddice={()=>Holddice(die.id)}/>
   )
    return (
        <main>
          {tenzies &&  <Confetti/>}
          <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="die-container">
              {dieelement}
          </div>
          <button className="roll-button"  onClick={Rolldice}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}