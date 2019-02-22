import React from 'react';
import { View, Button, CheckBox, StyleSheet, Text, ScrollView, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {widthPercentageToDP as width, heightPercentageToDP as height} from 'react-native-responsive-screen';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import styled from 'styled-components';

class BookingPaymentScreen extends React.Component {

    static navigationOptions = {
        title: 'Payment',
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
        super(props)
    
    }

    componentDidMount(){

    };

    componentDidUpdate(prevProps){

    };
    
    render() {

        return (
            <View>
                <ScrollView>
                    <CardView>
                        <RowCalculatePrice>
                            <Button title="CALCULATE PRICE" color="#f16724" style={{marginTop: 10, marginRght: 10}}></Button>
                        </RowCalculatePrice>
                        <Row size={12} style={{margin: 15}}>
                            <Col sm={12}>
                                <TextPayment>Payment</TextPayment>
                            </Col>
                        </Row>

                        <Row size={12} style={{margin: 15}}>
                            <Col sm={6}>
                                <TextSubtotalServiceChargeDiscountCommision>
                                    Sub total
                                </TextSubtotalServiceChargeDiscountCommision>
                                <TextPaymentCurrency style={{marginTop: 10}}>IDR 131,000,000</TextPaymentCurrency>
                            </Col>
                            <Col sm={6}>
                                <TextSubtotalServiceChargeDiscountCommision style={{marginRight: 20}}>
                                    Service Charge
                                </TextSubtotalServiceChargeDiscountCommision>
                                <TextPaymentCurrency style={{marginTop: 7}}>IDR 50,000</TextPaymentCurrency>
                            </Col>
                        </Row>

                        <Row size={12} style={{margin: 15}}>
                            <Col sm={6}>
                                <TextSubtotalServiceChargeDiscountCommision>
                                    Discount
                                </TextSubtotalServiceChargeDiscountCommision>
                                <TextPaymentCurrency style={{marginTop: 7}}>IDR 0</TextPaymentCurrency>
                            </Col>
                            <Col sm={6}>
                                <TextSubtotalServiceChargeDiscountCommision style={{marginRight: 20}}>
                                    Commision
                                </TextSubtotalServiceChargeDiscountCommision>
                                <TextPaymentCurrency style={{marginTop: 7}}>IDR 0</TextPaymentCurrency>
                            </Col>
                        </Row>

                        {/** TOTAL */}
                        <Row size={12} style={{margin: 15}}>
                            <Col sm={12}>
                                <TextTotalHeader>
                                    Total
                                </TextTotalHeader>
                            </Col>
                        </Row>
                        <Row size={12} style={{marginLeft:15,marginTop: 0}}>
                            <Col sm={12}>
                                <TextTotalCurrency>
                                    IDR 131,050,000
                                </TextTotalCurrency>
                            </Col>
                        </Row>

                        <Row size={12} style={{marginTop: 10}}>
                            <Col sm={1}>
                                <CheckBox style={{margin:5}}/>
                            </Col>
                            <Col sm={11}>
                                <Text style={{fontFamily: 'TraboRobotoMedium', marginTop: 10, marginLeft: 5}}>
                                    Make this booking complementary
                                </Text>
                                <Text style={{fontFamily: 'TraboRobotoMedium',marginLeft: 5, color: 'gray'}}>
                                    Sets the total amount to IDR 0
                                </Text>
                            </Col>
                        </Row>

                        {/** VOUCHER */}
                        <Row size={12} style={{marginTop: 10}}>
                            <Col sm={7}>
                                <TextInput
                                    style={{ height: 40, width: "95%", borderColor: '#f16724', borderWidth: 1,  marginLeft: 15}}
                                    placeholder="Voucher Code"
                                    underlineColorAndroid="transparent"
                                />
                            </Col>
                            <Col sm={5}>
                                <Button title="CHECK" color="#f16724" style={{fontFamily: 'TraboRobotoMedium', smarginLeft: 5,marginTop: 15, marginRight:5 }}></Button>
                            </Col>
                        </Row>
                    </CardView>

                    {/** SELECT PAYMENT STATUS */}
                    <CardView style={{marginTop: 10}}>
                        <Row size={12} style={{margin: 15}}>
                            <Col sm={12}>
                                <TextSelectPaymentStatus>
                                    Select payment status
                                </TextSelectPaymentStatus>
                                <TextListPaymentStatus style={{marginTop: 10}}>Make full payment</TextListPaymentStatus>
                                <TextListPaymentStatus style={{marginTop: 10}}>Make a deposit payment</TextListPaymentStatus>
                                <TextListPaymentStatus style={{marginTop: 10}}>Not yet paid</TextListPaymentStatus>
                            </Col>
                        </Row>
                    </CardView>
                </ScrollView>
            </View>
        );
    }
}

const RowCalculatePrice = styled.View`
    flexDirection: row-reverse;
    justifyContent: space-between;
    margin-top: 12px;
    margin-left:17px;
`;
//border-width: 1;
//border-color: orange;
// width: ${width('84.5%')};
// height: ${height('17%')};

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
  margin-top: 0;
  margin-bottom:0; 
`;

const TextPayment = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${height('5.7%')};
    color: black;
`;

const TextPaymentCurrency = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${height('3.2%')};
    color: black;
`;

const TextSubtotalServiceChargeDiscountCommision = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${height('2%')};
    color: gray;
`;

const TextTotalHeader = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${height('2.7%')};
    color: gray;
`;

const TextTotalCurrency = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${height('6%')};
    color: black;
`;

const TextSelectPaymentStatus = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${height('2.1%')};
    color: gray;
`;

const TextListPaymentStatus = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${height('3.2%')};
    color: black;
`;

const mapStateToProps = (state) => ({
    login: state,
    product:state,
    bookingCalendar: state,
    product: state
  });
  
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators({}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingPaymentScreen);
