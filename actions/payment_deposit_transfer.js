import { SENDING_DATA_PAYMENT_DEPOSIT_TRANSFER_BANK_REQUEST, RESULT_PAYMENT_DEPOSIT_TRANSFER_BANK } from '../constants/action-types'
import { URL_API } from '../constants/config-api';

export const postPaymentDepositTransferBank = (data) => ({

    type: SENDING_DATA_PAYMENT_DEPOSIT_TRANSFER_BANK_REQUEST,
    payload: {
            url: URL_API + "/payment/xendit/invoice",
            next: RESULT_PAYMENT_DEPOSIT_TRANSFER_BANK
        },
    data: data,
    access_token: data.access_token

});

/*

    ==> {{url}}/payment/xendit/invoice

    ==> 

        {  
            "transaction_code":"ARZ-11/10/2018-0405",
            "bank_code":"BRI"
        }

*/