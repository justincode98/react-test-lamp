import React, { useState } from 'react';
import About from "./components/About";
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  const [pageState, setPageState] = useState("About")
  /*console.log(pageState)
  setPageState("apples")
  console.log(pageState)*/
  console.log(pageState)
  return (
    <div>
      <header><Header state={pageState} setState={setPageState}></Header></header>
      
      <main>
        <About></About>
      </main>
      <footer><Footer></Footer></footer>
    </div>
    
  );
  
}

export default App;
