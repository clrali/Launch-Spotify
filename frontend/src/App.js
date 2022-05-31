import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import { Outlet, useLocation } from "react-router-dom";

import {Helmet} from "react-helmet";

import Login from './components/loginPage/Login.js'


function App() {
  return (
    <div className="background--custom">
    <div className="App">
      
      <Navbar />
      <Outlet />

      {useLocation().pathname === "/"}
      

      {useLocation().pathname === "/" && <Login/>} 

    </div>
    </div>


  );
}

export default App;
