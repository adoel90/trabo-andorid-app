

import { MANIFEST_LIST_REQUEST, GET_MANIFEST_LIST } from '../constants/action-types';
import { URL_API } from '../constants/config-api'

export const getListManifestAvailable = (data) => ({

    type: MANIFEST_LIST_REQUEST,
    payload: {
        url: URL_API + `/manifest/product/available`,
        next: GET_MANIFEST_LIST
    },
    access_token: data.access_token
});


// {{url}}/manifest/product/available?