import React from 'react'
import './NavBar.scss'
import SearchBox from './SearchBox/SearchBox'
import FlitersList from './FiltersList/FlitersList'

const NavBar = () => {
  return (
    <div>
      <SearchBox />
      <FlitersList />
    </div>
  )
}

export default NavBar