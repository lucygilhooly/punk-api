import React from 'react'
import './Card.scss'


const Card = ({ name, tagline, percentage, image }) => {

  
  return (
    <div className='beer'>
      <img className='beer__image' src={image} alt={name}></img>
      <h1 className='beer__name'>{name}</h1>
      <p>{tagline} • {percentage}</p>
    </div>
  )
}

export default Card



// 'name'
// 'tagline'
// 'description'
// 'image_url'
// 'abv'