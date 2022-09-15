import React from 'react'
import './SearchBox.scss'

const SearchBox = ({getSearchBoxValue}) => {

  return (
      <input
        type="text"
        onChange={getSearchBoxValue}
        placeholder="Search for beer here!"
        className="search-box__input"
      />
  )
}

export default SearchBox