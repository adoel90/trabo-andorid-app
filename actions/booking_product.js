
/*
    This code used when "Component Calendar Day Picker" loaded, 
    and integrate inside "Saga Middleware" too !!!

*/

import { BOOKING_PRODUCT_REQUEST, GET_BOOKING_PRODUCT } from '../constants/action-types';
import { URL_API } from '../constants/config-api'

export const getProductAvailable = (data) => ({

    type: BOOKING_PRODUCT_REQUEST,
    payload: {
        url: URL_API + '/product/available',
        next: GET_BOOKING_PRODUCT 
    }
}) 


