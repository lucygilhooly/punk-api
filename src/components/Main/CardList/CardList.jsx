import React from 'react'
import './CardList.scss'
import Card from './Card/Card'

const CardList = ({beersArr}) => {
  const beersJSX = beersArr.map((beer, index) => {
    return (
      <div key={index}>
      <Card  name={beer.name} tagline={beer.tagline} percentage={beer.abv} image={beer.image_url} />
    </div>
  )
})
return (
  <section className='beersGrid'>
    {beersJSX}
  </section>
)
}

export default CardList