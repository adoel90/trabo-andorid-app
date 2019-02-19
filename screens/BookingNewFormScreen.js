import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableHighlight,
  StyleSheet,
  Alert,
  TextInput,
  CheckBox,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import styled, {ThemeProvider, withTheme} from 'styled-components/native'
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { Card } from 'react-native-material-ui';
import { TextField } from 'react-native-material-textfield';
import PhoneInput from 'react-native-phone-input'

import TextDate from '../components/new_booking/TextDate';
import TextGeneral from '../components/TextGeneral';
import IconGeneral from '../components/IconGeneral';

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

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
        phone: '',
        name:'',
        email:''
    }

  }

  handleInputChange = (e, data ) => {

    e.preventDefault();

    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({

      ...this.state,
        [data]: {
              ...this.state[data],
              [name]: value
        }
    });
  };

  componentDidUpdate(prevProps){
  
    const { navigation } = this.props;
    const dateParams = navigation.getParam('data');
  };

  render() {

    const { navigation } = this.props;
    let { phone, name, email} = this.state;
  
    return (
      <View>   
        <ScrollView>
          
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
                      // labelPadding={3}
                      labelTextStyle={{fontFamily:'TraboRobotoMedium'}}
                      onChangeText={ (name) => this.setState({ name }) }
                      animationDuration={150}
                      // style={{marginLeft:30}}
                      containerStyle={{marginLeft:7}}
                  />  
                </Col>
              </Row>
              <Row size={12}>
                  <Col sm={12}>
                      {/* <TextGeneral value="Phone Number" fontSize="14" style={{marginLeft:10, marginBottom: 10, paddingLeft: 10}}/> */}
                      <PhoneInput 
                        ref='phone'
                        style={{margin:5}}
                        initialCountry="IDN"
                        value=" Phone Number"
                      
                      />
                  </Col>
              </Row>
              <Row size={12}>
                <Col sm={12}>
                  <TextField
                      label='Email'
                      value={email}
                      // labelPadding={3}
                      labelTextStyle={{fontFamily:'TraboRobotoMedium'}}
                      onChangeText={ (email) => this.setState({ email }) }
                      // onChangeText={(email) => this.handleInputChange({email})}
                      animationDuration={150}
                      containerStyle={{marginLeft:7}}
                  />  
                </Col>
              </Row>
              <Row size={12}>
                <Col sm={1}>
                  <CheckBox style={{margin:5}}/>
                </Col>
                <Col sm={11}>
                  <Text style={{fontFamily: 'TraboRobotoMedium', marginTop: 10, marginLeft: 5}}>
                     Subscribe this email to company mailing list
                  </Text>
                </Col>
              </Row>
              
          </CardView>

          {/* #3 TICKETS */}
          <CardView>
            
            <Text style={{fontFamily: 'TraboRobotoMedium', margin: 10}} color="gray">Tickets</Text>
            
            {/** Adults */}
            <Row size={12} style={{margin: 12}}>
              <Col sm={8}>
                <TextGeneral value="Adults (IDR 450000)" fontSize="17px" />
              </Col>
              <Col sm={1}>
                <IconGeneral name="remove-circle" />
              </Col>
              <Col sm={2}>
                <Text style={{marginLeft: 17, fontFamily: 'TraboRobotoMedium'}}>1</Text>
              </Col>
              <Col sm={1}>
                <IconGeneral name="control-point" />
              </Col>
            </Row>

            {/** Children */}
            <Row size={12} style={{margin: 12}}>
              <Col sm={8}>
                <TextGeneral value="Children (IDR 300000)" fontSize="17px" />
              </Col>
              <Col sm={1}>
                <IconGeneral name="remove-circle" />
              </Col>
              <Col sm={2}>
                <Text style={{marginLeft: 17, fontFamily: 'TraboRobotoMedium'}}>0</Text>
              </Col>
              <Col sm={1}>
                <IconGeneral name="control-point" />
              </Col>
            </Row>

            {/** Toddler */}
            <Row size={12} style={{margin: 12}}>
              <Col sm={8}>
                <TextGeneral value="Children (IDR 300000)" fontSize="17px" />
              </Col>
              <Col sm={1}>
                <IconGeneral name="remove-circle" />
              </Col>
              <Col sm={2}>
                <Text style={{marginLeft: 17, fontFamily: 'TraboRobotoMedium'}}>0</Text>
              </Col>
              <Col sm={1}>
                <IconGeneral name="control-point" />
              </Col>
            </Row>
          </CardView>

          {/* #4 PACKAGE*/}
          <CardView>
            <Text style={{fontFamily: 'TraboRobotoMedium', margin: 10}} color="gray">Package (Maximum Pax per booking = 20)</Text>

            <Row size={12} style={{margin: 12}}>
              <Col sm={8}>
                <TextGeneral value="Raja Ampat South-North" fontSize="17px" />
                <TextGeneral value="IDR 5000000" fontSize="14px" />
              </Col>
              <Col sm={1}>
                <IconGeneral name="remove-circle" />
              </Col>
              <Col sm={2}>
                <Text style={{marginLeft: 17, fontFamily: 'TraboRobotoMedium'}}>0</Text>
              </Col>
              <Col sm={1}>
                <IconGeneral name="control-point" />
              </Col>
            </Row>

            <Row size={12} style={{margin: 12}}>
              <Col sm={9}>
                <TextGeneral value="Age 15 - 50" fontSize="11px" />
              </Col>
              <Col sm={3}>
                <TextGeneral value="Minimum 2 PAX" fontSize="12px" style={{color: 'black'}}/>
              </Col>
            </Row>
          </CardView>

          {/* #5 ADDITIONAL PRODUCT*/}
          <CardView>
            <Text style={{fontFamily: 'TraboRobotoMedium', margin: 10}} color="gray">Additional Product</Text>

            <Row size={12} style={{margin: 12}}>
              <Col sm={8}>
                <TextGeneral value="Cabin" fontSize="17px" />
              </Col>
            </Row>
          </CardView>


        </ScrollView>
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