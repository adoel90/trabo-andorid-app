
import axios from 'axios'
import { BOOKING_PRODUCT_REQUEST, GET_BOOKING_PRODUCT } from '../constants/action-types';

const bookingProductMiddleware = ({ dispatch }) => (next) => (action) => {

    

    if(action.type === BOOKING_PRODUCT_REQUEST ){
        // console.log(action)

        axios
        .get(action.payload.url)
        .then(function (response) {
            // console.log(response);
            
            if(response.status == 200){
                dispatch({type: action.payload.next.SUCCESS, payload: response.data.response})
            
            } else {
                dispatch({type:action.payload.next.PENDING});
                console.log(" ==> Check your data is not empty !");
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

export default bookingProductMiddleware;