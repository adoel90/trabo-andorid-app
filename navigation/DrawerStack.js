
import { createDrawerNavigator } from 'react-navigation';
import HeaderStack from './HeaderStack';
import BookingPaymentScreen from '../screens/Payment/BookingPaymentScreen';
import ExploreFlexDirection from '../screens/ExploreFlexDirection';
import ExploreResponsive from '../screens/ExploreResponsive';

// createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig) ==> https://reactnavigation.org/docs/en/drawer-navigator.html
export default createDrawerNavigator(
    
    /* RouteConfigs */
    {
        Booking: {
            screen: HeaderStack
        },
        Explore: {
            screen: ExploreFlexDirection
        },
        ExploreResponsive: {
            screen: ExploreResponsive
        },
        BookingPayment: {
            screen: BookingPaymentScreen
        }
    },

    /* DrawerNavigatorConfig */
    // { Still empty...}
);



/* Old Code */

// export default createDrawerNavigator({
//     Home: {
//         screen: MyDrawerHomeScreen,
//     },
//     NotificationDrawer: {
//         screen: MyDrawerNotificationsScreen,
//     },
// });



