import React, { useContext } from 'react';
import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/ThemeContext';
// import Reducer from './components/Reducer';


function App() {
  const { isLight }  = useContext(ThemeContext);  

  return (
    <div className={`App ${isLight ? "light" : "dark"} `}>
     {/* <Reducer/>   */}
       <Navbar/> 
       <Body/>   
    </div>
  );
}

export default App;
