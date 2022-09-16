import React from 'react'
import './Card.scss'


const Card = ({ name, tagline, percentage, image }) => {

  return (
    <div className='beer'>
      <img className='beer__image' src={image} alt={name}></img>
      <h1 className='beer__name'>{name}</h1>
      <div className='beer__info'>
      <p> • {tagline} • </p>
      <p> • {percentage}% • </p>
      </div>
    </div>
  )
}

export default Card
