import React from 'react';
import About from "./components/About";
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header><Header></Header></header>
      <main>
        <About></About>
      </main>
      <footer><Footer></Footer></footer>
    </div>
  );
}

export default App;
