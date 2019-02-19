import React from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Text
  } from 'react-native';

class AuthenticationLoaderScreen extends React.Component{
  constructor(props){
    super(props);

    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    // const accessToken = await AsyncStorage.getItem('accessToken');
    // this.props.navigation.navigate(accessToken ? 'Drawer' : 'Authentication');
    this.props.navigation.navigate('Authentication');

  }
  
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        <Text></Text>
        <Text>Loading...</Text>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthenticationLoaderScreen;
