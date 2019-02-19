import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
// import AppStack from './AppStack'; // App Stack is called by HeaderStack
import DrawerStack from './DrawerStack';
import HeaderStack from './HeaderStack';
import AuthenticationStack from './AuthenticationStack';
import AuthenticationLoaderScreen from '../screens/AuthenticationLoaderScreen';
// import HomeScreen from '../screens/HomeScreen';
// import ReportScreen from '../screens/ReportScreen';
// import BookingDateDetailScreen '../screens/BookingDateDetailScreen'
// import BookingComponentStack from './BookingComponentStack'; 

export default createAppContainer(createSwitchNavigator({
 
    AuthLoader: AuthenticationLoaderScreen,
    Authentication: AuthenticationStack,
    Header: HeaderStack,
    Drawer: DrawerStack,
    // BookingScreenComponent: BookingComponentStack
    // InsideBooking: ReportScreen
    // Main: MainTabNavigator
  },
  {
    initialRouteName: 'AuthLoader'
  }
));
