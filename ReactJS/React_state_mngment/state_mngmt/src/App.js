
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import './index.css'
import {MovieProvider} from './MovieContext';
import AddMovie from './Addmovie';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie/>
        <MovieList />

      </div>
    </MovieProvider>

  );
}

export default App;
