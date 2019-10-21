import React from 'react';
import Contact from './components/Contact/Contact';
import ContactList from './components/ContactList/ContactList';
import './App.css';


function App() {
  return (
    <div className="App">
      {


        ContactList.map(item => (
          <Contact name={item.name} img={item.img} status={item.status} />
        ))
      }
    </div>
  );}


  export default App 
