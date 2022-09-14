import React from 'react'
import './NavBar.scss'
import SearchBox from './SearchBox/SearchBox'
import FlitersList from './FiltersList/FlitersList'
import { useState } from 'react'

const NavBar = ({beersArr}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const lowerInput = event.target.value.toLowerCase();
    setSearchTerm(lowerInput);
  };

  const beerResult = beersArr.filter((beer) => {
    const beerNameLower = beer.name.toLowerCase();

    return beerNameLower.includes(searchTerm) && beer.image_url;
  });
  return (
    <div className='navBar'>
      <SearchBox label={"Beers "}
        searchTerm={searchTerm}
        handleInput={handleInput} />
      <FlitersList />
    </div>
  )
}

export default NavBar