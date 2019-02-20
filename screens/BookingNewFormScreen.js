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

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
const numeral = require('numeral');

import Icon from 'react-native-vector-icons/MaterialIcons'
import styled, {ThemeProvider, withTheme} from 'styled-components/native'
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { Card } from 'react-native-material-ui';
import { TextField } from 'react-native-material-textfield';
import PhoneInput from 'react-native-phone-input'

import TextDate from '../components/new_booking/TextDate';
import TextGeneral from '../components/TextGeneral';
import TextGeneralBold from '../components/TextGeneralBold';
import IconGeneral from '../components/IconGeneral';
import ProductDestination from '../components/booking/ProductDestination';

import { getProductDetail } from '../actions/booking_product_detail';

class BookingNewFormScreen extends React.Component {

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
    this.handlePostBookingForm = this.handlePostBookingForm.bind(this);

    this.state = {
        phone: '',
        name:'',
        email:'',
        specialnotes:'',
        referral:'',
        komenk:'',
        timeProduct:'',
        dateProduct:'',
        codeProduct: '',
        listPax: {}, 
        amountPaxPriceAdultId:null,
        packet:{},
        listPackages:{},
        listAdditionalProductsState: {}
    }

  }

  componentDidMount(){
    const { navigation, action } = this.props;
    const paramsFromBookingDateDetail = navigation.getParam('data');
    // console.log(paramsFromBookingDateDetail);

    this.setState({
      ...this.state,
      timeProduct: paramsFromBookingDateDetail.time,
      dateProduct: paramsFromBookingDateDetail.from,
      codeProduct: paramsFromBookingDateDetail.code
    })


    action.getProductDetail(paramsFromBookingDateDetail);
        
  }

  componentDidUpdate(prevProps){
  
    const { navigation, productDetail } = this.props;
    // const { listPackages } = this.state;

    if(prevProps.productDetail != productDetail){

      if(productDetail.listPackage != null || productDetail.listPackage.length != null){
        this.setState({
          ...this.state,
          listPackages: productDetail.listPackage
        })
      };

      if(productDetail.listAdditionalProducts != null || productDetail.listAdditionalProducts.length != null){
        this.setState({
          ...this.setState,
          listAdditionalProductsState: productDetail.listAdditionalProducts
        }, () => {
          console.log(this.state.listAdditionalProductsState);
          
        })
      }
 
     
  
    };
  };

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

  handlePostBookingForm = () => {
    Alert.alert('Post Booking ...')
  }

  render() {

    const { navigation, productDetail } = this.props;
    let { phone, 
          name, 
          email, 
          referral,
          komenk,
          specialnotes,
          timeProduct,
          dateProduct,
          listPackages,
          listAdditionalProductsState
          
        } = this.state;
  
    return (
      <View>   
        <ScrollView>
          
          {/* #1 */}
          <CardView> 
              <Row size={12} style={{margin:0, padding:0}}>
                  <Col sm={12} style={{margin: 0, padding: 5}}>
                      <ProductDestination value={productDetail.nameOfProduct != null ? productDetail.nameOfProduct : "Where is your Destination"} fontSize="28px" />
                  </Col>
              </Row>

              <Row size={12}>
                  <Col sm={6} style={{padding: 5}}>
                      <Text color="gray" style={{fontFamily: 'TraboRobotoMedium'}}> Date</Text>
                  </Col>
                  <Col sm={6} style={{padding: 5}}>
                      <Text color="gray" style={{fontFamily: 'TraboRobotoMedium'}} > Time</Text>
                  </Col>
              </Row>
              <Row size={12}>
                  <Col sm={6} style={{padding: 5}}>
                      <TextDate value={moment(dateProduct).format('ddd, DD MMM YYYY')} fontSize="17px" />
                  </Col>
                  <Col sm={6} style={{padding: 5}}>
                      <TextDate value={timeProduct} fontSize="17px" />
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
                        initialCountry="US"
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
            
            {/** Adults - var string = numeral(1000).format('0,0'); */}
            <Row size={12} style={{margin: 12}}>
              <Col sm={8}>
                <TextGeneral 
                  value={ productDetail.listPaxAdult ? "Adults ( IDR " +  numeral(productDetail.listPaxAdult.amount).format('0,0') + " )" : "..."} 
                  fontSize="17px" />
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
                <TextGeneral value={productDetail.listPaxChild ? "Children ( IDR " + numeral(productDetail.listPaxChild.amount).format('0,0') + " )" : "..."} fontSize="17px" />
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

            {/** Toddler === INFANT */}
            <Row size={12} style={{margin: 12}}>
              <Col sm={8}>
                <TextGeneral value={productDetail.listPaxInfant ? "Children ( IDR " + numeral(productDetail.listPaxInfant.amount).format('0,0') + " )" : "..."} fontSize="17px" />
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
            
            {
              listPackages.length != null ? listPackages.map((data, i) => {
                return (
                  <Row key={i} size={12} style={{margin: 12}} > 
                    <Text style={{fontFamily: 'TraboRobotoMedium'}} color="gray">Package {"\n"}{"\n"}</Text>
                    <Text style={{fontFamily: 'TraboRobotoMedium', marginBottom:10}} color="gray">( Maximum Pax per booking = {data.maximum} ) </Text>
                    
                    <Col sm={8}>
                      <TextGeneral value={data.pax_type} fontSize="17px" />
                      <TextGeneral value={"( IDR " + numeral(data.amount).format('0,0') + " )"} fontSize="14px" />
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

                    <Text></Text>
                    <Col sm={9}>
                      <TextGeneral value={" Age " + data.age_from + " - " + data.age_to } fontSize="11px" />
                    </Col>
                    <Col sm={3}>
                      <TextGeneral value={"Minimum " + data.minimum + " PAX"} fontSize="12px" style={{color: 'black'}}/>
                    </Col>
                  </Row>
                )
              }) : null
            }
            

            {/**
            

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

             */}
          </CardView>

          {/* #5 ADDITIONAL PRODUCT*/}
          <CardView>
            <Text style={{fontFamily: 'TraboRobotoMedium', margin: 10}} color="gray">Additional Product</Text>

            {
              listAdditionalProductsState.length != null ? listAdditionalProductsState.map((data, i) => {
                console.log("Llist Additional Product State : ", data);
                
                return (
                  <Row key={i} size={12} style={{marginLeft: 12}}>
                    <Col sm={12}>
                      <TextGeneral value={data.name} fontSize="18px" />
                    </Col>
                    {
                      // In here, if no error, i put list details in here
                    }
                  </Row>
                )

              }) : null
            }

             {/* 
              <Text style={{fontFamily: 'TraboRobotoMedium', margin: 10}} color="gray">Additional Product</Text>

              <Row size={12} style={{marginLeft: 12}}>
                <Col sm={12}>
                  <TextGeneral value="Cabin" fontSize="18px" />
                </Col>
              </Row>
              
              <Row size={12} style={{margin: 12}}>
                <Col sm={8}>
                  <TextGeneral value="Seahorse Standard Cabin" fontSize="17px" />
                  <TextGeneral value="IDR 4000000" fontSize="14px" />
                  <TextGeneral value="Remark: Twin 2 single" fontSize="12px" />
                  <TextGeneral value="Maximum per booking = 2" fontSize="12px" />
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

            */}
          </CardView>
          
          {/* #6 CANCELLATION POLICY*/}
          <CardView>
            <Text style={{fontFamily: 'TraboRobotoMedium', margin: 10}} color="gray">Cancellation Policy</Text>
            <Row size={12} style={{margin: 12}}>
              <Col sm={10}>
                <TextGeneral value="50% is the cancellation amount 15 days before travel date" fontSize="17px" />
                <TextGeneral value="80% is the cancellation amount 7 days before travel date" fontSize="17px" />
                <TextGeneral value ="100% is the cancellation amount 3 days before travel date" fontSize="17px" />
              </Col>
            </Row>
          </CardView>

          {/* #6 ADDITIONAL DESCRIPTION */}
          <CardView>
            <Text style={{fontFamily: 'TraboRobotoMedium', margin: 10}} color="gray">Additional Description</Text>
            <Row size={12} style={{margin: 12}}>
              <Col sm={12}>
                <TextGeneral value="Raja Ampat - 8 Days Day One : Sorong" fontSize="18px" />
                <TextGeneral value="Welcome to Dampier Straits areas. We will have check dive at Mioskon. Monitoring your buoyancy skill and make yourself comfortable with water and your gear. For some of you who has not dive for a long time, check dive is always a good way to refresh your skill. We have many excellent dive spot around the area. Cape Kri is a great start of the day with most fish and coral species accounted on a single dive site. Truly dive sites like Cape Kri, of Dr. Allen’s 30-year lifetime record fish count. Cape Kri has probably the largest concentration of big fish of any sites in northern Raja Ampat. Mioskon, Cape Kri and Mike’s point are among the sites for day two.
                " fontSize="17px" />
              
              </Col>
            </Row>
          </CardView>

          {/** #7 SPECIAL NOTES */}
          <CardView>
            <Row size={12}>
              <Col sm={12}>
                <TextField
                    label='Special Notes'
                    value={specialnotes}
                    // labelPadding={3}
                    labelTextStyle={{fontFamily:'TraboRobotoMedium'}}
                    onChangeText={ (specialnotes) => this.setState({ specialnotes }) }
                    animationDuration={150}
                    // style={{marginLeft:30}}
                    containerStyle={{marginLeft:7}}
                />  
              </Col>
            </Row>
          </CardView>

          {/** #8 REFERRAL & KOMENK */}
          <CardView>
            <Row size={12}>
              <Col sm={12}>
                <TextField
                    label='Referral'
                    value={referral}
                    // labelPadding={3}
                    labelTextStyle={{fontFamily:'TraboRobotoMedium'}}
                    onChangeText={ (referral) => this.setState({ referral }) }
                    animationDuration={150}
                    // style={{marginLeft:30}}
                    containerStyle={{marginLeft:7}}
                />  
              </Col>
              <Col sm={12}>
                <TextField
                    label='Comments'
                    value={komenk}
                    // labelPadding={3}
                    labelTextStyle={{fontFamily:'TraboRobotoMedium'}}
                    onChangeText={ (komenk) => this.setState({ komenk }) }
                    animationDuration={150}
                    // style={{marginLeft:30}}
                    containerStyle={{marginLeft:7}}
                />  
              </Col>
            </Row>

            <Row size={12}>
              <Col sm={7}><Text></Text></Col>
              <Col sm={5} style={{marginRight: 10}}>
                <Button 
                  style={{marginTop: 17, marginBottom: 10}}
                  color="#f16724"
                  title="PROCEED TO PAYMENT" 
                  // onPress={(e) => this.handlePostBookingForm(e, data)}>
                  onPress={(e) => this.handlePostBookingForm(e)}>
                </Button>
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

const mapStateToProps = (state) => ({
  login: state.login.data,
  productDetail: state.productDetail.data
});

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators({getProductDetail}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingNewFormScreen);