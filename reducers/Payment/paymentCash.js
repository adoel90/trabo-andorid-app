import { RESULT_PAYEMENT_CASH } from '../../constants/action-types';

const initialState = {
    loading : false,
    list : [],
    data: {}
};

const paymentCashReducer = (state = initialState, action) => {

    switch (action.type) {

        case RESULT_PAYEMENT_CASH.PENDING:
            return{
                ...state,
                loading: true
            }

        case RESULT_PAYEMENT_CASH.SUCCESS:

            return{
                ...state,
                loading: false,
                data: action.payload
            };

        case RESULT_PAYEMENT_CASH.ERROR:
            return{
                ...state,
                loading: false
            }
    
        default:
            break;
    };

    return state;
}

export default paymentCashReducer;