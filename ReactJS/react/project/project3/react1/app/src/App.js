import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import './App.css';
import Message from './components/message';
import Counter from './components/counter';
import Para from './components/counter';

function App() {
  return (
    <div className='App'>
      {/* Self closing tag */}
      <div className='Name'>
        {/* <Counter/> */}
        <Para/>
      {/* <Greet name="shilpa " heroname="super lady">
        <p>this is super lady.this is children props</p>
      </Greet> */}
      </div>
      {/* <Greet name="chikku" heroname="iron lady">
        <button>Details</button>
      </Greet>
      <Greet name="sai" heroname="superman"/>
      <Welcome  name="Arya " heroname="super lady"></Welcome>
      <Welcome  name="Deepika " heroname="super lady"></Welcome>
      <Message/>
      <Hello/> */}
    </div>
  );
}

export default App;
