import React from 'react'
import './Home.css'
import img from '../../images/hero_img@2x.png'

export const Home = () => {



  return (
    <div className='Home__container'>
        <h1 className='Home__title'>
            Car Rental Company
        </h1>
        <div className='Home__img'>
            <img src={img} alt="hero img" />
        </div>

    </div>
  )
}
