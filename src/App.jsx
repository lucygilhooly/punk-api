import React from 'react';
import './App.scss';
import { useState } from "react";
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';

function App() {
const [searchTerm, setSearchTerm] = useState(" ")

const getSearchBoxValue = (event) => {
  const lowerSearchTerm = event.target.value.toLowerCase()
  setSearchTerm(lowerSearchTerm)
}
  return (
    <>
    <div className='header'>
      <Header />
    </div>
    <div className="app">
      <NavBar getSearchBoxValue={getSearchBoxValue}/>
      <Main searchTerm={searchTerm}/>
    </div>
    </>
  );
}

export default App;
