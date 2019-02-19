import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableHighlight,
  StyleSheet,
  Alert,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Toolbar } from 'react-native-material-ui';


import styled, {ThemeProvider, withTheme} from 'styled-components/native'
import {Column as Col, Row} from 'react-native-flexbox-grid';

import ProductDestination from '../components/booking/ProductDestination';
import TimeInfo from '../components/booking/TimeInfo';
import BookingIcons from '../components/booking/BookingIcons';
import TextTotalDays from '../components/booking/TextTotalDays';
import TextTotalPerson from '../components/booking/TextTotalPerson';

import { getProductWithDateAvalaible } from '../actions/booking_product_date_available'
// import { } from '../actions/ ' ==> For a while, we call this action, for testing, and next throw 'those' data into "BookingNewFormScreen"

class BookingDateDetailScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('data'),
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

    
  });

  constructor(props){
    super(props);

    this.handleNewBookingFillForm = this.handleNewBookingFillForm.bind(this);

    this.state = {
      headerDate: null,
      dataConsumeApi: null,
      listProductAndCode: {}
    }

  }

  componentDidMount(){
    const { navigation, action } = this.props;
    const dateParamsSecond = navigation.getParam('secondData');
    

    let data ={
      date: dateParamsSecond
    }
    action.getProductWithDateAvalaible(data);
    

  }

  componentDidUpdate(prevProps){
  
    const { navigation, productAvailable  } = this.props;
    const dateParams = navigation.getParam('data');
    const dateParamsSecond = navigation.getParam('secondData');

    if(prevProps.navigation != navigation ){
      this.setState({
        ...this.state,
        headerDate: dateParams,
        dataConsumeApi: dateParamsSecond
      })
    };

    if(prevProps.productAvailable != productAvailable){
      
      console.log("Product Available : ", productAvailable);
      // const data = Array.from(productAvailable.data)
      this.setState({
        ...this.state,
        listProductAndCode: productAvailable
        
        
      })
    }
  };

  handleNewBookingFillForm = () => {
    // Alert.alert("Hai")
    this.props.navigation.navigate('BookingNewForm');
    // this.props.navigation.navigate('InsideBooking', {data: selectedStartDate, secondData: selectedSDateSecondVersion})
    
  }

  render() {

    const { listProductAndCode } = this.state;
    const { productAvailable } = this.props;

    const renderLoader = () => {
      return (
        <View style={styles.loader}>
          <Text >Loading...</Text>
        </View>
      )
    }


    const renderProductAvailable = () => {

      const { productAvailable } = this.props;
      console.log(productAvailable);

        productAvailable.map((data, i) => {
        
          return (
            <Row size={12} style={{marginBottom: 12}} key={i}>
              <Col sm={9} md={6} lg={4}>
                <ProductDestination value={data.name} fontSize="17px"/>
              </Col>
              <Col sm={3} md={2} lg={2}>
                <TimeInfo value="07.00 AM" fontSize="16px"/>
              </Col>

              <Col sm={12}>
                <TextTotalDays value=" 1 Days" fontSize="16px" />
              </Col>

              <Col sm={7} md={4} lg={3}>
                <TextTotalPerson value=" 5 of 10" fontSize="16px" />
              </Col>
              <Col sm={5} md={4} lg={3} style={{margin:0, padding:0}}>
                <Button 
                  color="#0cd952"
                  title="Available" 
                  onPress={() => this.handleNewBookingFillForm()}></Button>
              </Col>
          </Row>
          )
        }) 
    }

    
  
    return (
      <View style={styles.container}>   

        <SalesCalendarResultView>

          
          {

              
            // productAvailable != undefined || productAvailable.length != null ? 

            productAvailable != undefined || productAvailable != null ? 
              renderProductAvailable()
            // productAvailable.map((data, i) => {
              
            
            //   return (
            //     <Row size={12} style={{marginBottom: 12}} key={i}>
            //       <Col sm={9} md={6} lg={4}>
            //         <ProductDestination value={data.name} fontSize="17px"/>
            //       </Col>
            //       <Col sm={3} md={2} lg={2}>
            //         <TimeInfo value="07.00 AM" fontSize="16px"/>
            //       </Col>

            //       <Col sm={12}>
            //         <TextTotalDays value=" 1 Days" fontSize="16px" />
            //       </Col>

            //       <Col sm={7} md={4} lg={3}>
            //         <TextTotalPerson value=" 5 of 10" fontSize="16px" />
            //       </Col>
            //       <Col sm={5} md={4} lg={3} style={{margin:0, padding:0}}>
            //         <Button 
            //           color="#0cd952"
            //           title="Available" 
            //           onPress={() => this.handleNewBookingFillForm()}></Button>
            //       </Col>

            //   </Row>
            //   )
            // }) 
            
            : renderLoader()
          }
         

          {/* 
            <Row size={12} style={{marginBottom: 12}}>
              <Col sm={9} md={6} lg={4}>
                <ProductDestination value="Ananta Riding Club" fontSize="17px"/>
              </Col>
              <Col sm={3} md={2} lg={2}>
                <TimeInfo value="07.00 AM" fontSize="16px"/>
              </Col>
            </Row>   


            <Row size={12}>
              <Col sm={12}>
                <TextTotalDays value=" 1 Days" fontSize="16px" />
              </Col>
            </Row>

            <Row size={12}>
              <Col sm={7} md={4} lg={3}>
                <TextTotalPerson value=" 5 of 10" fontSize="16px" />
              </Col>
              <Col sm={5} md={4} lg={3} style={{margin:0, padding:0}}>
                <Button s
                  color="#0cd952"
                  title="Available" 
                  onPress={() => this.handleNewBookingFillForm()}></Button>
              </Col>
            </Row>

          */}
        </SalesCalendarResultView>

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
  },
  loader : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 48
  }
});

const SalesCalendarResultView = styled.View`
  background: transparent;
  padding: 22px;
`
const mapStateToProps = (state) => ({
  login: state.login.data,
  // list_product: state.productAvailable.data ? state.productAvailable.data.list_product : null
  productAvailable: state.productAvailable ? state.productAvailable.data : null
  // productAvailable: state ? state.productAvailable : null
  
});

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators({getProductWithDateAvalaible}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingDateDetailScreen);