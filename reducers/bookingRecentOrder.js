import { GET_RECENT_ORDER } from '../constants/action-types'

const initialState = {
    loading : false,
    list : [],
    data: {}
};

const bookingRecentOrderReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_RECENT_ORDER.PENDING:
            return{
                ...state,
                loading: true
            }

        case GET_RECENT_ORDER.SUCCESS:
            return{
                ...state,
                loading: false,
                data: action.payload
            }

        case GET_RECENT_ORDER.ERROR:
            return {
                ...state,
                loading: false
            }
        
        default:
            break;
    }

    return state;
}

export default bookingRecentOrderReducer;
