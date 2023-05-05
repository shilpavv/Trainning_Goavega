import React from 'react';
import Joke from './joke';


function App() {
  return (
    <div>
      <Joke
      setup=" i am going buy a new car"
      punchline="i want to see  all happy faces"
      // isPun={true}
      // ypvote={10}
      // dvote={9}
      // comments={[{author:"",body:""}]}
      />
       <Joke
      punchline="its hard to explain puns to sdfytrfgh because thet always take things literally"
      // isPun={false}
      />
       <Joke
      setup=" i am going buy a new car and drive long"
      punchline="all are happy to see that i am going drive long anf tensed."
      // isPun={true}
      />
       <Joke
      setup="i buy a chocalate to my cousin child"
      punchline=" i am waiting for his reacion while seeing"
      // isPun={true}
      />
    </div>
  )
}
export default App
