import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Game from './components/game/gam';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/game",
    element: <Game/>,
  },
  {
    path: "/home",
    element: <App/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={ <App /> }
                />
                <Route
                    path="/game"
                    element={ <Game /> }
                />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
