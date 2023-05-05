
import React, {useContext}from "react";
import { MovieContext } from "./MovieContext";

function AddMovie(){
    const[movies,setmovies]=useContext(MovieContext);
    const[name,setname]=React.useState('');
    const[price,setprice]=React.useState('');
   

    const updatename=(e)=>{
        setname(e.target.value);
    };
    const updateprice=(e)=>{
        setprice(e.target.value);
       
    };
    const AddMovie=(e)=>{
        e.preventDefault();
        setmovies((prevmovie)=>[...prevmovie,{name:name,price:price}])
      
    };
    return(
        <form onSubmit={AddMovie}>
                <input type="text" name="name" value={name} onChange={updatename}/>
                <input type="text" name="price" value={price} onChange={updateprice}/>
                <button>Submit</button>
        </form>
        

    );

}
export default AddMovie;