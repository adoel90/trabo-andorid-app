
import { createDrawerNavigator } from 'react-navigation';
import HeaderStack from './HeaderStack';
import BookingPaymentScreen from '../screens/Payment/BookingPaymentScreen';
import BookingPaymentCreditCard from '../screens/Payment/BookingPaymentCreditCard';
import ExploreFlexDirection from '../screens/ExploreFlexDirection';
import ExploreResponsive from '../screens/ExploreResponsive';

//*MANIFEST
import ManifestDetailScreen from '../screens/Manifest/ManifestDetailScreen';


// createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig) ==> https://reactnavigation.org/docs/en/drawer-navigator.html
export default createDrawerNavigator(
    
    /* RouteConfigs */
    {
        Booking: {
            screen: HeaderStack
        },
        // Explore: {
        //     screen: ExploreFlexDirection
        // },
        // ExploreResponsive: {
        //     screen: ExploreResponsive
        // },
        BookingPayment: {
            screen: BookingPaymentScreen
        },
        BookingPaymentCredit: {
            screen: BookingPaymentCreditCard
        },
        //*MANIFEST
        ManifestDetail: {
            screen: ManifestDetailScreen
        }

    },

    /* DrawerNavigatorConfig */
    // { Still empty...}
);




