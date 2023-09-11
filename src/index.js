import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import { Provider } from 'react-redux';
import { store } from "./redux/store";
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter >
          <App />
        </BrowserRouter >
        </Provider>
  </React.StrictMode>
);

//  store={store}
// persistor={persistor}  loading={null}
//   basename="/goit-lms-career-homework"
