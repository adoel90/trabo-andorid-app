
/*
    This code used when "Component Calendar Day Picker" loaded, 
    and integrate inside "Saga Middleware" too !!!

*/

import { BOOKING_CALENDAR_AVAILABLE_REQUEST, GET_BOOKING_CALENDAR_AVAILABLE, GET_BOOKING_CALENDAR_AVAILABLE_SUCCESS } from '../constants/action-types';
import { URL_API } from '../constants/config-api'

export const getBookingCalendarAvailable = (data) => ({

    type: BOOKING_CALENDAR_AVAILABLE_REQUEST,
    payload: {
        url: URL_API + `/mobile/product/sales-calendar?product_code=${data != null ? data.product_code : ""}`,
        next: GET_BOOKING_CALENDAR_AVAILABLE
    },
    data: data //Need this parameter to get "access_token"
    
    /* 
        
        Parameter "data" : {
            
            access_token: "blabla",
            product_code: "blablabla"
        }

    */
}) 
