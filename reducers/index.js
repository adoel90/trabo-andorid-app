import {combineReducers} from 'redux';
import userReducer from './user';
import loginReducer from './login';
import bookingCalendarReducer from './bookingCalendarReducer';
import bookingProductReducer from './bookingProduct';
import bookingRecentOrderReducer from './bookingRecentOrder';
import bookingProductDateAvailableReducer from './bookingProductDateAvailable';

export default combineReducers({
    login: loginReducer,
    bookingCalendar:  bookingCalendarReducer,
    product: bookingProductReducer,
    recentOrder: bookingRecentOrderReducer,
    productAvailable: bookingProductDateAvailableReducer
    
});

/* 
    const rootReducer = combineReducers({
    export default rootReducer; ==> NOT USED AGAIN !

*/