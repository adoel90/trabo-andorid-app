import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Button,
  AsyncStorage,
  Picker,
  FlatList,
  Alert
} from 'react-native';
import moment from 'moment';
import CalendarPicker from 'react-native-calendar-picker';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import {widthPercentageToDP as width, heightPercentageToDP as height} from 'react-native-responsive-screen';
import styled, {ThemeProvider} from 'styled-components/native'
import { Dialog, DialogDefaultActions } from 'react-native-material-ui';
import Modal from 'react-native-modalbox';

import Dates from '../components/Date';
import StatusPayment from '../components/booking/StatusPayment';
import ProductDestination from '../components/booking/ProductDestination';
import DateInfo from '../components/booking/DateInfo';
import CustomerName from '../components/booking/CustomerName';
import TimeInfo from '../components/booking/TimeInfo';
import PaxTotal from '../components/booking/PaxTotal';
import DescriptionId from '../components/booking/DescriptionId';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { getListUser } from '../actions/user';
import { getBookingCalendarAvailable } from '../actions/booking_calender_available'

class BookingScreen extends React.Component {

  static navigationOptions = {
    title: 'Booking'
  };

  constructor(props){
    
    super(props);
    this.onDateChange = this.onDateChange.bind(this);
    this.handleModalPickProduct = this.handleModalPickProduct.bind(this);
    this.handleSelectedProduct = this.handleSelectedProduct.bind(this);
    
    this.state = {

      date: null,
      focus: 'startDate',
      startDate: null,
      endDate: null,
      productList:{},
      customDatesStylesAvailable:[],
      selectedProductFromPicker: '',
      selectedProductCode:'',
      selectedValueDropdownlist: {},
      isSelectedValueDrProduct: false,
      isClickDropdown: false,
      isModalVisible: false,
      checked: false,
      dateListAvailable: {},
      selectedStartDate: null,
      selectedSDateSecondVersion: null,
      recentOrderList: {},
      accessToken: {},

      //REACT MODAL BOX
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
      
    };
  };

  componentDidMount(){
    const { action } = this.props;
  
  };

  componentDidUpdate(prevProps){

    const { login, product, availableCalendar, recentOrder } = this.props;

    if(prevProps.login != login){
      if(login.token_type != null){
        this.setState({
          ...this.state,
          accessToken: login.access_token
        },() => {
          let data = {
            access_token: this.state.accessToken
          }
          AsyncStorage.setItem("accessTokenMobile", JSON.stringify(data))
        })
      }
    }

    if(prevProps.product != product){

      this.setState({
        ...this.state,
        dateListAvailable: availableCalendar.response,
        productList: product
      })
    }

    //*AVAILABLE CALENDAR
    if(prevProps.availableCalendar != availableCalendar){

      // customDatesStyles={[{date:"2019-02-26",style:{backgroundColor:'orange'}}, {date:"2019-02-27", style:{backgroundColor:'orange'}}]}
      // let customDatesinActive = [];
      let customDatesStyles = [];

      if(availableCalendar.response != null ){
        if(availableCalendar.response.available != null){
          if(availableCalendar.response.available.length != null){

            // console.log("Props Available List : ", availableCalendar.response.available )
            availableCalendar.response.available.map((data) => {

              let dummy = {date: data, style: {backgroundColor:'orange'}}
              customDatesStyles.push(dummy)

            
            })
          }
        };       
      }

      console.log("Custome Dates Styles : ", customDatesStyles);

      this.setState({
        ...this.state,
        dateListAvailable: availableCalendar.response,
        customDatesStylesAvailable:customDatesStyles
      });


    }

    //*RECENT ORDER 
    if(prevProps.recentOrder != recentOrder){
      this.setState({
        ...this.state,
        recentOrderList: recentOrder
      })
    }
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: moment(date).format('ddd, DD MMM YYYY'),
      selectedSDateSecondVersion: moment(date).format('YYYY-MM-DD')
    }, () => {
      const { selectedStartDate, selectedSDateSecondVersion, accessToken} = this.state;
      // this.props.navigation.navigate('Authentication');

      this.props.navigation.navigate('InsideBooking', {
                                              data: selectedStartDate, 
                                              secondData: selectedSDateSecondVersion,
                                              thirdDataIsToken: accessToken
                                            })
    });
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Authentication');
  };

  _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  
  handleModalPickProduct = (e) => {
    e.preventDefault();
    this.refs.modalPicker.open();
  };

  handleSelectedProduct = async (e, data) => {
    e.preventDefault();
    this.refs.modalPicker.close();

    const paramsAccessTokenMobile = await AsyncStorage.getItem("accessTokenMobile");
    const accessTokenMobile = JSON.parse(paramsAccessTokenMobile);
    
    this.setState({
      ...this.state,
      selectedProductFromPicker: data.name,
      selectedProductCode: data.code,
      isSelectedValueDrProduct: true

    }, () => {
      const { action } = this.props;
      
      let data = {
        access_token: accessTokenMobile.access_token,
        product_code: this.state.selectedProductCode
      };
      // console.log(data);
      action.getBookingCalendarAvailable(data)
    });

    

  }

 
 
  render() {

    const { product, availableCalendar} = this.props;
    const { 
            recentOrderList, 
            selectedStartDate, 
            isSelectedValueDrProduct,
            productList,
            selectedProductFromPicker,
            dateListAvailable,
            customDatesStylesAvailable
          } = this.state;

    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    const start = moment('2017-07-1', 'YYYY-MM-DD');
    const end   = moment('2017-07-28', 'YYYY-MM-DD');

    let customDatesInActive = [];
    // {date: data, style: {backgroundColor:'orange'}}

    return (
      <View style={styles.container}>   

         {/** MODAL PICKER PRODUCT */}
         <Modal style={[styles.modal, styles.modalPicker]} position={"center"} ref={"modalPicker"}>
          {
            productList.length != null ? productList.map((data, i) => {
              return (
                <TextListItemPicker
                  key={i}
                  onPress={(e) => this.handleSelectedProduct(e, data)}
                >
                  {data.name}
                </TextListItemPicker>
              )
            }) : null
          }
       </Modal>

        <ScrollView contentContainerStyle={styles.contentContainer}>

          <OpenSansText></OpenSansText>
          <TouchableOpacity>
            <OpenSansTextSelectProduct
              onPress={(e) => this.handleModalPickProduct(e)}
            >
            {selectedProductFromPicker != '' ? selectedProductFromPicker : "Select Product for availability"}</OpenSansTextSelectProduct>
          </TouchableOpacity>
        
          <BorderBottomView></BorderBottomView>

          <CalendarPicker
            onDateChange={this.onDateChange}
            // minDate={isSelectedValueDrProduct == true  ? new Date (2019,2, 2 ) : null}
            // maxDate={isSelectedValueDrProduct == true  ? new Date(2019, 2, 28) : null }
            // minDate={new Date (2019,2, 2 )}
            // maxDate={new Date(2019, 2, 28) }
            selectedStartDate={start}
            selectedEndDate={end}
            selectedDayColor="grey"                                                                                                                                                                                                                                                                                                                  
            selectedDayStyle={{backgroundColor:'white'}}
            // allowRangeSelection={true}
            textStyle={{fontFamily:'TraboRobotoMedium'}}
            previousTitle="chevron-left"
            nextTitle="chevron-right"
            // customDatesStyles={[{date:"2019-02-26",style:{backgroundColor:'orange'}}, {date:"2019-02-27", style:{backgroundColor:'orange'}}]}
            customDatesStyles={isSelectedValueDrProduct == true ? customDatesStylesAvailable : customDatesInActive }
          />

          <RecentOrderSeeMoreView>  
            <Row size={12}>
              <Col sm={6} md={4} lg={3}>
                <OpenSansTextRecentOrder>Recent Order</OpenSansTextRecentOrder>
              </Col>
              <Col sm={6} md={4} lg={3}>
                <OpenSansTextSeeMore>SEE MORE</OpenSansTextSeeMore>
              </Col>
            </Row>   
          </RecentOrderSeeMoreView> 
          <RecentOrderListView> 
            {
              
              recentOrderList.length != null ? 
                recentOrderList.map((data, i) => {

                  return (
                  
                    <Row size={12} style={{marginBottom: 12}} key={i}>
                      <Col sm={3}><StatusPayment value={data.status_name} fontSize="12px" /></Col>
                      <Col sm={7}><ProductDestination value={data.product_name} fontSize="13px" /></Col>
                      <Col sm={2} style={{marginBottom: 10}}><DateInfo value={moment(data.created_at).format('DD MMM')} fontSize="13px" /></Col>

                      <Col sm={10}><CustomerName value={data.name} fontSize="12px" /></Col>
                      <Col sm={2} style={{marginBottom: 5}}><TimeInfo value="Just now" fontSize="12px" /></Col>

                      <Col sm={6}><PaxTotal value={data.ticket} fontSize="12px" /></Col>
                      <Col sm={6}><DescriptionId value={data.transaction_code} fontSize="12px" /></Col>
                      
                    </Row>
                  )
                })
              : null
            }
            </RecentOrderListView>
          {/*           <RecentOrderListView> 
              <Row size={12} style={{marginBottom: 12}}>
                <Col sm={3}><StatusPayment value="Paid" fontSize="12px" /></Col>
                <Col sm={7}><ProductDestination value="Yoga Class in Singaraja" fontSize="13px" /></Col>
                <Col sm={2}><DateInfo value="20 Aug" fontSize="13px" /></Col>
              </Row>
              <Row size={12}>
                <Col sm={10}><CustomerName value="Winsen Tandra" fontSize="12px" /></Col>
                <Col sm={2}><TimeInfo value="Just now" fontSize="12px" /></Col>
              </Row>
              <Row style={{marginBottom: 7}}>
                <Col sm={7}><PaxTotal value="3 Pax" fontSize="12px" /></Col>
                <Col sm={5}><DescriptionId value="56713178-02-01-2019" fontSize="12px" /></Col>
              </Row>
            
          </RecentOrderListView>
          */}

        </ScrollView>
        {this.state.date && <Text style={styles.date}>{this.state.date && this.state.date.format('LL')}</Text>}
        <Text style={[styles.date, this.state.focus === 'startDate' && styles.focused]}>{this.state.startDate && this.state.startDate.format('LL')}</Text>
        <Text style={[styles.date, this.state.focus === 'endDate' && styles.focused]}>{this.state.endDate && this.state.endDate.format('LL')}</Text>
      </View>
    );
  }
}

export const OpenSansTypography = ({value, fontSize}) => (

  <TextElement fontSize={fontSize}>
    {value}
  </TextElement>
)

const TextElement = styled.Text`
  font-family: 'TraboRobotoMedium';
  font-size: ${props => props.fontSize};
`

const RecentOrderListView = styled.View`
  background: transparent;
  padding: 14px;
  shadow-color: gray;
  border-color: gray;
  border-bottom-width: 0;
  shadow-color: red;
  shadow-offset: {width: 0, height: 1};
  shadow-opacity: 0.8;
  elevation: 0.5;
  margin-bottom: 3;
`
const RecentOrderSeeMoreView = styled.View`
  background: #e6eaed;
  padding: 20px;
`
const OpenSansTextRecentOrder = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: 12px;
    color: #676667;
`
const OpenSansTextSeeMore = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: 12px;
    color: orange;
    text-align: right;
`
const OpenSansTextPicker = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: 17px;
`
const OpenSansTextSelectProduct = styled.Text`
  font-family: 'TraboRobotoMedium';
  font-size: 17px;
  margin: 5px;
  text-align: center;
  color: #989898;
`

const OpenSansText = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: 14px;
`

//*Border
// const BorderBottomView = styled.View`
//   border-width: 1;
//   border-radius: 2;
//   border-color: #f1eded;
//   border-bottom-width: 0;
//   shadow-color: red;
//   shadow-offset: {width: 0, height: 1};
//   shadow-opacity: 0.5;
//   elevation: 0.5;
//   margin-bottom: 20;
// `

const BorderBottomView = styled.View`
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
  margin-bottom:10; 
`
const TextListItemPicker = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${height('3.3%')};
    color: gray;
    margin-left: 22;
    margin-bottom: 12;
`;

// border-radius: 2;
// shadow-radius: 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    marginTop: 0,
  },
  date: {
    marginTop: 0
  },
  focused: {
    color: 'blue'
  },
  dropdownlist: {
    flex: 1,
    flexGrow: 1,
    // width: 200, 
    height: 40
    // shadowColor: '#000', ==> NOT WORK IN PICKER
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    margin: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalPicker: {
    backgroundColor: "white"
  },
});

const mapStateToProps = (state) => ({
  login: state.login.data,
  availableCalendar: state.bookingCalendar.data,
  product: state.product.data,
  recentOrder: state.recentOrder.data.recent_orders
});

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators({getBookingCalendarAvailable}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingScreen);


   {/*
      https://docs.expo.io/versions/latest/sdk/linear-gradient/ 
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      

        <LinearGradient
          colors={['#7D6FE3', '#3121A9']}
          start={[1,1]}//Top & Left; 10% & 10%
          //end={[1,1]}//Bottom & Right; 10% & 10%
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}>
            Sign in with Facebook
          </Text>
        </LinearGradient>
      </View>
      */}