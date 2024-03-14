import {axiosInstance as axios} from './axiosInstance';


const CREATE_NEW_USER = () => `user/create`;
const AUTHENTICATE = () => `authenticate`;


const SEARCH_ITEM = () => `items/search`;


const CREATE_NEW_ORDER = () => `orders/create`;
const ALL_ORDERS = (userId) => `orders/user/{userId}`;
const SPECIFIC_ORDER = (orderId) => `orders/{orderId}`;
const UPDATE_ORDER_DETAILS = (orderId) => `orders/updateStatus/{orderId}`;
const FINALIZE_ORDER = (orderId) => `orders/modify/{orderId}`


const FAVORITE_ITEMS = (userId) => `favorites/user/{userId}`;
const ADD_FAVORITE = ()  => `favorites/add`;
const REMOVE_FAVORITE = () => `favorites/remove`;

const CONTACT = ()  => `test2`;


const TEST_API = () => `test1`;

export const createNewUser = (userBody) => {
     axios.post(CREATE_NEW_USER(), userBody);
}
export const authenticate = (userBody) => {
  axios.post(AUTHENTICATE(), userBody);
}


export const search = (searchBody) => {
     axios.post(SEARCH_ITEM(), searchBody);
}


  export const createNewOrder = (orderBody) => {
     axios.post(CREATE_NEW_ORDER(), orderBody);
  }

  export const getOrders = async (userId) => {
     axios.get(ALL_ORDERS(), userId);
  };

  export const getOrder = async(orderId) => {
     axios.get(SPECIFIC_ORDER(),{orderId});
  };

  export const updateOrder = async(orderId) => {
     axios.put(UPDATE_ORDER_DETAILS(),{orderId});
  };

  export const finalizeOrder = async(orderId) => {
     axios.get(FINALIZE_ORDER(),{orderId});
  };


  export const getFavorites = async (userId) => {
   axios.get(FAVORITE_ITEMS(), {userId});
  };
 
  export const addToFavorites = async (userId, itemId) => {
    axios.post(ADD_FAVORITE(), {userId ,itemId});
  };
 
  export const removeFromFavorites = async (userId, itemId) => {  
    axios.delete(REMOVE_FAVORITE(), {userId, itemId});
  };


  export const userContact = async () => {
    axios.post(CONTACT(), { });
  };

  export const testAuthenticatedApi = (params) => {
    axios.get(TEST_API(), {params: params});
  };