// import React, {useRef, useState, useEffect, Fragment, useHistory, useContext} from "react";
// import {Link} from "react-router-dom";
// import { authenticate } from "../../services/api";
// import AuthContext from "../context/AuthProvider";


//  function Logout() {
//   const { setAuth } = useContext(AuthContext);
//     const userRef = useRef();
//     const errRef = useRef();
//     const history = useHistory();

//     const [user, setUser] = useState("");
//     const [pwd, setPwd] = useState("");

//     const [errMsg, setErrMsg] = useState("");
//     const [success, setSuccess] = useState(true);

//     useEffect(() => {
//         userRef.current.focus();
//     }, []);

//     useEffect(() => {
//         setErrMsg("");
//     }, [user, pwd]);

//     const handleLogout = async (e) => {
//         e.preventDefault();
//       try {
//         const userBody = {
//             username: user,
//             password: pwd
//         }
//               const response = await authenticate(userBody);
//               setSuccess(true);
//               setAuth(null);
//               setUser("");
//               setPwd("");
//               history.push("/Login");
//             } catch (err) {
//               if (!err.response) {
//                   setErrMsg("No Server Response");
//               } else if (err.response.status === 403) {
//                   setErrMsg("Incorrect Username Or Password");
//               } else {
//                   setErrMsg("Authentication Failed");
//               }
//               errRef.current.focus();
//           }
//       };


//   return (
//     <Fragment>
//           <h1>Are you sure you want to logged out!</h1>          
//           <button onClick={handleLogout}>Logout</button>
//     </Fragment>
//   );
// };
// export default Logout;
