import { SENDING_DATA_PAYMENT_CREDIT_CARD_REQUEST, RESULT_PAYMENT_CREDIT_CARD } from '../constants/action-types'
import { URL_API } from '../constants/config-api';

export const postPaymentTransferCreditCard = (data) => ({

    type: SENDING_DATA_PAYMENT_CREDIT_CARD_REQUEST,
    payload: {
            url: URL_API + "/payment/credit-card",
            next: RESULT_PAYMENT_CREDIT_CARD
        },
    data: data,
    access_token: data.access_token
});

/*

    ==> {{url}}/payment/credit-card

    ==> 

        {  
            "transaction_code":"1",
            "token_id":"5bb1ca566225f3d717b71c34"
        }

*/