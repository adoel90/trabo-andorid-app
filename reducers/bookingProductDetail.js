import { GET_PRODUCT_DETAIL_SELECTED } from '../constants/action-types';

const initialState = {
    loading : false,
    list : [],
    data: {}
};


const bookingProductDetailReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_PRODUCT_DETAIL_SELECTED.PENDING:
            return{
                ...state,
                loading: true
            }

        case GET_PRODUCT_DETAIL_SELECTED.SUCCESS:

            return{
                ...state,
                loading: false,
                data: action.payload
            };

        case GET_PRODUCT_DETAIL_SELECTED.ERROR:
            return{
                ...state,
                loading: false
            }
    
        default:
            break;
    };

    return state;
}

export default bookingProductDetailReducer;