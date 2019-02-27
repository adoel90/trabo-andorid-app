import { RESULT_PAYMENT__DEPOSIT_CASH } from '../../constants/action-types';

const initialState = {
    loading : false,
    list : [],
    data: {}
};

const paymentDepositCashReducer = (state = initialState, action) => {

    switch (action.type) {

        case RESULT_PAYMENT__DEPOSIT_CASH.PENDING:
            return{
                ...state,
                loading: true
            }

        case RESULT_PAYMENT__DEPOSIT_CASH.SUCCESS:

            return{
                ...state,
                loading: false,
                data: action.payload
            };

        case RESULT_PAYMENT__DEPOSIT_CASH.ERROR:
            return{
                ...state,
                loading: false
            }
    
        default:
            break;
    };

    return state;
}

export default paymentDepositCashReducer;