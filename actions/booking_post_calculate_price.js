import { SENDING_DATA_CALCULATE_PRICE_BOOKING_REQUEST, RESULT_DATA_CALCULATE_PRICE_BOOKING } from '../constants/action-types'
import { URL_API } from '../constants/config-api'

/*

    ***Parameter Body :

    {
        "adult" : 1,
        "children" : 1,
        "toddlers" : 0,
        "date" : "2019-02-27",
        "product_code" : "A-09229850",
        "package":[{"id": 328500, "qty": 0}],
        "additional":[{"id": 197, "qty": 0},{"id": 198, "qty": 0},{"id": 201, "qty": 0}],
        "user_code":"",
        "promo_code":"satu"
    }

*/



export const postCalculatePriceBooking = (data) => ({

    type: SENDING_DATA_CALCULATE_PRICE_BOOKING_REQUEST,
    payload: {
            url: URL_API + "/product/total",
            next: RESULT_DATA_CALCULATE_PRICE_BOOKING
        },
    data: data  
});
