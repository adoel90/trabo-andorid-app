
import axios from 'axios'


import { RECENT_ORDER_REQUEST } from '../constants/action-types';


const recentOrderMiddleware = ({ dispatch }) => (next) => (action) => {

    
    const body = {};
    const headers =  {
        'Authorization' : action.access_token != null ? "Bearer " + action.access_token : "Bearer : Where is your token ? ",
        'Accept': "application/json",
        'Content-Type' : "application/json"

    };

    axios.defaults.headers.common = headers;

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