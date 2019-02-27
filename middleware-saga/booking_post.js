import axios from 'axios'
import { takeEvery, put, call, takeLatest} from 'redux-saga/effects';
import { SENDING_DATA_FORM_OF_BOOKING_REQUEST } from '../constants/action-types';
// import { URL_API } from '../constants/config-api';  

/* **************
    POST FORM BOOKING 
 ***************/

/* WORKER   */
export function* workerPostFormBooking(action){

    yield put({type: action.payload.next.PENDING })
    
    try {

        const body = {};
        const headers =  {
            // 'Authorization' : action.data != null ? action.data.token_type + " "+ action.data.access_token : "Bearer " + tokenTest
            'Authorization' : "Bearer " + action.access_token,
        };
    
        //*Setting Axios - https://stackoverflow.com/questions/40988238/sending-the-bearer-token-with-axios **** axios.defaults.baseURL = 'http://localhost:1010/'; */    
        axios.defaults.headers.common = headers;

        const response = yield call(axios.post, action.payload.url, action.data);  // const data = yield call(tryUserLogin, action);  //*Undefined response, Why ? ==> https://github.com/redux-saga/redux-saga/issues/998
        
        if(response.status === 200){
            console.log(response);
            
            yield put({type:action.payload.next.SUCCESS, payload: response });

            // ==> Action to fire BOOKING_CALENDAR_AVAILABLE_REQUEST !
            // yield put({
            //     type: BOOKING_CALENDAR_AVAILABLE_REQUEST,
            //     payload: {
            //         url: URL_API + '/mobile/product/sales-calendar',
            //         next: GET_BOOKING_CALENDAR_AVAILABLE
            //     },
            //     data: response.data.response
            // })


        } else {
            yield put({type:action.payload.next.ERROR })
        };

    }catch(e){
        console.log(e);
        yield put({type: action.payload.next.ERROR })
    }
};

/* WATCHER */
export function* watchPostBookingActivity(){

    yield takeLatest(SENDING_DATA_FORM_OF_BOOKING_REQUEST, workerPostFormBooking)   
};

