

/*
    

*/


import axios from 'axios';
import { MANIFEST_LIST_DATE_REQUEST } from '../constants/action-types';


const manifestListDateMiddleware = ({ dispatch }) => (next) => (action) => {

    // console.log("Action from middleware Manifest ", action);
    
    const body = {};
    const headers =  {
        'Authorization' : action.access_token != null ? "Bearer " + action.access_token : "Bearer : Where is your token ? ",
        'Accept': "application/json",
        'Content-Type' : "application/json"
    };

    axios.defaults.headers.common = headers;

    if(action.type === MANIFEST_LIST_DATE_REQUESTs ){
        
        axios
            .get(action.payload.url)
            .then(function (response) {
                console.log("From Middleware List Date : ", response);
                
                if(response.status == 200){
                    dispatch({type: action.payload.next.SUCCESS, payload: response})
                
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
    };

    next(action);
}; 

export default manifestListDateMiddleware;