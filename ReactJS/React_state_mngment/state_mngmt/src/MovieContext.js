import React,{createContext} from 'react'

  export const MovieContext =createContext();
  export const  MovieProvider=(props) =>{
    const[movies,setmovies]=React.useState([
        {
            name:"Harry potter",
            price:"$20",
            id:123456
        },
        {
            name:"Life of pie",
            price:"$80",
            id:5678
        },
        {
            name:"Charlie",
            price:"$50",
            id:45678
        }

    ]);
  return (
   <MovieContext.Provider value={[movies,setmovies]}>
            {props.children}
   </MovieContext.Provider>
  )
}


