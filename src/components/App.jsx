
import { useEffect } from "react";
import { AppRoutes } from "../routes/Routes";
import './App.css';
import { Header } from "./elements/Header/Header";
import { fetchAllCards} from "redux/cards/operetions";
import { useDispatch } from "react-redux";



export const App = () => {
  const dispatch = useDispatch() 

  // GET CARDS LIST
  useEffect(() => {
    setTimeout(() => {
    dispatch(fetchAllCards());
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

    <div className="App__container">
          <Header/>

          <AppRoutes />
    </div>

  );
};
