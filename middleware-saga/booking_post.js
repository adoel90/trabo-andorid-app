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

        const tokenTest = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjExZmYyNzc4M2VmMjUwOGZhNzFkNjBlNzJkZTZjYzMxMmU0ZGY3Y2Q5ZjI1YWUyZTgxNDY3YzUzOTU5OTRlYjUyZjlkMWQ0ZTFiMjZmMTk0In0.eyJhdWQiOiI4IiwianRpIjoiMTFmZjI3NzgzZWYyNTA4ZmE3MWQ2MGU3MmRlNmNjMzEyZTRkZjdjZDlmMjVhZTJlODE0NjdjNTM5NTk5NGViNTJmOWQxZDRlMWIyNmYxOTQiLCJpYXQiOjE1NDk1MjI1MDUsIm5iZiI6MTU0OTUyMjUwNSwiZXhwIjoxNjEyNjgwOTA1LCJzdWIiOiI5MiIsInNjb3BlcyI6W119.FJgq0sDaevGsjJJMuWxoAvR0B6XLGwWcMPuAgNqUcoRmxkIGUiukCrf2BK_Fuljnko2Zmv7H8NCU-OuMDlwlF3cADFdKjwlTbxOR7FY-Fev1xd3wWMwXJFsm2RGaPdIkmXihCNAmXdSleM-4XMkks3j1zxaN10IilWTKkuVqvwkJhLjUTgQhFX79uVNTcVf81cyBSv7cflzQHIhWk0fBsuIjjgBLxhnBPh9i5IE3_aEE54fwMCk5RDyGJ-CMIzNTf66hIfTYUM1B2tmX0LBhsbtuOCuiroFQFnIIVWswhrKLBSQ7y-J0I4BVufac4vnrPSm1v6LRu26oaapstv2kB6hk-ii7ICtEtx9p32qyAFJT6oVoM4eapa5e01yloimpOFGGA1zV_euqj-bIXobHWDfSnpYYjtcOqc6RTswszNsxQwLXfOp6WJvjQm5xPzh25j5OaJamSbinFJj6bz8oxZR4pmA5yvNIIjmNoeHqm8YTRLIc-xoFwNVir2PudItvovRroDQGlskRWLBlwZbldrDyf8KSSPHPkigCpbiUMhBfTAIfolsSclcVD5G-MQeMak7dvftQ3ap_smkh82eE_hRKy7uP3m875hCzQldChn_c9V9WA7ZK5q3Da3AaG3_TWQuVZUREfWrgC6PT9czm0R6_3T8bN0QdeW5B-bHNhd4';
        
        const body = {};
        const headers =  {
            // 'Authorization' : action.data != null ? action.data.token_type + " "+ action.data.access_token : "Bearer " + tokenTest
            'Authorization' : "Bearer " + tokenTest
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

