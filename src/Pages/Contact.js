import React, {useRef, useState, useEffect, Fragment, useContext} from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom
import classes from "../Styles/Contact.css";
import { contactUser } from "../services/api";
import Corpuls3 from "../assets/corpuls3.jpeg";

function Contact() {
  const userRef = useRef(null);
  const errRef = useRef(null);

  const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [massege, setMassege] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
      setErrMsg("");
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const contactBody = {
            fullName: fullName,
            email: email,
            massege: massege,
        };
        const response = await contactUser(contactBody);
            console.log(response.data);
            setSuccess(true);
        setFullName("");
        setEmail("");
        setMassege("");
    } catch (err) {
        if (!err.response) {
            setErrMsg("No Server Response ");
        } else if (err.response.status === 403) {
            setErrMsg("Incorrect Username Or Password");
        } else {
            setErrMsg("Authentication Failed");
        }
        errRef.current.focus();
    }
};
  return (
    <div className='contact'>
      {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <Link to="/favorite">Go to Favorite</Link>
                    </p><br/>
                </section>
            ) : (
                <section>
      <p ref={errRef} className={errMsg ? classes.error_mes : "offscreen"}>
                        {errMsg}
                    </p>
        <div className='leftSide' style={{backgroundImage: `url(${Corpuls3})`}}></div>
        <div className='rigthSide'>
            <h1> Contact us </h1>
            <form onSubmit={handleSubmit} id="contact-form" method='POST'>
                <label htmlFor="name">Full Name</label>
                <input      
                            name="name" 
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setFullName(e.target.value)}
                            value={fullName}
                            placeholder="Enter full name..." 
                            type="text"/>
                
                <label htmlFor="email">Email</label>
                <input 
                            email="email" 
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Enter email..." 
                            type="email"/>
                
                <label htmlFor="massage">Massege</label>
                <textarea 
                            rows="6" 
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setMassege(e.target.value)}
                            value={massege}
                            placeholder="Enter massage..." 
                            name="massage" 
                            required>
                </textarea>
            
                <button type='submit'> SEND MASSAGE</button>
            </form>
        </div>
        </section>
            )}
    </div>
  );
}

export default Contact;
