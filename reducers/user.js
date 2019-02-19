
import { ADD_USER, CREATE_USER, GET_LIST_USERS} from '../constants/action-types'


const initialState = {
    loading : false,
    list : [],
    user: {}
};



const userReducer = (state = initialState, action) => {

    console.log(action);

    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                loading: false,
                user: action.data
            }

        case CREATE_USER.PENDING:

            console.log(action)
            return {
                ...state,
                loading: true
            }

        case CREATE_USER.SUCCESS:

            

            return {
                ...state,
                loading: false,
                user: action.data
            }

        case CREATE_USER.ERROR:
            return {
                ...state,
                loading: false
            }

        case GET_LIST_USERS.PENDING :

            console.log(action);
            console.log(state);
            
            
            return {
                ...state, 
                loading: true
            }


        case GET_LIST_USERS.SUCCESS:
            return {
                ...state,
                loading: true,
                user: action.payload.data
            }

        case GET_LIST_USERS.ERROR:
            return {
                ...state,
                loading: false
            }

        default :
            // console.log(":)");
            break
            
    }

    return state;


}

export default userReducer;