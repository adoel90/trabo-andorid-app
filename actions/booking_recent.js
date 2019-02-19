import { RECENT_ORDER_REQUEST, GET_RECENT_ORDER } from '../constants/action-types';
import { URL_API } from '../constants/config-api'

export const getRecentOrderBooking = () => ({

    type: RECENT_ORDER_REQUEST,
    payload: {
        url: URL_API + `/product/recent-order`,
        next: GET_RECENT_ORDER
    },

}) 