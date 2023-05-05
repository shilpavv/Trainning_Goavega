import React, { useContext } from 'react'
import { MovieContext } from './MovieContext';
function Nav(){
   const[movies,setmovies]=useContext(MovieContext);
    return(
        <div className='nav-title'>
                <h1>Shilpa</h1>
                <h1 className='no-movie'>No of movies : {movies.length}</h1>
        </div>
        
    )
        }
export default Nav;
