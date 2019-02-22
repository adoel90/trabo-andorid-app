const asyncActionTypeUser = (type) => ({
    PENDING: `[API] ${type}_PENDING`,
    SUCCESS: `[API] ${type}_SUCCESS`,
    ERROR: `[API] ${type}_ERROR`,
});

const asyncActionTypeLogin = (type) => ({
    PENDING: `${type} PENDING !`,
    SUCCESS: `${type} SUCCESS !`,
    ERROR: `${type} ERROR !`,
});

//*BOOKING
const asyncStatusBookingAvailable= (type) => ({
    PENDING: `[API] ${type}_PENDING`,
    SUCCESS: `[API] ${type}_SUCCESS`,
    ERROR: `[API] ${type}_ERROR`,
});

export const API_POST_USER_REQUEST = '[Middleware] Api POST User Request...';
export const API_GET_USER_REQUEST = '[Middleware] Api GET User Request...';

export const CREATE_USER = asyncActionTypeUser('CREATE_USER');
export const GET_LIST_USERS = asyncActionTypeUser('GET_LIST_USERS');

//UPDATE
export const API_POST_UPDATE_USER_REQUEST = '[Action - Middleware - Action] Api Post Update User Request...'
export const POST_UPDATE_USER = asyncActionTypeUser('[Middleware -> Reducer] Api Post Update User... ')

//CRUD WITH REQRES API
export const ADD_USER = '[Action] Add user & job ...';


// LOGIN API TRABO
export const API_POST_USER_LOGIN_REQUEST = "[Action - Middleware - Action] Api Post User Login Request...";
export const GET_ACCESS_TOKEN_USER_LOGIN = asyncActionTypeLogin("[Middleware -> Reducer] Api Get Access Token user to login... ");

//* Booking Calendar API 
export const BOOKING_CALENDAR_AVAILABLE_REQUEST = "Request Booking Calendar Available, status... ";
export const GET_BOOKING_CALENDAR_AVAILABLE = asyncStatusBookingAvailable("Get Booking Calendar Available, status ...");

//* Booking Product API
export const BOOKING_PRODUCT_REQUEST = "Request Booking Product Available, status... "
export const GET_BOOKING_PRODUCT = asyncStatusBookingAvailable("Get Booking Product, status... ")

//* Booking - Recent Order API
export const RECENT_ORDER_REQUEST = "Request Recent Order, status... "
export const GET_RECENT_ORDER = asyncStatusBookingAvailable("Get Recent Order, status... ")

//* Booking - Product Date Available Detail - {{url}}/product/sales-calendar?date=2019-02-17
export const PRODUCT_DATE_AVAILABLE_REQUEST = "Request Product Date Available ==> '/mobile/product', status ... ";
export const GET_PRODUCT_WITH_DATE_AVAILABLE = asyncStatusBookingAvailable("Get Product With Date Available, status ...");

//* Booking - Product Detail - {{url}}/product/A-09227133?date=2019-02-17&time=05:30 AM
export const PRODUCT_DETAIL_SELECTED_REQUEST = "Request Product Detail Selected, status ... ";
export const GET_PRODUCT_DETAIL_SELECTED = asyncStatusBookingAvailable("Get Product Detail, status...");

//* Booking - Post Booking - {{url}}/product/book
export const SENDING_DATA_FORM_OF_BOOKING_REQUEST = "Request POST Data Form of Booking, status... ";
export const STATUS_DATA_FORM_OF_BOOKING = asyncStatusBookingAvailable("Status POST Data Form of Booking ... ")

//*Booking - Post Calculate Price Booking
export const SENDING_DATA_CALCULATE_PRICE_BOOKING_REQUEST = "Request POST Data Calculate Price, status..."
export const RESULT_DATA_CALCULATE_PRICE_BOOKING = asyncStatusBookingAvailable("Status POST Data from Calculate Price Booking, status... ");