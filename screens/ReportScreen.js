import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import { Toolbar } from 'react-native-material-ui';

export default class ReportScreen extends React.Component {

  static navigationOptions = {
    title: 'Report'
    
  };

  render() {
    return (
      <View style={styles.container}>   


        {/* 
        <Toolbar
          leftElement="menu"
          centerElement="Searchable"
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
          }}
          rightElement={{
              menu: {
                  icon: "more-vert",
                  labels: ["item 1", "item 2"]
              }
          }}
          onRightElementPress={ (label) => { console.log(label) }}
        />

        */}
      </View>

     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    marginTop: 0,
  }
});