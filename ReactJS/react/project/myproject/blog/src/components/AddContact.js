import React from 'react';
import './App.css'
//class component
class AddContact extends React.Component{
   render(){
    return(
        <div >
            <h2>Add contact</h2>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" placeholder='name'/>
                </div>
                
                <div className='ui input ' >
                    <label>Email</label>
                    <input type="text" name="email" placeholder='email'/>
                    <button >ADD</button>
                </div>
            </form>
        </div>
    );
   }
 }


export default AddContact;