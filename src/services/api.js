import {axiosInstance as axios} from './axiosInstance';


const CREATE_NEW_USER = () => `user/create`;
const DELETE_USER = (id) => `user/delete/${id}`;
const UPDATE_USER = () => `user/update`;
const GET_ALL_USERS_BY_FIRST_NAME = () => `user/All/`;
const GET_USERS = () => `user/`;
const GET_ALL_USERS = () => `user/all/`;

const AUTHENTICATE = () => `authenticate`;


const SEARCH_ITEM = () => `items/search/`;
const CREATE_ITEM = () => `items/create`;
const GET_ALL_ITEM = () => `items/all/`;
const GET_ALL_ITEM_BY_USER_ID = (userId) => `items/all/${userId}`;
const GET_ITEM_BY_TITLE = (title) =>`items/item/${title}`;

const CREATE_NEW_ORDER = () => `orders/create`;
const ALL_USER_ORDERS = (userId) => `orders/user/${userId}`;
const SPECIFIC_ORDER = (userId) => `orders/${userId}`;
const UPDATE_ORDER_DETAILS = (id) => `orders/updateStatus/${id}`;
const FINALIZE_ORDER = (orderId) => `orders/modify/${orderId}`;
const ORDER_HISTORY = (userId) => `orders/history/${userId}`;
const UPDATE_ITEM_ORDER = () => `orders/updateItem`;
const DELETE_ORDER = (userId) => `orders/delete/${userId}`;


const FAVORITE_ITEMS = (userId) => `favorites/user/${userId}`;
const ADD_FAVORITE = ()  => `favorites/add`;
const REMOVE_FAVORITE = (userId) => `favorites/remove/${userId}`;

const CONTACT = ()  => `test1`;


const TEST_API = () => `test2`;
const CONTACT_USER = () => `contact`;

export const createNewUser = (userBody) => {
    return axios.post(CREATE_NEW_USER(), userBody);
}
export const updateUser = (userBody) => {
   return axios.put(UPDATE_USER(), userBody);
}
export const getUsersByFirstName = () => {
   return axios.get(GET_ALL_USERS_BY_FIRST_NAME());
}
export const getUserByFirstName = (params) => {
   return axios.get(GET_USERS(), {params: params});
}
export const getAllUsers = () => {
   return axios.get(GET_ALL_USERS());
}
export const deleteUser = (userId) => {
   return axios.delete(DELETE_USER(), userId);
}

export const authenticate = (userBody) => {
    return axios.post(AUTHENTICATE(), userBody);
}


export const search = (params) => {
    return axios.get(SEARCH_ITEM(), {params: params});
}
export const createItem = (itemBody) => {
   return axios.post(CREATE_ITEM(), itemBody);
}
export const getAllItems =  () => {
   return axios.get(GET_ALL_ITEM());
}
export const getItem =  (title) => {
    return axios.get(GET_ITEM_BY_TITLE(), {title});
}
export const getItemsByUserId =  (userId) => {
   return axios.get(GET_ALL_ITEM_BY_USER_ID(),{userId});
}
  export const createOrder = (orderBody) => {
     return axios.post(CREATE_NEW_ORDER(), {orderBody});
  }


  export const getOrders =  (userId) => {
     return axios.get(ALL_USER_ORDERS(), {userId});
  };

  export const getOrder = (userId) => {
     return axios.get(SPECIFIC_ORDER(),{userId});
  };

  export const updateOrder = (id, params) => {
     return axios.put(UPDATE_ORDER_DETAILS(),{id,params:params});
  };

  export const finalizeOrder = (orderId,orderBody) => {
     return axios.get(FINALIZE_ORDER(),{orderId,orderBody});
  };

  export const updateItemStock = (params) => {
   return axios.put(UPDATE_ITEM_ORDER(),{params: params});
};

export const orderHistory = (userId) => {
   return axios.get(ORDER_HISTORY(userId),{userId});
};
  export const deleteOrder = (orderId) => {
   return axios.delete(DELETE_ORDER(),{orderId});
};

  export const getFavorites =  (userId) => {
     return axios.get(FAVORITE_ITEMS(), {userId});
  };
 
  export const addToFavorites =  (item) => {
     return axios.post(ADD_FAVORITE(), item);
  };
 
  export const removeFromFavorites =  (userId, params) => {  
     return axios.delete(REMOVE_FAVORITE(), {userId}, {params:params});
  };


  export const userContact =  () => {
     return axios.post(CONTACT(), { });
  };

  export const testAuthenticatedApi = (params) => {
     return axios.get(TEST_API(), {params: params});
  };

  export const contactUser = (contactBody) => {
    return axios.get(CONTACT_USER(contactBody));
 };