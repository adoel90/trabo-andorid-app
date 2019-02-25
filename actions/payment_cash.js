import { SENDING_DATA_PAYMENT_CASH_REQUEST, RESULT_PAYEMENT_CASH } from '../constants/action-types'
import { URL_API } from '../constants/config-api';

export const postPaymentCash = (data) => ({

    type: SENDING_DATA_PAYMENT_CASH_REQUEST,
    payload: {
            url: URL_API + "/payment/cash",
            next: RESULT_PAYEMENT_CASH
        },
    data: data,
    access_token: data.access_token
});
