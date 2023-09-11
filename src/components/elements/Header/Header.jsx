import React from 'react'
import { Link, useLocation } from "react-router-dom";
import './Header.css'

export const Header = () => {
    const location = useLocation();

    const checkActivePage = (link) => {
        let page = location.pathname;
        if (page === "/react-homework-template") {
            page = "/home"
        }
        if (page === link) {
            return 'Header_link-active';
        } else {
            return 'Header_link';
        }
    }


  return (
    <div className="Header__container">
    <Link  className='Header_logo' to={"/home"}>
      <img src="https://cdn.rcstatic.com/images/site_graphics/newsite/mobile/logos/rc-logo-small--white.svg" width={"40px"} alt="logo"/>
    </Link>
    
    <div className='Header__header'>
        <Link className={checkActivePage("/home")} to={"/home"}>Home</Link>
        <Link className={checkActivePage("/catalog")} to={"/catalog"}>Catalog</Link>
        <Link  className={checkActivePage("/favorites")} to={"/favorites"}>Favorites</Link> 
    </div>
    </div>
  )
}
