import React from 'react';
import './App.css';
import { Navbar } from './component/Navbar';
import {AuthContext} from './context/AuthContext'

function App() {
  let {details,isAuth} = React.useContext(AuthContext);

  if(isAuth){
    console.log(details)
  }
  return (
    <div className="App">
     <Navbar></Navbar>
    </div>
  );
}

export default App;
