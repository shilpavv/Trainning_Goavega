import './App.css';
import Greet from './destruct';
import Welcome from './class';

function App() {
  return (
    <div className="App">
      <Greet name="shilpa " heroname="super lady">
      </Greet>
      <Welcome name="sai " heroname="spiderman"></Welcome>
    </div>

  );
}
export default App;
