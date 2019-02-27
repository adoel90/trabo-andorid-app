import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableHighlight,
  StyleSheet,
  Alert,
  AsyncStorage,
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

import IconGeneralInActive from '../components/IconGeneralnActive';
import TextDate from '../components/new_booking/TextDate';
import TextGeneral from '../components/TextGeneral';
import TextGeneralBold from '../components/TextGeneralBold';
import IconGeneral from '../components/IconGeneral';
import ProductDestination from '../components/booking/ProductDestination';

import { getProductDetail } from '../actions/booking_product_detail';
import { postFormBooking } from '../actions/booking_post';

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
    this.increment = this.increment.bind(this);
    this.decrease = this.decrease.bind(this);

    this.state = {
        phone: '',
        name:'',
        email:'',
        
        referral:'',
        komenk:'',
        timeProduct:'',
        dateProduct:'',
        codeProduct: '',
        listPax: {}, 
        amountPaxPriceAdultId:null,
        packet:{},
        
        listPackagesId:{},
        listCabinsState:{},
        listEntrances:{},
        

        //Interface
        maxTotalClicks: 10,
        totalAdult: 1,
        totalChildren: 0,
        totalChildrenInfant: 0,
        totalAmount: 0,

        //Phone State
        valid: "",
        type: "",
        value: "",

        //Addtional Product Version-2
        listPackages:{},
        daftarAdditionalProduct: {},
        listDescription:{},
        listDescriptionWithListPax: {},
        specialnotes:'',
        accessToken:'',

        //About Additional Product Logic
        multiplicationAmountAdditionalProductWithQuantity:'',
        quantityAdditionalProduct:'',
        amountPerUnitAdditionalProductWithId: [],

        //About Package/Packet Logic
        amountPerUnitPackagePacketWithId:[]
    }

  }

  componentDidMount(){
    const { navigation, action } = this.props;
    const paramsFromBookingDateDetail = navigation.getParam('data');
    const accessTokenMobile = navigation.getParam('access_token')
    // console.log(paramsFromBookingDateDetail);

    this.setState({
      ...this.state,
      timeProduct: paramsFromBookingDateDetail.time,
      dateProduct: paramsFromBookingDateDetail.from,
      codeProduct: paramsFromBookingDateDetail.code
    })

    let data = {
      params: paramsFromBookingDateDetail,
      access_token: accessTokenMobile
    };

    action.getProductDetail(data);  
  };

  componentDidUpdate(prevProps){
  
    const { navigation, productDetail } = this.props;

    if(prevProps.productDetail != productDetail){
      if(productDetail.listAdditionalProducts.length != null){

          this.setState({
            ...this.state,
            listPackages: productDetail.listPackage,
            daftarAdditionalProduct: productDetail.listAdditionalProducts,
            listDescription: productDetail.listAdditionalDescription,
            listDescriptionWithListPax: productDetail.listAdditionalDescriptionWithListPax,
            specialNotes: productDetail.specialNote,
            amountPerUnitAdditionalProductWithId: productDetail.amountPerUnitAdditionalProductWithId,
            amountPerUnitPackagePacketWithId: productDetail.amountPerUnitPackagePacketWithId,
            
          })
      };
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

  // handlePostBookingForm = () => {
    handlePostBookingForm = async () => {

    const paramsAccessTokenMobile = await AsyncStorage.getItem("accessTokenMobile");
    const accessTokenMobile = JSON.parse(paramsAccessTokenMobile);

    //*Only want to store "token".
    this.setState({
        ...this.state,
        accessToken: accessTokenMobile
    });
    //****************************************** */

    const { action, navigation } = this.props;

    const { totalAdult, 
            totalChildren, 
            totalChildrenInfant, 
            dateProduct, 
            codeProduct, 
            listPackagesId, 
            name, 
            email, 
            phone, 
            komenk,
            timeProduct,
            referral,
            specialNotes,
            listDescription,
            totalAmount,
            amountPerUnitAdditionalProductWithId,
            amountPerUnitPackagePacketWithId,
            listDescriptionWithListPax
          } = this.state

   let phoneCode = phone;

   console.log('Starting Post Booking ...');

    let data = {
      adult: totalAdult ? totalAdult : 0,
      children: totalChildren ? totalChildren : 0,
      toddlers: totalChildrenInfant ? totalChildrenInfant : 0,
      date: dateProduct ? dateProduct : new Date(),
      product_code: codeProduct ? codeProduct : "Call Administrator to ask your product code",


      package:  [{"id": 328500, "qty": 0}], //*Data from amountPerUnitPackagePacketWithId = []
      // package: amountPerUnitPackagePacketWithId,
      additional: [{"id": 197, "qty": 0},{"id": 198, "qty": 0},{"id": 201, "qty": 0}], // Array ==> data "additional product di dalam detail, yang "id" BUKAN yang "additional_product_id" 
      // additional: amountPerUnitAdditionalProductWithId, //*Data from amountPerUnitAdditionalProductWithId = []
      user_code: "",  // Dapet dari mana data ini ? ==> Ga di isi gpp
      promo_code: "satu", // Dapet dari mana data ini ?
      name: name ? name : "What is your names ? ",


      phone: this.state.phone.getValue() ? this.state.phone.getValue() : "What is your phone ",
      email: email ? email : "What is your email ? ",
      comment: komenk ? komenk : "...",
      payment_type: "", //"payment_type" : {status} -> full-payment ,deposit,complimentary (Sementara di kosongin gpp!)
      customer_code: "",


      total_amount: 1000000, // totalAmount ? totalAmount :  ==> Ini value dapat dari total keseluruhan DUIT
      operation_time: timeProduct ? timeProduct : "12:00 AM",
      phone_code: this.state.phone.getCountryCode() ? this.state.phone.getCountryCode() : "62",
      referral: referral ? referral : "",


      // additional_description: listDescriptionWithListPax, ==> MASIH ERROR, HARUSNYA TYPE OBJECT
      additional_description:{
        "description":[{"heading":"A","content" :["Laundry Service↵✓  Shaded diving deck↵✓  Camera Station↵✓  Daily housekeeping↵✓  Audio & video entertainment↵✓  Library↵✓  Air Conditioned saloon↵✓  Aircon Cabins↵✓  Sun Deck↵✓  Indoor Saloon↵✓  Non-Diver (Snorkeler) Friendly↵✓  Warm Water Showers↵✓  Separate rinse for u/w camera↵✓  Custom built for diving↵✓  Charging stations↵✓  En-Suite bathrooms"]},{"heading":"C","content" :["123","llll"]}],
        "pax_details":[{"heading":"B","content" :[null]}] //==> Data from list Additional Description [type Array]
      },
      access_token: accessTokenMobile.access_token

    };

    console.log(data);
    action.postFormBooking(data);
    navigation.navigate('BookingPayment');
    
  };

  increment = (e) => {
      // const { totalClicks } = this.state;
      e.preventDefault();
      this.setState({ 
          ...this.state,
          totalClicks: this.state.totalClicks + 1 
      });
  };

  decrease = (e) => {
      // const { totalClicks } = this.state;
      e.preventDefault();

      this.setState({
          ...this.state,
          totalClicks: this.state.totalClicks - 1
      })
  };

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
          listCabinsState,
          listEntrances,
          listDescription,
          totalAdult,
          totalChildren,
          totalChildrenInfant,
          maxTotalClicks,
          specialNotes,
          

          //********* ADDITIONAL PRODUCT V-2 */
          daftarAdditionalProduct,
          amountPerUnitAdditionalProductWithId

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

          {/* #2 NAME CUSTOMER, PHONE, & EMAIL */}
          <CardView>
              <Row size={12}>
                <Col sm={12}>
                  <TextField
                      label='Name'
                      value={name}
                      // labelPadding={3}
                      labelTextStyle={{fontFamily:'TraboRobotoMedium'}}
                      // onChangeText={(e) => this.handleInputChange(e, 'data')}
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
                        // ref='phone'
                        ref = { ref => { this.state.phone = ref; }}
                        style={{margin:5}}
                        // initialCountry="US"
                        // value="Phone Number"
                        textProps={{placeholder: 'Phone Number'}}
                        onChangePhoneNumber={(phone) => this.setState({phone})}
                        
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
                {/** <TextGeneral value={" Age " + productDetail.listPaxAdult.age_from + " - " + productDetail.listPaxAdult.age_to } fontSize="11px" />*/}
              </Col>
              <Col sm={1}>
                  <IconGeneral name="remove-circle" onPress={(e) => this.decrease(e)}/>
              </Col>
              <Col sm={2}>
                <Text style={{marginLeft: 17, fontFamily: 'TraboRobotoMedium'}}>{ totalAdult }</Text>
              </Col>
              <Col sm={1}>
                {
                  totalAdult === maxTotalClicks ? 
                    <IconGeneralInActive name="control-point" /> : <IconGeneral name="control-point" onPress={(e) => this.increment(e)} />
                }
              </Col>
            </Row>

            {/** Children */}
            <Row size={12} style={{margin: 12}}>
              <Col sm={8}>
                <TextGeneral value={productDetail.listPaxChild ? "Children ( IDR " + numeral(productDetail.listPaxChild.amount).format('0,0') + " )" : "..."} fontSize="17px" />
                
              </Col>
              <Col sm={1}>
                <IconGeneral name="remove-circle"/>
              </Col>
              <Col sm={2}>
                <Text style={{marginLeft: 17, fontFamily: 'TraboRobotoMedium'}}>{ totalChildren }</Text>
              </Col>
              <Col sm={1}>
                {/*
                  totalChildren === maxTotalClicks ? 
                    <IconGeneralInActive name="control-point" /> : <IconGeneral name="control-point" onPress={(e) => this.increment(e)} />
                */}
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
                <Text style={{marginLeft: 17, fontFamily: 'TraboRobotoMedium'}}>{ totalChildrenInfant }</Text>
              </Col>
              <Col sm={1}>
                <IconGeneral name="control-point" />
                {/*
                  totalChildrenInfant === maxTotalClicks ? 
                    <IconGeneralInActive name="control-point" /> : <IconGeneral name="control-point" onPress={(e) => this.increment(e)} />
                */}
              </Col>
            </Row>
          </CardView>

          {/* #4 PACKAGE*/}
          <CardView>
            {
              listPackages.length != null ? listPackages.map((data, i) => {
                // console.log("List Packages : ", data)

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
          </CardView>

          {/* #5 ADDITIONAL PRODUCT */}
          <CardView>
            <Text style={{fontFamily: 'TraboRobotoMedium', margin: 10}} color="gray">Additional Product</Text>
            
                {
                  daftarAdditionalProduct.length != null ? daftarAdditionalProduct.map((data, i) => {
                      return (
                        <Row  key={i} size={12} style={{marginLeft: 10}}>
                          <Col sm={12}>
                            <TextGeneral value={data.name} fontSize="18px" />
                          </Col>
                            {
                              data.details.length != null ? data.details.map((detail, i) => {
                                return (
                                  <Row key={i} size={12} style={{margin: 12, marginLeft:0}}>
                                    <Col sm={8}>
                                      <TextGeneral value={detail.description} fontSize="17px" />
                                      <TextGeneral value={"IDR " + detail.amount} fontSize="14px" />
                                      <TextGeneral value={"Remark: " + detail.remark} fontSize="12px" />
                                      <TextGeneral value={"Maximum per booking = " + detail.max_per_booking} fontSize="12px" />
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
                                )
                              }) : null
                            }
                        </Row>
            

                      )
                  }) : null
                }
           
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
            
            {
              listDescription.length != null ? listDescription.map((data, i) => {
                return(
                  <Row key={i} size={12} style={{margin: 12}}>
                    <Col sm={12}>
                      <TextGeneral value={data.heading} fontSize="18px" />
                      <TextGeneral value={data.items[0]} fontSize="17px" />
                    
                    </Col>
                  </Row>
                )
              }) : null
            }
            
            
            {/** 
              <Row size={12} style={{margin: 12}}>
                <Col sm={12}>
                  <TextGeneral value="Raja Ampat - 8 Days Day One : Sorong" fontSize="18px" />
                  <TextGeneral value="Welcome to Dampier Straits areas. We will have check dive at Mioskon. Monitoring your buoyancy skill and make yourself comfortable with water and your gear. For some of you who has not dive for a long time, check dive is always a good way to refresh your skill. We have many excellent dive spot around the area. Cape Kri is a great start of the day with most fish and coral species accounted on a single dive site. Truly dive sites like Cape Kri, of Dr. Allen’s 30-year lifetime record fish count. Cape Kri has probably the largest concentration of big fish of any sites in northern Raja Ampat. Mioskon, Cape Kri and Mike’s point are among the sites for day two.
                  " fontSize="17px" />
                
                </Col>
              </Row>
            */}

          </CardView>

          {/** #7 SPECIAL NOTES */}
          <CardView>
            <Row size={12} style={{margin:12}}>
              <Text style={{fontFamily: 'TraboRobotoMedium'}} color="gray">Special Notes</Text>
              <Col sm={12}>
                {/*
                <TextField
                    label='Special Notes'
                    value={specialnotes}
                    labelTextStyle={{fontFamily:'TraboRobotoMedium'}}
                    onChangeText={ (specialnotes) => this.setState({ specialnotes }) }
                    animationDuration={150}
                    containerStyle={{marginLeft:7}}
                />  
                */}
                <TextGeneral value={productDetail.specialNote} fontSize="18px" />
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
              <Col sm={12} style={{margin: 30}}>
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

  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;

  elevation: 1;
  margin-left: 0;
  margin-right: 0;
  margin-top: 4;
  margin-bottom:7; 
`
// border-radius: 2;
// shadow-radius: 2;

const mapStateToProps = (state) => ({
  login: state.login.data,
  productDetail: state.productDetail.data
});

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators({getProductDetail, postFormBooking}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingNewFormScreen);