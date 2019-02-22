import { SENDING_DATA_FORM_OF_BOOKING_REQUEST, STATUS_DATA_FORM_OF_BOOKING} from '../constants/action-types'
import { URL_API } from '../constants/config-api'

/*

    ***Parameter Body :
    {
        "adult" : 1,
        "children" : 1,
        "toddlers" : 0,
        "date" : "2019-02-18",
        "product_code" : "A-09229850",
        "package":[{"id": 328500, "qty": 0}], // ==> "id yang ada di dalam 'amount'"
        "additional":[{"id": 197, "qty": 0},{"id": 198, "qty": 0},{"id": 201, "qty": 0}],
        "user_code":"92",
        "promo_code" : "satu",
        "name": "edric",
        "phone" : "0812121345",
        "email" : "adoel.cs@gmail.com",
        "comment" : "this is test 123",
        "payment_type" : "full-payment",
        "customer_code" : "",
        "total_amount" : "4500000",
        "operation_time" : "12:00 AM",
        "phone_code" : "62",
        "referral" : "nua,edric",
        "additional_description":{
                "description":[{"heading":"A","content" :["Laundry Service↵✓  Shaded diving deck↵✓  Camera Station↵✓  Daily housekeeping↵✓  Audio & video entertainment↵✓  Library↵✓  Air Conditioned saloon↵✓  Aircon Cabins↵✓  Sun Deck↵✓  Indoor Saloon↵✓  Non-Diver (Snorkeler) Friendly↵✓  Warm Water Showers↵✓  Separate rinse for u/w camera↵✓  Custom built for diving↵✓  Charging stations↵✓  En-Suite bathrooms"]},{"heading":"C","content" :["123","llll"]}],
                "pax_details":[{"heading":"B","content" :[null]}]
            }
        }
*/

// export const postFormBooking = (data) => { //For a while use this action to know what the data we beared
    
//     console.log(data);

//     return {

//         type: SENDING_DATA_FORM_OF_BOOKING_REQUEST,
//         payload: {
//                 url: URL_API + "/product/book",
//                 next: STATUS_DATA_FORM_OF_BOOKING
//             },
//         data: data  
//     }
// }

export const postFormBooking = (data) => ({

    type: SENDING_DATA_FORM_OF_BOOKING_REQUEST,
    payload: {
            url: URL_API + "/product/book",
            next: STATUS_DATA_FORM_OF_BOOKING
        },
    data: data  
});
