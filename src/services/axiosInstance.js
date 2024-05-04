import axios from 'axios';

let url = `http://localhost:8080/api/public`;

export const axiosConfig = {
    baseURL: url
};
axios.defaults.withCredentials = false;

export const axiosInstance = axios.create(axiosConfig); 