
import axios from 'axios'
import { PRODUCT_DATE_AVAILABLE_REQUEST } from '../constants/action-types';


const bookingProductDateAvailableMiddleware = ({ dispatch }) => (next) => (action) => {

    const body = {};
    const headers =  {
        'Authorization' : action.access_token != null ? "Bearer " + action.access_token : "Bearer : Where is your token ? ",
        'Accept': "application/json",
        'Content-Type' : "application/json"

    };

    axios.defaults.headers.common = headers;


    if(action.type === PRODUCT_DATE_AVAILABLE_REQUEST ){
        
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