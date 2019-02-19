import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import { WebBrowser } from 'expo';


export default class HomeDetailScreen extends React.Component {

  static navigationOptions = {
    title: 'User Detail'
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'ID')
    const otherParam = navigation.getParam('otherParam', 'Default value');

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>Item Id : { JSON.stringify(itemId) }</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      </View>
    );
  }
}
/*
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

*/



