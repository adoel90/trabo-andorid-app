import { RESULT_DATA_CALCULATE_PRICE_BOOKING } from '../../constants/action-types';

const initialState = {
    loading : false,
    list : [],
    data: {}
};

const bookingCalculatePriceReducer = (state = initialState, action) => {

    switch (action.type) {

        case RESULT_DATA_CALCULATE_PRICE_BOOKING.PENDING:
            return{
                ...state,
                loading: true
            }

        case RESULT_DATA_CALCULATE_PRICE_BOOKING.SUCCESS:

            return{
                ...state,
                loading: false,
                data: action.payload
            };

        case RESULT_DATA_CALCULATE_PRICE_BOOKING.ERROR:
            return{
                ...state,
                loading: false
            }
    
        default:
            break;
    };

    return state;
}

export default bookingCalculatePriceReducer;