
import { RESULT_PAYMENT_DEPOSIT_TRANSFER_BANK } from '../../constants/action-types';

const initialState = {
    loading : false,
    list : [],
    data: {}
};

const paymentDepositTransferReducer = (state = initialState, action) => {

    switch (action.type) {

        case RESULT_PAYMENT_DEPOSIT_TRANSFER_BANK.PENDING:
            return{
                ...state,
                loading: true
            }

        case RESULT_PAYMENT_DEPOSIT_TRANSFER_BANK.SUCCESS:

            return{
                ...state,
                loading: false,
                data: action.payload
            };

        case RESULT_PAYMENT_DEPOSIT_TRANSFER_BANK.ERROR:
            return{
                ...state,
                loading: false
            }
    
        default:
            break;
    };

    return state;
}

export default paymentDepositTransferReducer;