/**
 * 
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
// import RNRestart from 'react-native-restart';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import Reactotron from './ReactotronConfig';

// Immediately reload the React Native Bundle


import createSagaMiddleware from 'redux-saga'
const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

import rootReducer from './reducers';

//*BOOKING & PAYMENT
import userMiddleware from './middleware/user';
import loginMiddleware from './middleware/login';
import recentOrderMiddleware from './middleware/booking_recent';
import bookingProductMiddleware from './middleware/booking_product';
import bookingProductDateAvailableMiddleware from './middleware/booking_product_date_available';
import bookingProductDetailMiddleware from './middleware/booking_product_detail';
// import postFormBookingMiddleware from './middleware/booking_post';
import postBookingCalculatePriceMiddleware from './middleware/booking_post_calculate_price';
import paymentCashMiddleware from './middleware/payment_cash';
import paymentTransferBankMiddleware from './middleware/payment_transfer_bank';
import paymentTransferCreditCardMiddleware from './middleware/payment_credit_card';
import paymentDepositCashMiddleware from './middleware/payment_deposit_cash';
import paymentDepositTransferBankMiddleware from './middleware/payment_deposit_transfer';
import manifestListDateMiddleware from './middleware/manifest_list_date';

//*MANIFEST
import manifestListMiddleware from './middleware/manifest_list_available';

import { rootSaga } from './middleware-saga/index';

const store = Reactotron.createStore(rootReducer, applyMiddleware(
                                                      // logMiddleware,
                                                      sagaMiddleware,
                                                      userMiddleware, 
                                                      loginMiddleware, 
                                                      bookingProductMiddleware,
                                                      recentOrderMiddleware,
                                                      bookingProductDateAvailableMiddleware,
                                                      bookingProductDetailMiddleware,
                                                      // postFormBookingMiddleware,
                                                      postBookingCalculatePriceMiddleware,
                                                      paymentCashMiddleware,
                                                      paymentTransferBankMiddleware,
                                                      paymentTransferCreditCardMiddleware,
                                                      paymentDepositCashMiddleware,
                                                      paymentDepositTransferBankMiddleware,
                                                      manifestListMiddleware,
                                                      manifestListDateMiddleware
                                                    ));
                                                      
sagaMiddleware.run(rootSaga);

import {Platform, StyleSheet, Text, View} from 'react-native';
import TraboApp from './navigation/TraboApp'

// if(__DEV__) {
//   import('./ReactotronConfig.js').then(() => console.log('Reactotron Configured'))
// }

// RNRestart.Restart();


type Props = {};

export default class App extends React.Component {
  render() {

    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={this._loadResourcesAsync}
    //       onError={this._handleLoadingError}
    //       onFinish={this._handleFinishLoading}
    //     />
    //   );
      
    // } else {
    //   return (
    //     <View style={styles.container}>
    //       {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    //       {/* <AppNavigator /> */}
    //       <Provider store={store}>
    //         <TraboApp />
    //       </Provider>
    //     </View>
    //   );
    // }

    return (
      <View style={styles.container}>
        <Provider store={store}>
          <TraboApp />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#fff',
  }
});
