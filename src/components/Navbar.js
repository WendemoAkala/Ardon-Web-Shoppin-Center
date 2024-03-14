import React, {useState } from 'react';
// import classes from "../Styles/Navbar.css";
// import Logo from '../assets/logo-sign2.svg';
import {Link} from "react-router-dom";
import ReorderIcon from '@material-ui/icons/Reorder';
import "../Styles/Navbar.css";

function Navbar(){
        const [openLinks, setOpenLinks] = useState(false);
        const toggleNavbar = () =>{
            setOpenLinks(!openLinks);
        }
    return(
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
            <Link to="/search">Search</Link>
                <div className="hiddenLinks">
                  <Link to="/">Home</Link>
                  <Link to="/menu">Menu</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Conact</Link> 
                  <Link to="/favorite">FavoriteListPage</Link> 
                  <Link to="/login">Login</Link>
                  <Link to="/signUp">Sign-Up</Link>
                </div>
            </div>
            
           <div className="rightSide">
             <Link to="/">Home</Link>
             <Link to="/menu">Menu</Link>
             <Link to="/about">About</Link>
             <Link to="/contact">Conact</Link>  
             <Link to="/login">Login</Link>
             {/* <Link to="/logout">Logout</Link> */}
             <Link to="/signUp">Sign-Up</Link>
             
             <button onClick={toggleNavbar}>
                <ReorderIcon/>
             </button>              
           </div>
        </div>
    )
}
export default Navbar;
