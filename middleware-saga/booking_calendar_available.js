
import axios from 'axios';
import { put, takeEvery, all, call, takeLatest, take} from 'redux-saga/effects'
import { GET_ACCESS_TOKEN_USER_LOGIN, BOOKING_CALENDAR_AVAILABLE_REQUEST } from '../constants/action-types'
import { URL_API } from '../constants/config-api';
import { getBookingCalendarAvailableSuccess } from '../actions/booking_calender_available';

// function getDataBookingCalendarAvailable(action){
     
//     const body = {};
//     const headers =  {
//         // 'Authorization' : "Bearer "+ action.data.access_token
//         'Authorization' : action.data.token_type + " "+ action.data.access_token
//     };

//     //*Setting Axios - https://stackoverflow.com/questions/40988238/sending-the-bearer-token-with-axios **** axios.defaults.baseURL = 'http://localhost:1010/'; */    
//     axios.defaults.headers.common = headers;

//     axios
//         .get(action.payload.url)
//         .then(function (response) {
            
//             if(response.status == 200){
//                 console.log(response)
            
//             } else {
//                 console.log(" ==> Check your data is not empty !");
//             }
            
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
// }


/* Booking Calendar Available Worker */
export function* workerBookingCalendarAvailable(action){
    // console.log("Starting Booking Calendar Avalilable... work !");
    yield put({type: action.payload.next.PENDING})
    
    try {
        const tokenTest = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjExZmYyNzc4M2VmMjUwOGZhNzFkNjBlNzJkZTZjYzMxMmU0ZGY3Y2Q5ZjI1YWUyZTgxNDY3YzUzOTU5OTRlYjUyZjlkMWQ0ZTFiMjZmMTk0In0.eyJhdWQiOiI4IiwianRpIjoiMTFmZjI3NzgzZWYyNTA4ZmE3MWQ2MGU3MmRlNmNjMzEyZTRkZjdjZDlmMjVhZTJlODE0NjdjNTM5NTk5NGViNTJmOWQxZDRlMWIyNmYxOTQiLCJpYXQiOjE1NDk1MjI1MDUsIm5iZiI6MTU0OTUyMjUwNSwiZXhwIjoxNjEyNjgwOTA1LCJzdWIiOiI5MiIsInNjb3BlcyI6W119.FJgq0sDaevGsjJJMuWxoAvR0B6XLGwWcMPuAgNqUcoRmxkIGUiukCrf2BK_Fuljnko2Zmv7H8NCU-OuMDlwlF3cADFdKjwlTbxOR7FY-Fev1xd3wWMwXJFsm2RGaPdIkmXihCNAmXdSleM-4XMkks3j1zxaN10IilWTKkuVqvwkJhLjUTgQhFX79uVNTcVf81cyBSv7cflzQHIhWk0fBsuIjjgBLxhnBPh9i5IE3_aEE54fwMCk5RDyGJ-CMIzNTf66hIfTYUM1B2tmX0LBhsbtuOCuiroFQFnIIVWswhrKLBSQ7y-J0I4BVufac4vnrPSm1v6LRu26oaapstv2kB6hk-ii7ICtEtx9p32qyAFJT6oVoM4eapa5e01yloimpOFGGA1zV_euqj-bIXobHWDfSnpYYjtcOqc6RTswszNsxQwLXfOp6WJvjQm5xPzh25j5OaJamSbinFJj6bz8oxZR4pmA5yvNIIjmNoeHqm8YTRLIc-xoFwNVir2PudItvovRroDQGlskRWLBlwZbldrDyf8KSSPHPkigCpbiUMhBfTAIfolsSclcVD5G-MQeMak7dvftQ3ap_smkh82eE_hRKy7uP3m875hCzQldChn_c9V9WA7ZK5q3Da3AaG3_TWQuVZUREfWrgC6PT9czm0R6_3T8bN0QdeW5B-bHNhd4';
        
        const body = {};
        const headers =  {
            // 'Authorization' : "Bearer "+ action.data.access_token
            // 'Authorization' : action.data != null ? action.data.token_type + " "+ action.data.access_token : "Bearer " + localStorage.getItem('accessToken')
            // 'Authorization' : action.data.token_type + " "+ action.data.access_token
            'Authorization' : action.data != null ? action.data.token_type + " "+ action.data.access_token : "Bearer " + tokenTest
        };
    
        //*Setting Axios - https://stackoverflow.com/questions/40988238/sending-the-bearer-token-with-axios **** axios.defaults.baseURL = 'http://localhost:1010/'; */    
        axios.defaults.headers.common = headers;
        //const response = yield call(axios.post, "Your API URL", {data})
        // yield call(getDataBookingCalendarAvailable, action);
        const response = yield call(axios.get, action.payload.url);
        // console.log(response);
        if(response.status === 200){
            yield put({type: action.payload.next.SUCCESS, data: response.data })
        } else{
            // console.log("I have no RESPONSE !!!")
        }

    } catch(e){
        // console.log(e)
        yield put({type: action.payload.next.ERROR })
    }
}

/* Saga Watcher */
export function* watchActivityBooking(){
    yield takeEvery(BOOKING_CALENDAR_AVAILABLE_REQUEST, workerBookingCalendarAvailable);
}



