import axios from 'axios'
import { takeEvery, put, call, takeLatest} from 'redux-saga/effects'
import { AsyncStorage } from 'react-native';
import { 
    API_POST_USER_LOGIN_REQUEST, 
    BOOKING_CALENDAR_AVAILABLE_REQUEST, 
    GET_BOOKING_CALENDAR_AVAILABLE,
    BOOKING_PRODUCT_REQUEST,
    GET_BOOKING_PRODUCT,
    RECENT_ORDER_REQUEST,
    GET_RECENT_ORDER

} from '../constants/action-types'
import { URL_API } from '../constants/config-api';  




/* ***************************

    BOOKING CALENDAR AVAILABLE - ACTION

 *****************************/

// export function* workerBookingCalendarAvailable(action){

//     console.log(action);
// }



/* ***************************

    BOOKING PRODUCT AVAILABLE - ACTION

 *****************************/



/* **************

    LOGIN 

 ***************/

/* WORKER LOGIN  */
export function* workerLogin(action){

    // console.log("Trying to login...")
    // console.log(action);

    yield put({type: action.payload.next.PENDING })
    
    try {
        //const response = yield call(axios.post, "Your API URL", {data})
        const response = yield call(axios.post, action.payload.url, action.data); 
        // const data = yield call(tryUserLogin, action);  //*Undefined response, Why ? ==> https://github.com/redux-saga/redux-saga/issues/998
        
        if(response.status === 200){
            yield put({type:action.payload.next.SUCCESS, payload: response.data.response });
         

            // ==> Action to fire BOOKING_CALENDAR_AVAILABLE_REQUEST !
            yield put({
                type: BOOKING_CALENDAR_AVAILABLE_REQUEST,
                payload: {
                    url: URL_API + '/mobile/product/sales-calendar',
                    next: GET_BOOKING_CALENDAR_AVAILABLE
                },
                data: response.data.response
            })

            // ==> Action to fire BOOKING_PRODUCT_REQUEST !
            yield put({
                type: BOOKING_PRODUCT_REQUEST,
                payload: {
                    url: URL_API + '/product/available',
                    next: GET_BOOKING_PRODUCT 
                }
            })

            // ==> RECENT_ORDER_REQUEST !
            yield put({
                type: RECENT_ORDER_REQUEST,
                payload: {
                    url: URL_API + `/product/recent-order`,
                    next: GET_RECENT_ORDER
                }
            })

        } else {
            yield put({type:action.payload.next.ERROR })
        };

    }catch(e){
        // console.log(e);
        yield put({type: action.payload.next.ERROR })
    }
};


/* WATCHER LOGIN */
export function* watchLoginActivity(){

    yield takeLatest(API_POST_USER_LOGIN_REQUEST, workerLogin)
   
}

/* 

"This function is not used in this case, because hard to get response success from axios, be cause dificult structure"

function tryUserLogin(action){
    console.log(action)

    axios
        .post(action.payload.url, action.data)
        .then(function(response){
            console.log(response)
            if(response.status == 200){
                
                localStorage.setItem('accessToken', response.data.response.access_token)


            } else { console.log("Status response NOT OK, NOT 200 !")}
        })
        .catch(function(error){
            console.log("Error : ", error)
            
        })

    return data;
}

*/
