import React from 'react'
import './NavBar.scss'
import SearchBox from './SearchBox/SearchBox'
import FlitersList from './FiltersList/FlitersList'

const NavBar = ({getSearchBoxValue}) => {
  
  return (
    <div className='navBar'>
      <h3>Search Your Favourite Beers:</h3>
      <SearchBox getSearchBoxValue={getSearchBoxValue} />
      {/* <FlitersList /> */}
    </div>
  )
}

export default NavBar