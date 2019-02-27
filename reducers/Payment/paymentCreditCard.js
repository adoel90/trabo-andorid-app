import { RESULT_PAYMENT_CREDIT_CARD } from '../../constants/action-types';

const initialState = {
    loading : false,
    list : [],
    data: {}
};

const paymentCreditCardReducer  = (state = initialState, action) => {

    switch (action.type) {

        case RESULT_PAYMENT_CREDIT_CARD.PENDING:
            return {
                ...state,
                loading: true
            };

        case RESULT_PAYMENT_CREDIT_CARD.SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };

        case RESULT_PAYMENT_CREDIT_CARD.ERROR:
            return {
                ...state,
                loading: false
            };
    
        default:
            break;
    };

    return state;
}

export default paymentCreditCardReducer ;