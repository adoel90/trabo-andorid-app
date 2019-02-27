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

//*PAYMENT
const asyncStatusPayment= (type) => ({
    PENDING: `[API] ${type}_PENDING`,
    SUCCESS: `[API] ${type}_SUCCESS`,
    ERROR: `[API] ${type}_ERROR`,
});

//*MANIFEST
const asyncStatusManifest = (type) => ({
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

//Booking - Payment - Full Payment Cash
export const SENDING_DATA_PAYMENT_CASH_REQUEST = "Request POST Payment Cash, status... ";
export const RESULT_PAYEMENT_CASH = asyncStatusPayment("Status POST Payment Cash, status... ");

//Booking - Payment - Full Payment Via Transfer Bank - {{url}}/payment/xendit/invoice
export const SENDING_DATA_PAYMENT_TRANSFER_BANK_REQUEST = "Request POST Payment Transfer Bank, status... ";
export const RESULT_PAYMENT_TRANSFER_BANK = asyncStatusPayment("Status POST Payment Transfer Bank, status... ");

//Booking - Payment - Payment Via Credit Card
export const SENDING_DATA_PAYMENT_CREDIT_CARD_REQUEST = "Request POST Payment Credit Card, status...";
export const RESULT_PAYMENT_CREDIT_CARD = asyncStatusPayment("Status POST Payment Credit Card, status...");

//Booking - Payment - Payment Deposit Cash
export const SENDING_DATA_PAYMENT_DESPOSIT_CASH_REQUEST = "Request POST Payment Deposit Cash, status... ";
export const RESULT_PAYMENT__DEPOSIT_CASH = asyncStatusPayment("Status POST Payment Deposit Cash, status... ");

//Booking - Payment - Payment Deposit Via Transfer Bank 
export const SENDING_DATA_PAYMENT_DEPOSIT_TRANSFER_BANK_REQUEST = "Request POST Payment Deposit Transfer Bank, status... ";
export const RESULT_PAYMENT_DEPOSIT_TRANSFER_BANK = asyncStatusPayment("Status POST Payment Deposit Transfer Bank, status... ");


//Manifest - List Product || {{url}}/manifest/product/available?
export const MANIFEST_LIST_REQUEST = "Request Manifest List, status... "
export const GET_MANIFEST_LIST = asyncStatusManifest("Gets Manifest List, status... ");

//Manifest - List Date ||  {{url}}/manifest/operation-dates/A-0921014
export const MANIFEST_LIST_DATE_REQUEST = "Request List Date inside Manifest Page, status...";
export const GET_LIST_DATE_INSIDE_MANIFEST = asyncStatusManifest("Get List Date Inside Manifest Page, status... ");


