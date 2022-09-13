import React from 'react'
import './Main.scss'
import CardList from './CardList/CardList'
import beer from '../../data/beers'

const Main = () => {
    return (
      <div >
      <CardList  beersArr={beer} />
     </div>
  )
}
export default Main