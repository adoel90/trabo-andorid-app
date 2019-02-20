
import axios from 'axios'
import { PRODUCT_DATE_AVAILABLE_REQUEST } from '../constants/action-types';


const bookingProductDateAvailableMiddleware = ({ dispatch }) => (next) => (action) => {

    const tokenTest = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjExZmYyNzc4M2VmMjUwOGZhNzFkNjBlNzJkZTZjYzMxMmU0ZGY3Y2Q5ZjI1YWUyZTgxNDY3YzUzOTU5OTRlYjUyZjlkMWQ0ZTFiMjZmMTk0In0.eyJhdWQiOiI4IiwianRpIjoiMTFmZjI3NzgzZWYyNTA4ZmE3MWQ2MGU3MmRlNmNjMzEyZTRkZjdjZDlmMjVhZTJlODE0NjdjNTM5NTk5NGViNTJmOWQxZDRlMWIyNmYxOTQiLCJpYXQiOjE1NDk1MjI1MDUsIm5iZiI6MTU0OTUyMjUwNSwiZXhwIjoxNjEyNjgwOTA1LCJzdWIiOiI5MiIsInNjb3BlcyI6W119.FJgq0sDaevGsjJJMuWxoAvR0B6XLGwWcMPuAgNqUcoRmxkIGUiukCrf2BK_Fuljnko2Zmv7H8NCU-OuMDlwlF3cADFdKjwlTbxOR7FY-Fev1xd3wWMwXJFsm2RGaPdIkmXihCNAmXdSleM-4XMkks3j1zxaN10IilWTKkuVqvwkJhLjUTgQhFX79uVNTcVf81cyBSv7cflzQHIhWk0fBsuIjjgBLxhnBPh9i5IE3_aEE54fwMCk5RDyGJ-CMIzNTf66hIfTYUM1B2tmX0LBhsbtuOCuiroFQFnIIVWswhrKLBSQ7y-J0I4BVufac4vnrPSm1v6LRu26oaapstv2kB6hk-ii7ICtEtx9p32qyAFJT6oVoM4eapa5e01yloimpOFGGA1zV_euqj-bIXobHWDfSnpYYjtcOqc6RTswszNsxQwLXfOp6WJvjQm5xPzh25j5OaJamSbinFJj6bz8oxZR4pmA5yvNIIjmNoeHqm8YTRLIc-xoFwNVir2PudItvovRroDQGlskRWLBlwZbldrDyf8KSSPHPkigCpbiUMhBfTAIfolsSclcVD5G-MQeMak7dvftQ3ap_smkh82eE_hRKy7uP3m875hCzQldChn_c9V9WA7ZK5q3Da3AaG3_TWQuVZUREfWrgC6PT9czm0R6_3T8bN0QdeW5B-bHNhd4';
        
    const body = {};
    const headers =  {
        'Authorization' : action.data != null ? action.data.token_type + " "+ action.data.access_token : "Bearer " + tokenTest,
        'Accept': "application/json",
        'Content-Type' : "application/json"

    };

axios.defaults.headers.common = headers;


    if(action.type === PRODUCT_DATE_AVAILABLE_REQUEST ){
        // console.log(action)
        axios
        .get(action.payload.url)
        .then(function (response) {
            // console.log(response);
            
            if(response.status == 200){
                dispatch({type: action.payload.next.SUCCESS, payload: response.data ? response.data.response : null})
            
            } else {
                dispatch({type:action.payload.next.PENDING});
            }
            
        })
        .catch(function (error) {
            console.log(error);
            dispatch({type: action.payload.next.ERROR})
        })

        dispatch({type: action.payload.next.PENDING})
    }

    next(action);
}; 

export default bookingProductDateAvailableMiddleware;