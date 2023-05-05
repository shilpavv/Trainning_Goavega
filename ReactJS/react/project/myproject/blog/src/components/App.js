import React from 'react';
import Header from './Header';
import './App.css';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contacts=[
    {
        id:"1",
        "name":"shilpa",
        "email":"chikkuzshilpa@gmail.com"
    },
    {
      id:"2",
      "name":"chikku",
      "email":"chikkuzshilpa@gmail.com"
  }
  ];
  return (
    <div>
      <Header />
     <AddContact/>
     {/* /* props pass dat from parent child */ }
     <ContactList contacts={contacts}/>
    </div>
  
  );
}
export default App;
