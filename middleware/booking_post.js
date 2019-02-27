

/*
    This code is not used, because have been moved and now use "Saga Middleware"

*/


import axios from 'axios'

import { SENDING_DATA_FORM_OF_BOOKING_REQUEST} from '../constants/action-types'

const postFormBookingMiddleware = ({dispatch}) => (next) => (action) => {
        
    const body = {};
    const headers =  {
        // 'Authorization' : action.data != null ? action.data.token_type + " "+ action.data.access_token : "Bearer " + tokenTest,
        'Authorization' : "Bearer " + action.access_token,
        'Accept': "application/json",
        'Content-Type' : "application/json"
    };

    axios.defaults.headers.common = headers;

    if(action.type === SENDING_DATA_FORM_OF_BOOKING_REQUEST){
        
        axios
            .post(action.payload.url, action.data)
            .then(function(response){
                console.log(response)

                if(response.status == 200){

                    dispatch({type: action.payload.next.SUCCESS, payload: response})
                  

                } else { console.log("Status response NOT OK, NOT 200 !")}
            })
            .catch(function(error){
                console.log("Error : ", error)
                dispatch({type: action.payload.next.ERROR})
            })

        dispatch({type: action.payload.next.PENDING });
    }

    
    next(action);

}

export default postFormBookingMiddleware;