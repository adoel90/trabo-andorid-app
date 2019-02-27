import { SENDING_DATA_PAYMENT_DESPOSIT_CASH_REQUEST, RESULT_PAYMENT__DEPOSIT_CASH } from '../constants/action-types'
import { URL_API } from '../constants/config-api';

export const postPaymentDepositCash = (data) => ({

    type: SENDING_DATA_PAYMENT_DESPOSIT_CASH_REQUEST,
    payload: {
            url: URL_API + "/payment/cash",
            next: RESULT_PAYMENT__DEPOSIT_CASH
        },
    data: data,
    access_token: data.access_token
});
