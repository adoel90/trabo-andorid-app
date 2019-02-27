import {combineReducers} from 'redux';
import userReducer from './user';
import loginReducer from './login';
import bookingCalendarReducer from './bookingCalendarReducer';
import bookingProductReducer from './bookingProduct';
import bookingRecentOrderReducer from './bookingRecentOrder';
import bookingProductDateAvailableReducer from './bookingProductDateAvailable';
import bookingProductDetailReducer from './bookingProductDetail';
import bookingCalculatePriceReducer from './Payment/bookingPostCalculatePrice';
import paymentCashReducer from './Payment/paymentCash';
import paymentTransferBankReducer from './Payment/paymentTransferBank';
import paymentCreditCardReducer from './Payment/paymentCreditCard';
import paymentDepositCashReducer from './Payment/paymentDepositCash';
import paymentDepositTransferReducer from './Payment/paymentDepositTransferBank';

import manifestListAvailableReducer from './Manifest/manifestListAvailable';

export default combineReducers({
    login: loginReducer,
    bookingCalendar:  bookingCalendarReducer,
    product: bookingProductReducer,
    recentOrder: bookingRecentOrderReducer,
    productAvailable: bookingProductDateAvailableReducer,
    productDetail: bookingProductDetailReducer,
    calculatePrice: bookingCalculatePriceReducer,
    paymentCash: paymentCashReducer,
    paymentTransfer: paymentTransferBankReducer,
    paymentCreditCard: paymentCreditCardReducer,
    paymentDepositCash: paymentDepositCashReducer,
    paymentDepositTransfer:paymentDepositTransferReducer,
    manifestAvailable: manifestListAvailableReducer
    
});

/* 
    const rootReducer = combineReducers({
    export default rootReducer; ==> NOT USED AGAIN !

*/