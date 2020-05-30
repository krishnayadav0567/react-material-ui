import React from 'react';
import './App.css';

import NavBar from './components/NavBar'

import Today from './components/cards/Today'
import Week from './components/cards/Week'
import Month from './components/cards/Month'
import Annual from './components/cards/Annual'


function App() {
  return (
   <div>
         <div>
            <NavBar/>
         </div>

         <div>
            <Today/>
         </div>


         <div>
            <Week/>
         </div>
         
         <div>
            <Month/>
         </div>

         <div>
            <Annual/>
         </div>
   </div>
  );
}

export default App;
