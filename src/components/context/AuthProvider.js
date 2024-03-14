
import React, { createContext, useContext, useState, useReducer} from "react";

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const AuthContext = createContext({});

const initialState = {
  user: null,
  isAuthenticated: false,
};

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [state, dispatch] = useReducer((prevState, action) => {
      switch (action.type) {
        case LOGIN:
        return {
          ...prevState,
          user: action.payload.user,
          isAuthenticated: true,
        };
      case LOGOUT:
        return {
          ...prevState,
          user: null,
          isAuthenticated: false,
        };
  
        case ADD_TO_CART:
          return {
            ...prevState,
            cart: [...prevState.cart, action.payload.item],
          };
        case REMOVE_FROM_CART:
          return {
            ...prevState,
            cart: prevState.cart.filter((item) => item.id !== action.payload.item.id),
          };
        default:
          return prevState;
      }
    }, initialState);

    const login = (user) => {
      dispatch({ type: LOGIN, payload: { user } });
      setLoggedIn(true);
    };
  
    const logout = () => {
      dispatch({ type: LOGOUT });
      setLoggedIn(false);
    };
  
    const addToCart = (item) => {
      dispatch({ type: ADD_TO_CART, payload: { item } });
    };
  
    const removeFromCart = (item) => {
      dispatch({ type: REMOVE_FROM_CART, payload: { item } });
    };

    // const login = () => setLoggedIn(true);
    // const logout = () => setLoggedIn(false);
    // 
    // const [favorites, setFavorites] = useState([]);
    // const addFavorite = (item) => {
      // setFavorites((prevFavorites) => [...prevFavorites, item]);
    // };
    // const removeFavorite = (item) => {
      // setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== item.id));
    // };

    return (
        <AuthContext.Provider value={{ ...state, auth, setAuth, isLoggedIn, login, logout ,ADD_TO_CART, REMOVE_FROM_CART, addToCart, removeFromCart }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };