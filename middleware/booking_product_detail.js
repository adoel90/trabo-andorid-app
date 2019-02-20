import axios from 'axios';
import { PRODUCT_DETAIL_SELECTED_REQUEST } from '../constants/action-types';


const bookingProductDetailMiddleware = ({ dispatch }) => (next) => (action) => {

    if(action.type === PRODUCT_DETAIL_SELECTED_REQUEST ){
        // console.log(action)

        axios
            .get(action.payload.url)
            .then(function (response) {
                // console.log(response);
                
                if(response.status == 200){
                    dispatch({type: action.payload.next.SUCCESS, payload: response.data.response})
                
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

export default bookingProductDetailMiddleware;
