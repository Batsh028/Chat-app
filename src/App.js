import React from 'react';
import Contact from './components/Contact/Contact';
import './App.css';


function App() {
  return (
    <div className="App">

      <Contact  img="https://randomuser.me/api/portraits/men/78.jpg"
                name="Dona Moore"
                status= {(true)} />
      <Contact  img="https://randomuser.me/api/portraits/men/60.jpg"
                name="Harry Campi"
                status={(true)} />
      <Contact  img="https://randomuser.me/api/portraits/men/57.jpg"
                name="Luiis Hernas"
                status={(false)} />
                
    </div>
  );
}

export default App;
