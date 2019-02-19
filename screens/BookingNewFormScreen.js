import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableHighlight,
  StyleSheet,
  Alert,
  TextInput,
  CheckBox
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import styled, {ThemeProvider, withTheme} from 'styled-components/native'
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { Card } from 'react-native-material-ui';
import { TextField } from 'react-native-material-textfield';
import PhoneInput from 'react-native-phone-input'

import TextDate from '../components/new_booking/TextDate';
import TextGeneral from '../components/TextGeneral';


import ProductDestination from '../components/booking/ProductDestination';

export default class BookingNewFormScreen extends React.Component {

  static navigationOptions = {
    title: 'New Booking',
    headerTintColor: 'white',
    headerStyle: {
      shadowColor: 'transparent',
      backgroundColor: '#4855b7',
      fontFamily:'TraboRobotoMedium',
    
    },
    headerTitleStyle:{
      fontFamily:'TraboRobotoMedium',
      fontWeight:'200'
    }

    
  };

  constructor(props){
    super(props);

    this.state = {
        phone: '',
        name:'',
        email:''
    }

  }

  componentDidUpdate(prevProps){
  
    const { navigation } = this.props;
    const dateParams = navigation.getParam('data');
    
  };



  render() {
    const { navigation } = this.props;
    let { phone, name, email} = this.state;
  
    return (
      <View>   
        
        {/* #1 */}
        <CardView> 
            <Row size={12} style={{margin:0, padding:0}}>
                <Col sm={12} style={{margin: 0, padding: 5}}>
                    <ProductDestination value="Ananta Riding Club" fontSize="28px" />
                </Col>
            </Row>

            <Row size={12}>
                <Col sm={6} style={{padding: 5}}>
                    <Text color="gray" style={{fontFamily: 'TraboRobotoMedium'}}> Date</Text>
                </Col>
                <Col sm={6} style={{padding: 5}}>
                    <Text color="gray" style={{fontFamily: 'TraboRobotoMedium'}} >Time</Text>
                </Col>
            </Row>
            <Row size={12}>
                <Col sm={6} style={{padding: 5}}>
                    <TextDate value="Sun, 18 Feb 2019" fontSize="17px" />
                </Col>
                <Col sm={6} style={{padding: 5}}>
                    <TextDate value="09.00" fontSize="17px" />
                </Col>
            </Row>
        </CardView>

        {/* #2 */}
        <CardView>
            <Row size={12}>
              <Col sm={12}>
                <TextField
                    label='Name'
                    value={name}
                    labelPadding={3}
                    labelTextStyle={{fontFamily:'TraboRobotoMedium'}}
                    onChangeText={ (name) => this.setState({ name }) }
                    animationDuration={150}
                    style={{marginLeft:30}}
                />  
              </Col>
            </Row>
            <Row size={12}>
                <Col sm={12}>
                    <PhoneInput ref='phone'/>
                </Col>
            </Row>
            <Row size={12}>
              <Col sm={12}>
                <TextField
                    label='Email'
                    value={email}
                    labelPadding={3}
                    labelTextStyle={{fontFamily:'TraboRobotoMedium'}}
                    onChangeText={ (email) => this.setState({ email }) }
                    animationDuration={150}
                />  
              </Col>
            </Row>
            <Row size={12}>
              <Col sm={1}>
                <CheckBox />
              </Col>
              <Col sm={11}>
                <Text style={{fontFamily: 'TraboRobotoMedium', marginTop:10}}>
                  Subscribe this email to company mailing list
                </Text>
              </Col>
            </Row>
            
        </CardView>

        {/* #3*/}
        <CardView>
          <Text style={{fontFamily: 'TraboRobotoMedium', marginBottom: 10}} color="gray">Tickets</Text>

          <Row size={12}>
            <Col sm={6}>
              <TextGeneral value="Adults (IDR 450000)" fontSize="17px" />
            </Col>
            <Col sm={2}></Col>
            <Col sm={2}></Col>
            <Col sm={2}></Col>
          </Row>
        </CardView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    margin: 0,
  }
});

const SalesCalendarResultView = styled.View`
  background: transparent;
  padding: 22px;
`

const CardView = styled.View`
  background: white;
  border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
  margin-left: 0;
  margin-right: 0;
  margin-top: 4;
  margin-bottom:7; 
`