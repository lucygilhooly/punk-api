import React, { useEffect } from 'react';
import './App.scss';
import { useState, useEffect } from "react";
import Main from './components/Main/Main';
// import beers from '../src/data/beers.js'
import NavBar from './components/NavBar/NavBar';

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    console.log('useEffect')
   getBeers()
  },[])

  const getBeers = async() => {
    const url = `https://api.punkapi.com/v2/beers`;
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data.results)
    console.log(data)
  }


  return (
    <div className="app">
      <h1>Punk API</h1>
      {/* <NavBar /> */}
      <Main beersArr={beers}/>
      
    </div>
  );
}

export default App;
