import { PRODUCT_DATE_AVAILABLE_REQUEST, GET_PRODUCT_WITH_DATE_AVAILABLE } from '../constants/action-types';
import { URL_API } from '../constants/config-api';

export const getProductWithDateAvalaible = (data) => ({
    
    type: PRODUCT_DATE_AVAILABLE_REQUEST,
    payload: {
        url: URL_API + `/mobile/product?date=${data != null ? data.date : ""}`,
        next: GET_PRODUCT_WITH_DATE_AVAILABLE 
    }
});

// {{url}}/product/sales-calendar?date=2019-02-17
// {{url}}/mobile/product?date=2019-02-27
