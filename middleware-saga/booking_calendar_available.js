
import axios from 'axios';
import { put, takeEvery, all, call, takeLatest, take} from 'redux-saga/effects'
import { GET_ACCESS_TOKEN_USER_LOGIN, BOOKING_CALENDAR_AVAILABLE_REQUEST } from '../constants/action-types'
import { URL_API } from '../constants/config-api';
import { getBookingCalendarAvailableSuccess } from '../actions/booking_calender_available';

/* Booking Calendar Available Worker */
export function* workerBookingCalendarAvailable(action){

    yield put({type: action.payload.next.PENDING})
    
    try {
        
        
        const body = {};
        const headers =  {
            // 'Authorization' : "Bearer "+ action.data.access_token
            // 'Authorization' : action.data != null ? action.data.token_type + " "+ action.data.access_token : "Bearer " + localStorage.getItem('accessToken')
            // 'Authorization' : action.data.token_type + " "+ action.data.access_token
            'Authorization' : action.data != null ? "Bearer " + action.data.access_token : "Bearer : null " 
        };
    
        //*Setting Axios - https://stackoverflow.com/questions/40988238/sending-the-bearer-token-with-axios **** axios.defaults.baseURL = 'http://localhost:1010/'; */    
        axios.defaults.headers.common = headers;
        const response = yield call(axios.get, action.payload.url);
        // console.log(response);
        if(response.status === 200){
            yield put({type: action.payload.next.SUCCESS, data: response.data })
        } else{
            console.log("I have no RESPONSE !!!")
        }

    } catch(e){
        console.log(e)
        yield put({type: action.payload.next.ERROR })
    }
}

/* Saga Watcher */
export function* watchActivityBooking(){
    yield takeEvery(BOOKING_CALENDAR_AVAILABLE_REQUEST, workerBookingCalendarAvailable);
}



