import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import { Toolbar } from 'react-native-material-ui';

export default class ExploreFlexDirection extends React.Component {

  static navigationOptions = {
    title: 'Explore Flex'
    
  };

  render() {
    return (
        <View style={styles.container}>  
            {/** <Text style={styles.headerStyle}>flexDirection: 'row-reverse'</Text>*/}
            {/** */}
            

            {/* 
              
              *flexDirection

              <View style={[{flexDirection: 'column-reverse'}, styles.elementsContainer]}>
                <View style={{width: 50, height: 50, backgroundColor: '#EE2C38'}} />
                <View style={{width: 50, height: 50, backgroundColor: '#FAA030'}} />
                <View style={{width: 50, height: 50, backgroundColor: '#32B76C'}} />
              </View>
          
            */}

              {/** 
                
              *Flex: 1. 2. 3 - The space in your layout Apps ! 

              <View style={[{flex: 1}, styles.elementsContainer]}>
                <View style={{flex:1, backgroundColor: '#EE2C38'}} />
                <Text>Wew</Text>
                <View style={{flex:2, backgroundColor: '#FAA030'}} />
                <View style={{flex: 3, backgroundColor: '#32B76C'}} />
              </View>

              */}


              {/* Justify Content : flex-start, center, flex-end, space-between, space-around*/}

            
              <View style={[{flexDirection: 'row', justifyContent: 'space-around'}, styles.elementsContainer]}>
                <View style={{width: 50, height: 50, backgroundColor: '#EE2C38'}} />
                <View style={{width: 50, height: 50, backgroundColor: '#FAA030'}} />
                <View style={{width: 50, height: 50, backgroundColor: '#32B76C'}} />
              </View>
           
        </View>

     
    );
  }
}


const styles = StyleSheet.create({
  // container: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  // }
  container: {
      marginTop: 48,
      flex: 1
  },
  headerStyle: {
      fontSize: 24,
      textAlign: 'center',
      fontWeight: '100',
      marginBottom: 24
  },
  elementsContainer: {
      flex: 1,
      backgroundColor: '#ecf5fd',
      marginLeft: 24,
      marginRight: 24,
      marginBottom: 24
  }
});
