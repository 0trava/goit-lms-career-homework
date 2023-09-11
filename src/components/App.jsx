
import { AppRoutes } from "../routes/Routes";
import './App.css';
import { Header } from "./elements/Header/Header";



export const App = () => {

  return (

    <div className="App__container">
          <Header/>

          <AppRoutes />
    </div>

  );
};
