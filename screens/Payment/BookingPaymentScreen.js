import React from 'react';
import { View, Button, CheckBox, StyleSheet, Text, ScrollView, TextInput, TouchableHighlight, Alert, AsyncStorage, Dimensions} from 'react-native';
import { connect } from 'react-redux';
const numeral = require('numeral');
import { bindActionCreators } from 'redux';
import {widthPercentageToDP as width, heightPercentageToDP as height} from 'react-native-responsive-screen';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import styled from 'styled-components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { getPropertyName } from 'css-to-react-native';
import { MKRadioButton } from 'react-native-material-kit';
import { Snackbar, Dialog, DialogDefaultActions } from 'react-native-material-ui';    
import BottomSheet from 'react-native-js-bottom-sheet';
import Modal from 'react-native-modalbox';

import { postCalculatePriceBooking } from '../../actions/booking_post_calculate_price';
import { postPaymentCash } from "../../actions/payment_cash";

const screen = Dimensions.get('window');

class BookingPaymentScreen extends React.Component {

    bottomSheet: BottomSheet

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
        super(props);
        this.radioGroup = new MKRadioButton.Group();

        this.handleBottomSheetAction = this.handleBottomSheetAction.bind(this);
        this.handlePaymentViaCash = this.handlePaymentViaCash.bind(this);
        this.handlePaymentTransferBank = this.handlePaymentTransferBank.bind(this);
        this.handleButtonModalPaymentCash = this.handleButtonModalPaymentCash.bind(this);
        this.handleCalculatePrice = this.handleCalculatePrice.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.state = {
            active: '',
            resultCalculate:null,
            isVisibleSnackBar: false,
            accessToken: null,

            //REACT MODAL BOX
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3
        }
    
    }

    componentDidMount(){

    };

    componentDidUpdate(prevProps){

        const { calculatePrice, paymentCash } = this.props;
        const { resultCalculate } = this.state;

        if(prevProps.calculatePrice != calculatePrice){
            
            this.setState({
                ...this.state,
                resultCalculate: calculatePrice
            });

        };

        if(prevProps.paymentCash != paymentCash){
            
            // console.log("Response ", paymentCash)
            if(paymentCash.response === "success"){
                this.refs.modal3.close();
            }else {
                this.refs.modal3.close();
                Alert.alert(paymentCash.diagnostic.error_msgs);
            }
        };
    };

    handleBottomSheetAction = () => {
        this.bottomSheet.open();
    };

    handleCalculatePrice = async (e, data) => {

        e.preventDefault();
        const paramsAccessTokenMobile = await AsyncStorage.getItem("accessTokenMobile");
        const accessTokenMobile = JSON.parse(paramsAccessTokenMobile);

        //*Only want to store "token".
        this.setState({
            ...this.state,
            accessToken: accessTokenMobile
        });

        const { action } = this.props;

        let params = {
            adult : 1,
            children : 1,
            toddlers : 0,
            date : "2019-02-27",
            product_code : "A-09231721",
            package:[{"id": 328495, "qty": 0}],
            additional:[{"id": 187, "qty": 0},{"id": 188, "qty": 0},{"id": 189, "qty": 0}],
            user_code:"", //92
            promo_code:"satu",
            access_token: accessTokenMobile.access_token
        };

        action.postCalculatePriceBooking(params);
    
    };

    handleButtonModalPaymentCash = (e) => {
        e.preventDefault();
        const {action} = this.props;
        const {accessToken } = this.state;
        // INI W MESTI DAPETIN PAKE ASYNC STORAGE

        const data = {
            
            transaction_code:"56713178-25-02-2019-1474",
            payment_type:"deposit",
            access_token: accessToken.access_token
            
        };
        action.postPaymentCash(data);

    };

    handlePaymentViaCash = (e) => {
        
        this.bottomSheet.close();
        e.preventDefault();
        this.refs.modal3.open();
    };

    handlePaymentTransferBank = (e) => {
        
        this.bottomSheet.close();
        e.preventDefault();

        const {accessToken } = this.state;

        // this.refs.modalTransferBank.open();
        // this.props.navigation.navigate('BookingPaymentTransferBank',  { data: data, access_token: accessToken});
        this.props.navigation.navigate('BookingPaymentTransferBank');
    };

    handleCloseModal = (e) => {
        e.preventDefault();
        this.refs.modal3.close()
    }

    render() {

        const { resultCalculate, isVisibleSnackBar } = this.state;

        return (
            <View>

                {/** MODAL CONFIRM PAYMENT CASH */}
                <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"}>
                    <Dialog style={{padding: 10}}>
                        
                            <TextHeadingModal>Retrieve the cash </TextHeadingModal>
                       
                            <Dialog.Content>
                                <Text style={{fontFamily:"TraboRobotoMedium"}}>
                                    Make sure you have retrieve & re-count the cash before you proceed
                                </Text>
                            </Dialog.Content>
                        <Dialog.Actions>
                            <Row size={7} style={{margin: 12, padding: 5}}>
                                <Col sm={3}>
                                    <Button title="Proceed" color="#28d094" onPress={(e) => this.handleButtonModalPaymentCash(e)}></Button>
                                </Col>
                                <Col sm={1}></Col>
                                <Col sm={3}>
                                    <Button title="Cancel" color="gray" onPress={(e) => this.handleCloseModal(e)}></Button>
                                </Col>
                            </Row>
                            {/**
                            <DialogDefaultActions
                                actions={['proceed', 'cancel']}
                                options={{ ok: { disabled: true } }}
                                onActionPress={() => {}}
                            />
                             */}
                        </Dialog.Actions>
                    </Dialog>
                </Modal>

                {/** MODAL OPTION PAYMENT TRANSFER BANK */}
                <Modal style={[styles.modal, styles.modalTransferBank]} position={"center"} ref={"modalTransferBank"}>
                    <Text>Transfer Bank....</Text>


                </Modal>

                <ScrollView>
                    <CardView>
                        <RowCalculatePrice>
                            <Button
                                onPress={(e, data) => this.handleCalculatePrice(e, data)}                             
                                title="CALCULATE PRICE" 
                                color="#f16724" 
                                style={{marginTop: 10, marginRght: 10, fontFamily: 'TraboRobotoMedium'}}></Button>
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
                                {/* sub_total_additions, sub_total_frontend, sub_total_package, sub_total_pax*/}
                                <TextPaymentCurrency style={{marginTop: 10}}>
                                    IDR {resultCalculate != null ? numeral(resultCalculate.sub_total_frontend).format('0,0') : "0"}
                                </TextPaymentCurrency>
                            </Col>
                            <Col sm={6}>
                                <TextSubtotalServiceChargeDiscountCommision style={{marginRight: 20}}>
                                    Service Charge
                                </TextSubtotalServiceChargeDiscountCommision>
                                <TextPaymentCurrency style={{marginTop: 7}}>
                                    IDR {resultCalculate != null ? resultCalculate.service : "0"}
                                </TextPaymentCurrency>
                            </Col>
                        </Row>

                        <Row size={12} style={{margin: 15}}>
                            <Col sm={6}>
                                <TextSubtotalServiceChargeDiscountCommision>
                                    Discount
                                </TextSubtotalServiceChargeDiscountCommision>
                                <TextPaymentCurrency style={{marginTop: 7}}>
                                    IDR {resultCalculate != null ? resultCalculate.discount : "0"}
                                </TextPaymentCurrency>
                            </Col>
                            <Col sm={6}>
                                <TextSubtotalServiceChargeDiscountCommision style={{marginRight: 20}}>
                                    Commision
                                </TextSubtotalServiceChargeDiscountCommision>
                                <TextPaymentCurrency style={{marginTop: 7}}>
                                    IDR {resultCalculate != null ? resultCalculate.commission : "0"}
                                </TextPaymentCurrency>
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
                                    IDR {resultCalculate != null ? numeral(resultCalculate.total_frontend).format('0,0') : "0"}
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
                        <Row size={12} style={{marginTop: 10, marginBottom: 10}}>
                            <Col sm={8}>
                                <TextInput
                                    style={{ height: 40, width: "95%", borderColor: '#f16724', borderWidth: 1,  marginLeft: 15}}
                                    placeholder="Voucher Code"
                                    underlineColorAndroid="transparent"
                                />
                            </Col>
                            <Col sm={4}>
                                <Button title="CHECK" color="#f16724" style={{fontFamily: 'TraboRobotoMedium', smarginLeft: 5,marginTop: 15, marginRight:5 }}>CHECK</Button>
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
                                
                                <TouchableHighlight>
                                    <TextListPaymentStatus 
                                        style={{marginTop: 10}}
                                        onPress={() => this.handleBottomSheetAction()}
                                    >
                                        Make full payment
                                    </TextListPaymentStatus>
                                </TouchableHighlight>
                                <TextListPaymentStatus style={{marginTop: 10}}>Make a deposit payment</TextListPaymentStatus>
                                <TextListPaymentStatus style={{marginTop: 10}}>Not yet paid</TextListPaymentStatus>
                            </Col>
                        </Row>

                        
                    </CardView>

                    

                      {/** 
                        
                        MODAL CONFIRM WHEN PAYMENT CASH 
                        <Snackbar visible={isVisibleSnackBar} message="Calculate price, success !" onRequestClose={() => this.setState({ isVisibleSnackBar: false })} />

                    */}
                </ScrollView>

                <BottomSheet
                    title="Make full payment via "
                    ref={(ref: BottomSheet) => {
                        this.bottomSheet = ref
                    }}
                    itemDivider={3}
                    backButtonEnabled={true}
                    coverScreen={false}
                    titleFontFamily="TraboRobotoMedium"
                    fontFamily="TraboRobotoMedium"
                    options={[
                        
                        {
                            // title: 'Cash',
                            title: (
                                <TextCash />
                            ),
                            icon: (
                                <OptionRadioButton 
                                    onPress = {(e) => this.handlePaymentViaCash(e)}
                                    // onPress={() => this.refs.modal3.open()}
                                />
                            ),
                            onPress: (e) => this.handlePaymentViaCash(e)
                            // onPress: () => this.refs.modal3.open()
                        },
                        {
                            title: 'Bank Transfer & Retail Payment',
                            fontFamily:'TraboRobotoMedium',
                            icon: (
                                <OptionRadioButton 
                                    onPress = {(e) => this.handlePaymentTransferBank(e)}
                                />
                            ),
                            onPress: () => null
                        },
                        {
                            title: 'Credit Card',
                            fontFamily:'TraboRobotoMedium',
                            icon: (
                                <OptionRadioButton />
                            ),
                            onPress: () => null
                        },
                        
                    ]}
                    isOpen={false}
                />

              
            </View>
        );
    }
};

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
    font-size: ${height('3.1%')};
    color: black;
`;

const TextHeadingModal = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${height('3.3%')};
    color: black;
    margin-left: 22;
`;

export const OptionRadioButton = ({onPress}) => (
    <MKRadioButton
        checked={false}
        group={this.radioGroup}
        onPress={onPress}
    />
);

//Bottom Sheet
export const TextCash = () => (
    <Text>Cash * </Text>
);

const styles = StyleSheet.create({

    wrapper: {
      paddingTop: 50,
      flex: 1
    },
  
    modal: {
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    modal3: {
      backgroundColor: "transparent"
    },
    modalTransferBank: {
        backgroundColor: "white"
    }
  
  });

const mapStateToProps = (state) => ({
    login: state,
    calculatePrice: state.calculatePrice.data,
    paymentCash: state.paymentCash.data
  });
  
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators({postCalculatePriceBooking, postPaymentCash}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingPaymentScreen);