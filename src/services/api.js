import {axiosInstance as axios} from './axiosInstance';


const CREATE_NEW_USER = () => `user/create`;
const DELETE_USER = (id) => `user/delete/${id}`;
const UPDATE_USER = () => `user/update/`;
const GET_ALL_USERS = () => `user/All/`;
const GET_USERS = () => `user/`;

const AUTHENTICATE = () => `authenticate`;


const SEARCH_ITEM = (searchBody) => `items/search/`;
const CREATE_ITEM = () => `items/create`;
const GET_ALL_ITEM = () => `items/all/`;
const GET_ITEM_BY_TITLE = (title) =>`items/item/${title}`;

const CREATE_NEW_ORDER = () => `orders/create`;
const ALL_ORDERS = (userId) => `orders/user/{userId}`;
const SPECIFIC_ORDER = (orderId) => `orders/{orderId}`;
const UPDATE_ORDER_DETAILS = (orderId) => `orders/updateStatus/{orderId}`;
const FINALIZE_ORDER = (orderId) => `orders/modify/{orderId}`;
const UPDATE_ITEM_ORDER = () => `orders/updateItem`;
const DELETE_ORDER = (userId) => `orders/delete/${userId}`;


const FAVORITE_ITEMS = (userId) => `favorites/user/{userId}`;
const ADD_FAVORITE = ()  => `favorites/add`;
const REMOVE_FAVORITE = () => `favorites/remove`;

const CONTACT = ()  => `test2`;


const TEST_API = () => `test1`;
const CONTACT_USER = () => `contact`

export const createNewUser = (userBody) => {
    return axios.post(CREATE_NEW_USER(), userBody);
}
export const authenticate = (userBody) => {
    return axios.post(AUTHENTICATE(), userBody);
}


export const search = (searchBody) => {
    return axios.get(SEARCH_ITEM(), searchBody);
}
export const getItem =  (title) => {
    return axios.post(GET_ITEM_BY_TITLE, title);
}

  export const createNewOrder = (orderBody) => {
     return axios.post(CREATE_NEW_ORDER(), orderBody);
  }

  export const getOrders = async (userId) => {
     return axios.get(ALL_ORDERS(), userId);
  };

  export const getOrder = async(orderId) => {
     return axios.get(SPECIFIC_ORDER(),{orderId});
  };

  export const updateOrder = async(orderId) => {
     return axios.put(UPDATE_ORDER_DETAILS(),{orderId});
  };

  export const finalizeOrder = async(orderId) => {
     return axios.get(FINALIZE_ORDER(),{orderId});
  };


  export const getFavorites = async (userId) => {
     return axios.get(FAVORITE_ITEMS(), {userId});
  };
 
  export const addToFavorites = async (userId, itemId) => {
     return axios.post(ADD_FAVORITE(), {userId ,itemId});
  };
 
  export const removeFromFavorites = async (userId, itemId) => {  
     return axios.delete(REMOVE_FAVORITE(), {userId, itemId});
  };


  export const userContact = async () => {
     return axios.post(CONTACT(), { });
  };

  export const testAuthenticatedApi = (params) => {
     return axios.get(TEST_API(), {params: params});
  };

  export const contactUser = (contactBody) => {
    return axios.post(CONTACT_USER(contactBody));
 };