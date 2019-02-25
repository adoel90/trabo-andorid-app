
import React from 'react';
import { View, Button, AsyncStorage, StyleSheet, Text, ScrollView, Image, TouchableHighlight, Alert} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MKRadioButton } from 'react-native-material-kit';

import {widthPercentageToDP as width, heightPercentageToDP as height} from 'react-native-responsive-screen';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { postPaymentTransferBank } from '../../actions/payment_transfer_bank';


class BookingPaymentTransferBank extends React.Component {

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
        this.handleSubmitTransferBank = this.handleSubmitTransferBank.bind(this);
        this.handleBackToPaymentOption = this.handleBackToPaymentOption.bind(this);
        this.handleSelectedIcon = this.handleSelectedIcon.bind(this);

        this.state = {
            mandiri: 'MANDIRI',
            bni: 'BNI',
            bri: 'BRI',
            alfamart: 'ALFAMART',
            other: 'OTHER',
            selectedRadioButton: '',
            accessToken: null
        };
    
    }

    componentDidMount(){
       
    };

    componentDidUpdate(prevProps){
        const { paymentTransfer } = this.props;

        if(prevProps.paymentTransfer != paymentTransfer){
            console.log(paymentTransfer);
            if(paymentTransfer.response === "success"){
                this.props.navigation.navigate('BookingPayment'); //Sementara redirect-in kesini dulu, next langsung ke manifest

            } else {
                Alert.alert(paymentTransfer.diagnostic.error_msgs);
            }
        }
    };


    handleSubmitTransferBank = async (e, data) => {

        e.preventDefault();

        const paramsAccessTokenMobile = await AsyncStorage.getItem("accessTokenMobile");
        const accessTokenMobile = JSON.parse(paramsAccessTokenMobile);

        //*Only want to store "token".
        this.setState({
            ...this.state,
            accessToken: accessTokenMobile
        });

        const { selectedRadioButton} = this.state;
        const { action } = this.props;

        let params = {
            transaction_code:"56713178-25-02-2019-1966",
            bank_code:selectedRadioButton,
            access_token: accessTokenMobile.access_token
        };

        // console.log(params);
        action.postPaymentTransferBank(params);

    };

    handleBackToPaymentOption = (e) => {
        e.preventDefault();
        this.props.navigation.navigate('BookingPayment');
    };

    handleSelectedIcon = (e,data) => {
        e.preventDefault();
        console.log(data);

        this.setState({
            ...this.state,
            selectedRadioButton: data
        })
    };

    
    
    render() {

        const { mandiri, bni, bri, alfamart } = this.state;


        return (
            <View>

                <ScrollView>
                        <CardView>
                            <RowCloseIcon>
                            <Icon 
                                name="clear" 
                                size={17}
                                style={{ marginRight: 15, marginTop: 4, bottom:0 }}
                                color="gray"
                                onPress={(e) => this.handleBackToPaymentOption(e)}
                            />
                            </RowCloseIcon>

                            <Row size={12} style={{margin: 15}}>
                                <Col sm={12}>
                                    <TextPilihPembayaran>Pilih Pembayaran</TextPilihPembayaran>
                                </Col>
                            </Row>

                            {/** ICON WITH TEXT - https://stackoverflow.com/questions/30448547/how-to-model-a-button-with-icons-in-react-native  */}
                            <Row size={12} style={{margin: 15}}>
                                <Col sm={2}>
                                    <Icon name="account-balance" color="#25197e" size={32} >
                                    </Icon>
                                </Col>
                                <Col sm={10}>
                                    <TextTransferBankBesideIcon>Transfer Bank</TextTransferBankBesideIcon>
                                </Col>
                            </Row>

                            {/** MANDIRI */}
                            <Row size={12}  style={{margin: 15}}>
                                <Col sm={2}> 
                                    <MKRadioButton
                                        checked={false}
                                        group={this.radioGroup}
                                        onPress={(e) => this.handleSelectedIcon(e, mandiri)}
                                    />
                                </Col>
                                <Col sm={10}>
                                    <Image
                                        style={{width: 110, height: 33}}
                                        source={require('../../assets/images/mandiri.png')}
                                    />
                                </Col>
                            </Row>


                            {/** BNI */}
                            <Row size={12}  style={{margin: 15}}>
                                <Col sm={2}>
                                    <MKRadioButton
                                        checked={false}
                                        group={this.radioGroup}
                                        onPress={(e) => this.handleSelectedIcon(e, bni)}
                                    />
                                </Col>
                                <Col sm={10}>
                                    <Image
                                        style={{width: 110, height: 26}}
                                        source={require('../../assets/images/BNI.png')}
                                    />
                                </Col>
                            </Row>

                            {/** BRI */}
                            <Row size={12}  style={{margin: 15}}>
                                <Col sm={2}>
                                   <MKRadioButton
                                       checked={false}
                                       group={this.radioGroup}
                                       onPress={(e) => this.handleSelectedIcon(e, bri)}
                                   />
                               </Col>
                               <Col sm={10}>
                                   <Image
                                       style={{width: 110, height: 30}}
                                       source={require('../../assets/images/BRI.png')}
                                   />
                               </Col>
                            </Row>

                            {/** ICON WITH TEXT - https://stackoverflow.com/questions/30448547/how-to-model-a-button-with-icons-in-react-native  */}
                            <Row size={12} style={{margin: 20}}>
                                <Col sm={2}>
                                    <Icon name="account-balance" color="#25197e" size={32}>
                                    </Icon>
                                </Col>
                                <Col sm={10}>
                                    <TextTransferBankBesideIcon>Outlet Ritel</TextTransferBankBesideIcon>
                                </Col>
                            </Row>

                            <Row size={12}  style={{margin: 15}}>
                                {/** ALFAMART  */}
                                <Col sm={2}>
                                    <MKRadioButton
                                        checked={false}
                                        group={this.radioGroup}
                                        onPress={(e) => this.handleSelectedIcon(e, alfamart)}
                                    />
                                </Col>
                                <Col sm={10}>
                                    <Image
                                        style={{width: 130, height: 54, margin: 5}}
                                        source={require('../../assets/images/alfamart.png')}
                                    />
                                </Col>
                            </Row>

                            <RowSubmit style={{margin: 5}}>
                                <Button
                                    onPress={(e, data) => this.handleSubmitTransferBank(e, data)}                             
                                    title="Submit" 
                                    color="#f16724"     
                                    style={{marginTop: 10, marginRght: 10}}
                                    titleStyle={{ fontFamily:'TraboRobotoMedium', fontWeight:400 }}
                                    ></Button>
                                </RowSubmit>
                        </CardView>
                </ScrollView>
            </View>
            );
        };

 
};



const styles = StyleSheet.create({

    icon:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#68a0cf',
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#fff'
      },
      iconText:{
          color:'#fff',
          textAlign:'center',
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
  margin-top: 0;
  margin-bottom:0; 
`;

const RowCloseIcon= styled.View`
    flexDirection: row-reverse;
    justifyContent: space-between;
    margin-top: 12px;
    margin-left:17px;
`;

const RowSubmit= styled.View`
    flexDirection: row-reverse;
    justifyContent: space-between;
    margin-top: 12px;
    margin-left:17px;
`;

const TextPilihPembayaran = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${height('5.5%')};
    color: gray;
`;

const TextTransferBankBesideIcon = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${height('2.9%')};
    color: gray;
`;

const mapStateToProps = (state) => ({
    login: state,
    paymentTransfer: state.paymentTransfer.data
  });
  
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators({postPaymentTransferBank}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingPaymentTransferBank);
