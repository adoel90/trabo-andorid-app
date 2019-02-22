import React from 'react';
import { Platform, Alert, TouchableHighlight} from 'react-native';
import { createStackNavigator, DrawerActions } from 'react-navigation';
import {Text, View, StyleSheet} from 'react-native';
import BookingDateDetailScreen from '../screens/BookingDateDetailScreen';
import BookingNewFormScreen from '../screens/BookingNewFormScreen';
import BookingPaymentScreen from '../screens/BookingPaymentScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import { LinearGradient } from 'expo';

import TabBarIcon from '../components/TabBarIcon';
import AppStack from './AppStack';

export default createStackNavigator (

    //*RouteConfigs
    {
        HomeHeader:{
            screen: AppStack,
            navigationOptions: ({navigation}) => {
                // const { params = {} } = navigation.state
                return {
                    // header: props => <GradientHeader {...props} />,
                    // header: (props) => <GradientHeader {...props} />,
                    headerLeft: ({ focused }) => (
                        <TouchableHighlight
                            onPress={
                                () => {
                                    // console.log('Wew !');
                                    navigation.dispatch(DrawerActions.toggleDrawer())
                                }
                            }
                        >
                            <Icon 
                                name="menu" 
                                size={26}
                                style={{ marginBottom: -3, marginLeft: 15 }}
                                color="white"
                            />
                          
                        </TouchableHighlight>
                    ),
                  
                    headerStyle: {
                        shadowColor: 'transparent',
                        backgroundColor: '#4855b7',
                        borderBottomWidth: 0,
                        elevation: 0, // Fixed issue : https://github.com/react-navigation/react-navigation/issues/865
                        shadowOpacity: 0
                    },
                }   
            }
        },
        InsideBooking: {
            screen: BookingDateDetailScreen
        },
        BookingNewForm: {
            screen: BookingNewFormScreen
        },
        BookingPayment: {
            screen: BookingPaymentScreen
        }
    },

    //* StackNavigatorConfig
    // { Waiting to explore here... }
  )


  {/* 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    https://docs.expo.io/versions/latest/sdk/linear-gradient/

    <LinearGradient
    colors={['#7D6FE3', '#3121A9']}
    start={[1,1]}//Top & Left; 10% & 10%
    //end={[1,1]}//Bottom & Right; 10% & 10%
    </LinearGradient>
    </View>
*/}




