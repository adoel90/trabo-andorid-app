import { PRODUCT_DATE_AVAILABLE_REQUEST, GET_PRODUCT_WITH_DATE_AVAILABLE } from '../constants/action-types';
import { URL_API } from '../constants/config-api';

export const getProductWithDateAvalaible = (data) => ({
    
    type: PRODUCT_DATE_AVAILABLE_REQUEST,
    payload: {
        // url: URL_API + `/mobile/product/sales-calendar?date=${data != null ? data.date : ""}&product_code=${data.product_code != null ? data.product_code : ""}`,
        url: URL_API + `/mobile/product?date=${data != null ? data.date : ""}`,
        next: GET_PRODUCT_WITH_DATE_AVAILABLE 
    },
    access_token: data.access_token
});

// {{url}}/mobile/product?date=2019-02-27
//{{url}}/mobile/product/sales-calendar?date=2019-2-27&product_code=A-09227133
