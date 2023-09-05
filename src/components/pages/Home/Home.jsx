import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const Home = () => {
    // eslint-disable-next-line
    const navigate = useNavigate();


  return (
    <div>
        <Link className='Home_link' to={"/catalog"}>Catalog</Link>
        <Link className='Home_link' to={"/favorites"}>Favorites</Link>
        <div>Home</div>
      
        </div>
  )
}
