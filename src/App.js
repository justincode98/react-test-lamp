import React, { useState } from 'react';
import About from "./components/About";
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [pageState, setPageState] = useState("About Me")
  /*console.log(pageState)
  setPageState("apples")
  console.log(pageState)*/
  
  
  function determinePage() {
    if(pageState == "About Me") {
      return <About/>;
    }
    if(pageState == "Portfolio") {
      return <Portfolio/>;
    }
    if(pageState == "Contact") {
      return <Contact/>;
    }
    if(pageState == "Resume") {
      return <Resume/>;
    }
    
  }
  
  return (
    <div>
      <header><Header state={pageState} setState={setPageState}></Header></header>
      
      <main>
        {determinePage()}
      </main>
      <footer><Footer></Footer></footer>
    </div>
    
  );
  
}

export default App;
