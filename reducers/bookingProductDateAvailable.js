import { GET_PRODUCT_WITH_DATE_AVAILABLE } from '../constants/action-types';

const initialState = {
    loading : false,
    list : [],
    data: {}
};

const bookingProductDateAvailableReducer = (state = initialState, action) => {

    switch(action.type){

        case GET_PRODUCT_WITH_DATE_AVAILABLE.PENDING:
            return {
                loading: true
            }

        case GET_PRODUCT_WITH_DATE_AVAILABLE.SUCCESS:
            return {
                loading: false,
                data: action.payload
            }

        case GET_PRODUCT_WITH_DATE_AVAILABLE.ERROR:
            return {
                loading: false
            }

        default:
            break;
    }

    return state;
}

export default bookingProductDateAvailableReducer;
