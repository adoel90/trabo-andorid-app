import { PRODUCT_DETAIL_SELECTED_REQUEST, GET_PRODUCT_DETAIL_SELECTED } from '../constants/action-types';
import { URL_API } from '../constants/config-api';

export const getProductDetail = (data) => ({
    
    type: PRODUCT_DETAIL_SELECTED_REQUEST,
    payload: {
        url: URL_API + `/product/${data.params.code}?date=${data.params.from}&time=${data.params.time}`,
        next: GET_PRODUCT_DETAIL_SELECTED 
    },
    access_token: data.access_token
});

//{{url}}/product/A-09227133?date=2019-02-17&time=05:30 AM