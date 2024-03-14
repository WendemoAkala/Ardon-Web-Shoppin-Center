import React from 'react';
import "../Styles/Contact.css";
import Corpuls3 from "../assets/corpuls3.jpeg";

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${Corpuls3})`}}></div>
        <div className='rigthSide'>
            <h1> Contact us </h1>
            <form id="contact-form" method='POST'>
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder="Enter full name..." type="text"/>
                
                <label htmlFor="email">Email</label>
                <input email="email" placeholder="Enter email..." type="email"/>
                
                <label htmlFor="massage">Massege</label>
                <textarea rows="6" placeholder="Enter massage..." name="massage" required></textarea>
            
                <button type='submit'> SEND MASSAGE</button>
            </form>
        </div>
       
    </div>
  );
}

export default Contact;
