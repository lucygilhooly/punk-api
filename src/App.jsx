import React from 'react';
import './App.scss';
import { useState } from "react";
import Main from './components/Main/Main';
import beer from '../src/data/beers.js'
import NavBar from './components/NavBar/NavBar';

function App() {
  // const [beers, setBeers] = useState([]);

  // const getBeers = async() => {
  //   const url = `https://punkapi.com/`;
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setBeers(data.results)
  // }

  return (
    <div className="app">
      <h1>Punk API</h1>
      <Main beersArr={beer}/>
      <NavBar />
    </div>
  );
}

export default App;
