
import axios from 'axios'


import { RECENT_ORDER_REQUEST, GET_RECENT_ORDER } from '../constants/action-types';


const recentOrderMiddleware = ({ dispatch }) => (next) => (action) => {

    

    if(action.type === RECENT_ORDER_REQUEST ){
        // console.log(action)

        axios
        .get(action.payload.url)
        .then(function (response) {
            
            
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

export default recentOrderMiddleware;