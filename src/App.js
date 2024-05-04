import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import FavoritesListPage from "./Pages/FavoritesListPage";
import OrdersListPage from "./Pages/OrdersListPage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Contact from "./Pages/Contact";
import Register from "./components/registration/Register";
import Login from "./components/registration/Login";
import Search  from "./components/Search";







function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/menu" exact Component={Menu}/>
          <Route path="/about" exact Component={About}/>
          <Route path="/contact" exact Component={Contact}/>
          <Route path="/orders" exact Component={OrdersListPage}/>
          <Route path="/favorites" exact Component={FavoritesListPage}/>
          <Route path="/login" exact Component={Login }/>
          <Route path="/search" exact Component={Search }/>
          <Route path="/signUp" exact Component={Register} /> 
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
