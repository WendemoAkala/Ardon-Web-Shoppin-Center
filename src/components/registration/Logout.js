// import React, {useRef, useContext,Fragment} from "react";
// import {useNavigate  } from "react-router-dom";
// import { authenticate } from "../../services/api";
// import AuthContext from "../context/AuthProvider";


//  function Logout() {
//   const { setAuth } = useContext(AuthContext);
//     const userRef = useRef();
//     const errRef = useRef();
//     const history = useNavigate ();
  

//     const handleLogout = async (e) => {
//         e.preventDefault();
//       try {
      
//               await authenticate();
//               setAuth(null);
//               history("/login");
//             } catch (err) {
//               let errMsg = "Authentication Failed";
//               if (!err.response) {
//                   errMsg = "No Server Response";
//               } else if (err.response.status === 403) {
//                 errMsg = "Incorrect Username Or Password";
//               }
                
//               console.error("Error during logout:", err);
//               errRef.current.focus();
//           }
//       };


//   return (
//     <Fragment>
//           <h1>Are you sure you want to logged out!</h1>          
//           <button onClick={() => window.confirm("Are you sure you want to log out?") && handleLogout()}>
//         Logout
//       </button>
//     </Fragment>
//   );
// };
// export default Logout;
