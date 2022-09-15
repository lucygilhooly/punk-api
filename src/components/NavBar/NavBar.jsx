import React from 'react'
import './NavBar.scss'
import SearchBox from './SearchBox/SearchBox'
import FlitersList from './FiltersList/FlitersList'

const NavBar = ({getSearchBoxValue}) => {
  
  return (
    <div className='navBar'>
      <h3>Search for your favourite Beers here:</h3>
      <SearchBox getSearchBoxValue={getSearchBoxValue} />
      {/* <FlitersList /> */}
    </div>
  )
}

export default NavBar