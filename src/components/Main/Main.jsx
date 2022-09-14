import React from 'react'
import './Main.scss'
import CardList from './CardList/CardList'
import beers from '../../data/beers'


const Main = () => {
    return (
      <div >
      <CardList  beersArr={beers} />
     </div>
  )
}
export default Main