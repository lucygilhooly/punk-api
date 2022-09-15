import React from 'react'
import './Main.scss'
import CardList from './CardList/CardList'
import { useState } from 'react'
import { useEffect } from 'react'


const Main = ({searchTerm}) => {
  const [beers, setBeers] = useState([]);

  const getBeers = async() => {
    const url = `https://api.punkapi.com/v2/beers`;
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data)
    console.log(data)
  }

  useEffect(() => {
   getBeers()
  },[])

  const filterBeers = (beersArr, searchTerm) => {
    return beersArr.filter((beers) => beers.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
 
    return (
      <>
        <div className='main__beers'>
          <CardList beers={filterBeers(beers, searchTerm)}/>
        </div>
     </>
  )

    }
export default Main