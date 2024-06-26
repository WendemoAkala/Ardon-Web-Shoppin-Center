import React, {useRef, useState, useEffect, Fragment} from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Register.module.css";
import {createNewUser} from "../../services/api";
import {Link} from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const ID_REGEX = /^[0-9]{9,10}$/;
const NAME_REGEX =  /^[A-Z][a-z]{2,20}$/;
const EMAIL_REGEX =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%&*_-]).{10,50}$/;
const ADDRESS_REGEX = /^(?=.*[A-z])(?=.*[ ,]).{10,20}$/;




const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [id, setId] = useState('');
    const [validNumber, setValidNumber] = useState(false);
    const [idFocus, setIdFocus] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [phone, setPhoneNumber] = useState('');
    const [validPhoneNumber, setValidPhoneNumber] = useState(false);
    const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [adress, setAdress] = useState('');
    const [validAdress, setValidAdress] = useState(false);
    const [adressFocus, setAdressFocus] = useState(false);

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

 
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidNumber(ID_REGEX.test(id));
      
    }, [id])

    useEffect(() => {
        setValidFirstName(NAME_REGEX.test(firstName));
      
    }, [firstName])

    useEffect(() => {
        setValidLastName(NAME_REGEX.test(lastName));
      
    }, [lastName])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
      
    }, [email])

    useEffect(() => {
        setValidPhoneNumber(ID_REGEX.test(phone));
      
    }, [phone])

    useEffect(() => {
        setValidAdress(ADDRESS_REGEX.test(adress));
      
    }, [adress])

   
    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])


    
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
     
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const newUserBody = {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                address: adress,
                username: user,
                password: pwd,
            }
            const response = createNewUser(newUserBody).then(response =>{
                console.log(response.data);
                setSuccess(true);
            })
           

          
            setId('');
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhoneNumber('');
            setAdress('');
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err.response) {
                setErrMsg('No Server Response 11111111');
            } else if (err.response.status === 400) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <Fragment>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <Link to={"/login"}>Sign In</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? classes.errmsg : classes.offscreen}>{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                                 <label htmlFor="id">
                                    Id:
                                    <FontAwesomeIcon icon={faCheck} className={validNumber ? classes.valid : classes.hide} />
                                    <FontAwesomeIcon icon={faTimes} className={validNumber || !id ? classes.hide : classes.invalid} />
                                </label>
                                <input
                                    type="number"
                                    id="id"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setId(e.target.value)}
                                    value={id}
                                    required
                                 
                                    onFocus={() => setIdFocus(true)}
                                 
                                    onBlur={() => setIdFocus(false)}
                                />
                                <p id="uidnote" className={idFocus && id && !validNumber ? classes.instructions : classes.offscreen}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                9 to 10 numbers.
                                </p>
                                <label htmlFor="firstName">
                                    first name:
                                    <FontAwesomeIcon icon={faCheck} className={validFirstName ? classes.valid : classes.hide} />
                                    <FontAwesomeIcon icon={faTimes} className={validFirstName || !firstName ? classes.hide : classes.invalid} />
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}
                                    required
                                 
                                    onFocus={() => setFirstNameFocus(true)}
                               
                                    onBlur={() => setFirstNameFocus(false)}
                                />
                                <p id="uidnote" className={firstNameFocus && firstName && !validFirstName ? classes.instructions : classes.offscreen}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    2 to 24 characters.<br />
                                    Must begin with a letter.
                                </p>
                                <label htmlFor="lastName">
                                        last name:
                                        <FontAwesomeIcon icon={faCheck} className={validLastName ? classes.valid : classes.hide} />
                                        <FontAwesomeIcon icon={faTimes} className={validLastName || !lastName ? classes.hide : classes.invalid} />
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                    required
                              
                                    onFocus={() => setLastNameFocus(true)}
                              
                                    onBlur={() => setLastNameFocus(false)}
                                    />
                                <p id="uidnote" className={lastNameFocus && lastName && !validLastName ? classes.instructions : classes.offscreen}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    2 to 24 characters.<br />
                                    Must begin with a letter.
                                </p>
                                <label htmlFor="phone">
                                    Phone:
                                    <FontAwesomeIcon icon={faCheck} className={validPhoneNumber ? classes.valid : classes.hide} />
                                    <FontAwesomeIcon icon={faTimes} className={validPhoneNumber || !phone ? classes.hide : classes.invalid} />
                                </label>
                                <input
                                    type="number"
                                    id="phone"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    value={phone}
                                    required
                               
                                    onFocus={() => setPhoneNumberFocus(true)}
                               
                                    onBlur={() => setPhoneNumberFocus(false)}
                                    />
                                <p id="uidnote" className={phoneNumberFocus && id && !validPhoneNumber ? classes.instructions : classes.offscreen}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                9 to 10 numbers.
                                </p>
                                <label htmlFor="email">
                                    Email:
                                    <FontAwesomeIcon icon={faCheck} className={validEmail ? classes.valid : classes.hide} />
                                    <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? classes.hide : classes.invalid} />
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                
                                    onFocus={() => setEmailFocus(true)}
                               
                                    onBlur={() => setEmailFocus(false)}
                                    />
                                <p id="uidnote" className={emailFocus && id && !validEmail ? classes.instructions : classes.offscreen}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                               Mast contain upercase lowercase numbers and a spaical character.
                                </p>
                                <label htmlFor="adress">
                                    Adress:
                                    <FontAwesomeIcon icon={faCheck} className={validAdress ? classes.valid : classes.hide} />
                                    <FontAwesomeIcon icon={faTimes} className={validAdress || !adress ? classes.hide : classes.invalid} />
                                </label>
                                <input
                                    type="text"
                                    id="adress"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setAdress(e.target.value)}
                                    value={adress}
                                    required
                              
                                    onFocus={() => setAdressFocus(true)}
                               
                                    onBlur={() => setAdressFocus(false)}
                                    />
                                <p id="uidnote" className={adressFocus && id && !validAdress ? classes.instructions : classes.offscreen}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Taip your address.
                                </p>
                                <label htmlFor="username">
                                    Username:
                                    <FontAwesomeIcon icon={faCheck} className={validName ? classes.valid : classes.hide} />
                                    <FontAwesomeIcon icon={faTimes} className={validName || !user ? classes.hide : classes.invalid} />
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                               
                                    onFocus={() => setUserFocus(true)}
                              
                                    onBlur={() => setUserFocus(false)}
                                    />
                                <p id="uidnote" className={userFocus && user && !validName ? classes.instructions : classes.offscreen}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    4 to 24 characters.<br />
                                    Must begin with a letter.<br />
                                    Letters, numbers, underscores, hyphens allowed.
                                </p>
                                <label htmlFor="password">
                                    Password:
                                    <FontAwesomeIcon icon={faCheck} className={validPwd ? classes.valid : classes.hide} />
                                    <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? classes.hide : classes.invalid} />
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                    />
                                <p id="pwdnote" className={pwdFocus && !validPwd ? classes.instructions : classes.offscreen}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    8 to 24 characters.<br />
                                    Must include uppercase and lowercase letters, a number and a special character.<br />
                                    Allowed special characters: <span>!</span> <span aria-label="at symbol">@</span> <span>#</span> <span>$</span> <span>%</span>
                                </p>


                                <label htmlFor="confirm_pwd">
                                    Confirm Password:
                                    <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? classes.valid : classes.hide} />
                                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? classes.hide : classes.invalid} />
                                </label>
                                <input
                                    type="password"
                                    id="confirm_pwd"
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    value={matchPwd}
                                    required
                                    onFocus={() => setMatchFocus(true)}
                                    onBlur={() => setMatchFocus(false)}
                                    />
                                <p id="confirmnote" className={matchFocus && !validMatch ? classes.instructions : classes.offscreen}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must match the first password input field.
                                </p>
                        <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className={classes.line}>
                          
                           <Link to="/login">Sign In</Link>
                        </span>
                    </p>
                </section>
                )}
        </Fragment>
    )
}

export default Register