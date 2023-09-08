import { Link } from "react-router-dom";
import { AppRoutes } from "../routes/Routes";
import './App.css';



export const App = () => {

  return (

    <div className="App__container">
        <div className="App__header-container">
          <Link  className='App_logo' to={"/home"}>
            <img src="https://cdn.rcstatic.com/images/site_graphics/newsite/mobile/logos/rc-logo-small--white.svg" width={"40px"}/>
          </Link>
          
          <div className='App__header'>
              <Link className='App_link' to={"/home"}>Home</Link>
              <Link className='App_link' to={"/catalog"}>Catalog</Link>
              <Link className='App_link' to={"/favorites"}>Favorites</Link> 
          </div>
        </div>

          <AppRoutes />
    </div>

  );
};
