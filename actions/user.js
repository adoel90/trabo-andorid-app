import { CREATE_USER, API_POST_USER_REQUEST, API_GET_USER_REQUEST, GET_LIST_USERS, API_POST_UPDATE_USER_REQUEST, POST_UPDATE_USER } from '../constants/action-types';
import { URL_API } from '../constants/config-api';

//*
export const addUser = (data) => ({
    type: API_POST_USER_REQUEST,
    payload: {
        url: URL_API + '/users',
        next: CREATE_USER,
    },
    data: data
});

// export const getListUser = (accessToken) => ({
export const getListUser = () => ({
    type: API_GET_USER_REQUEST,
    payload: {
        // url: URL_API + '/user/list?accessToken=' + accessToken + '&limit=100',
        url: URL_API + '/user/list?accessToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwicmVtZW1iZXIiOm51bGwsImFjY2Vzc19pZCI6Miwid19pZCI6MX0.k5V1IKzLGzMjEGTu_StYD1uD_UOdOpc9uR6X-VWn97E&limit=100', // + &limit=100'
        next: GET_LIST_USERS
    }
}) 

export const postUpdateUser = (data) => ({
    type: API_POST_UPDATE_USER_REQUEST,
    payload: {
        url: URL_API + '/user/update?accessToken=' + data.accessToken,
        next: POST_UPDATE_USER
    },
    data: data
})
