import { GET_BOOKING_PRODUCT } from '../constants/action-types'

const initialState = {
    loading : false,
    list : [],
    data: {}
};

const bookingProductReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_BOOKING_PRODUCT.PENDING:
            return{
                ...state,
                loading: true
            }

        case GET_BOOKING_PRODUCT.SUCCESS:

            return{
                ...state,
                loading: false,
                data: action.payload
            };

        case GET_BOOKING_PRODUCT.ERROR:
            return{
                ...state,
                loading: false
            }
    
        default:
            break;
    };

    return state;
}

export default bookingProductReducer;