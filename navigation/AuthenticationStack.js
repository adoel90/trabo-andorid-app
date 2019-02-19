import { createStackNavigator } from 'react-navigation';

import SignInScreen from '../screens/SignInScreen';
// import SettingsScreen from '../screens/SettingsScreen';


const AuthenticationStack = createStackNavigator({
    SignIn : SignInScreen,
    // Other: SettingsScreen,
    
});

export default AuthenticationStack;