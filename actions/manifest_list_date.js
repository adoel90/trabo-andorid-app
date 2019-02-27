
import { MANIFEST_LIST_DATE_REQUEST, GET_LIST_DATE_INSIDE_MANIFEST } from '../constants/action-types';
import { URL_API } from '../constants/config-api'

export const getListDateInManifest = (data) => ({

    type: MANIFEST_LIST_DATE_REQUEST,
    payload: {
        url: URL_API + `/manifest/operation-dates/${data.product_code}?date=${data.date}&time=${data.time}`,
        next: GET_LIST_DATE_INSIDE_MANIFEST
    },
    access_token: data.access_token
});

/*

    {{url}}/manifest/operation-dates/A-0921014


*/

/*

    ==> Ini ada parameter "date" & "time"

        {{url}}/manifest/A-09229850?date=2018-08-20&time=12:00 AM


*/