
import { createDrawerNavigator } from 'react-navigation';

// import MyDrawerHomeScreen from '../screens/MyDrawerNotificationsScreen';
// import MyDrawerNotificationsScreen from '../screens/MyDrawerHomeScreen';
import HeaderStack from './HeaderStack';

// createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig) ==> https://reactnavigation.org/docs/en/drawer-navigator.html
export default createDrawerNavigator(
    
    /* RouteConfigs */
    {
        Booking: {
            screen: HeaderStack
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



