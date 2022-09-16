import React from 'react'
import './Header.scss'
import logo from '../../assets/images/images-1.jpg'

function Header() {
  return (
    <section className='header'>
    <h1 className='header__title'>Punk API</h1>
    <img className='header__logo' src={logo} alt="BrewDog Logo" />
    </section>
  )
}

export default Header