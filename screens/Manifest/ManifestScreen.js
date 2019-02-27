import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  ScrollView
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// const AlphabetListView = require('react-native-alphabetlistview');
// import AlphabetListView from 'react-native-alphabetlistview';

import SectionListContacts from 'react-native-sectionlist-contacts'
import {Column as Col, Row} from 'react-native-flexbox-grid';
import styled from 'styled-components/native'
import moment from 'moment';

import { getListManifestAvailable } from '../../actions/manifest_list_available';

class ManifestScreen extends React.Component {

  static navigationOptions = {

    title: 'Manifest'

  };

  constructor(props){

    super(props);
    this.handlePickItemManifestProduct = this.handlePickItemManifestProduct.bind(this);

    let dataTestDummy = [
        {
            "code": "A-09211828",
            "name": "Tour in lombok 2"
        },
        {
            "code": "A-09213324",
            "name": "TOUR IN LOMBOK"
        }
    ];

    this.state = {
        dataArray: dataTestDummy,
        listManifest : {}
    }
  };

  componentDidMount(){

  };

  componentDidUpdate(prevProps){
    const { manifestAvailable } = this.props;
    
    if(prevProps.manifestAvailable != manifestAvailable){
      if(manifestAvailable.length != null){
        this.setState({
          ...this.state,
          listManifest: manifestAvailable
        })
      };
    };
  };

  handlePickItemManifestProduct = (item, i) => {
    console.log("Data wew : ", item);
    this.props.navigation.navigate('ManifestDetail');
  }

  render() {

    const { } = this.state;

    return (

      //{/*  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>   */}
      <View>
        <ScrollView>
        
        <SectionListContacts
            ref={s=>this.sectionList=s}
            // sectionListData={this.state.dataArray}
            sectionListData= {this.state.listManifest.length != null ? this.state.listManifest : this.state.dataArray}
            initialNumToRender={this.state.listManifest.length != null ? this.state.listManifest.length : this.state.dataArray.length}
            showsVerticalScrollIndicator={false}
            otherAlphabet="#"
            showAlphabet={false}
            sectionHeaderTextStyle={{fontFamily: 'TraboRobotoMedium'}}
            sectionItemTextStyle={{fontFamily:'TraboRobotoMedium'}}
            letterTextStyle={{fontFamily:'TraboRobotoMedium'}}
            sectionHeight={102}
            sectionHeaderHeight={60}
            // sectionItemViewStyle={{margin:30}}// Styling Card "Data"
            sectionItemViewStyle={{marginLeft:12}}// Styling Card "Data"
            SectionListClickCallback={ (item, i) => this.handlePickItemManifestProduct(item, i)}
        />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state,
  manifestAvailable: state.manifestAvailable.data
});

const mapDispatchToProps = (dispatch) => ({

  action: bindActionCreators({}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ManifestScreen);

