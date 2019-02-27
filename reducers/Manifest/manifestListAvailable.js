import { GET_MANIFEST_LIST} from '../../constants/action-types';

const initialState = {
    loading : false,
    list : [],
    data: {}
};

const manifestListAvailableReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_MANIFEST_LIST.PENDING:
            return{
                ...state,
                loading: true
            }

        case GET_MANIFEST_LIST.SUCCESS:
            return{
                ...state,
                loading: false,
                data: action.payload
            }

        case GET_MANIFEST_LIST.ERROR:
            return {
                ...state,
                loading: false
            }
        
        default:
            break;
    }

    return state;
}

export default manifestListAvailableReducer;
