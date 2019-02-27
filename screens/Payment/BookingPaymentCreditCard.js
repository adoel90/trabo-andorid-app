
import React from 'react';
import { View, Button, AsyncStorage, StyleSheet, Text, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import {widthPercentageToDP as width, heightPercentageToDP as height} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { TextField } from 'react-native-material-textfield';
import { postPaymentTransferCreditCard } from '../../actions/payment_credit';

class BookingPaymentCreditCard extends React.Component {

    static navigationOptions = {
        title: '.',
    };

    constructor(props){
        super(props);
        this.handleBackToPaymentOption = this.handleBackToPaymentOption.bind(this);
        this.handleSaveTransferCreditCard = this.handleSaveTransferCreditCard.bind(this);

        this.state = {
            cardNumber:'',
            nameOnCard:'',
            expireMm:'',
            expireYy:'',
            cvv: '',
            accessToken: null
        };
    };

    componentDidMount(){

    };

    componentDidUpdate(prevProps){
        const { login, paymentCreditCard } = this.props;

        if(prevProps.paymentCreditCard != paymentCreditCard){

            console.log(paymentCreditCard);

        };
    };

    handleBackToPaymentOption = (e) => {
        e.preventDefault();
        this.props.navigation.navigate('BookingPayment');

    };

    handleSaveTransferCreditCard = async (e) => {

        e.preventDefault();

        const paramsAccessTokenMobile = await AsyncStorage.getItem("accessTokenMobile");
        const accessTokenMobile = JSON.parse(paramsAccessTokenMobile);

        //*Only want to store "token".
        this.setState({
            ...this.state,
            accessToken: accessTokenMobile
        });
        //********************************** */

        const { action } = this.props;

        const data = {
            
            transaction_code:"1",
            token_id: "5bb1ca566225f3d717b71c34",
            access_token: accessTokenMobile.access_token
            
        };

        console.log("Data From Button Save : ", data)
        // action.postPaymentTransferCreditCard(data);
    };

    render() {

        const { cardNumber, nameOnCard, expireMm, expireYy, cvv } = this.state;

        return (
            <View>
                <ScrollView>
                    <Icon 
                        name="clear" 
                        size={25}
                        style={{ marginLeft: 12, marginTop: 5 }}
                        color="gray"
                        onPress={(e) => this.handleBackToPaymentOption(e)}
                    />

                    <Row size={12} style={{margin: 15, margintop: 25}}>
                        <Col sm={12}>
                            <TextHeaderCreditCardDetails>Credit Card Details</TextHeaderCreditCardDetails>
                        </Col>
                    </Row>

                    {/** CARD NUMBER */}
                    <Row size={12} style={{margin: 12}}>
                        <Col sm={12}>
                            <TextField
                                label='Card Number'
                                value={cardNumber}
                                // labelPadding={3}
                                labelTextStyle={{fontFamily:'TraboRobotoMedium'}}
                                onChangeText={ (cardNumber) => this.setState({ cardNumber }) }
                                // animationDuration={150}
                                containerStyle={{marginLeft:7}}
                            />  
                        </Col>
                    </Row>

                    {/** NAME ON CARD */}
                    <Row size={12} style={{margin: 12}}>
                        <Col sm={12}>
                            <TextField
                                label='Name on card'
                                value={nameOnCard}
                                // labelPadding={3}
                                labelTextStyle={{fontFamily:'TraboRobotoMedium'}}
                                onChangeText={ (nameOnCard) => this.setState({ nameOnCard }) }
                                // animationDuration={150}
                                containerStyle={{marginLeft:7}}
                            />  
                        </Col>
                    </Row>

                    {/** EXPIRED DATE */}
                    <Row size={12} style={{margin: 12}}>
                        <Col sm={6}>
                            <TextField
                                label='Expiry (MM)'
                                value={expireMm}
                                // labelPadding={3}
                                labelTextStyle={{fontFamily:'TraboRobotoMedium'}}
                                onChangeText={ (expireMm) => this.setState({ expireMm }) }
                                // animationDuration={150}
                                containerStyle={{marginLeft:7}}
                            />  
                        </Col>

                        <Col sm={6}>
                            <TextField
                                label='Expiry (YY)'
                                value={expireYy}
                                // labelPadding={3}
                                labelTextStyle={{fontFamily:'TraboRobotoMedium'}}
                                onChangeText={ (expireYy) => this.setState({ expireYy }) }
                                // animationDuration={150}
                                containerStyle={{marginLeft:7}}
                            />  
                        </Col>
                    </Row>

                    {/** CVV */}
                    <Row size={12} style={{margin: 12}}>
                        <Col sm={12}>
                            <TextField
                                label='Input CVV Here'
                                value={cvv}
                                // labelPadding={3}
                                labelTextStyle={{fontFamily:'TraboRobotoMedium'}}
                                onChangeText={ (cvv) => this.setState({ cvv }) }
                                // animationDuration={150}
                                containerStyle={{marginLeft:7}}
                            />  
                        </Col>
                    </Row>

                    <Row size={12} style={{margin: 15}}>
                        <Col sm={7}>
                        
                        </Col>
                        <Col sm={5}>
                            <Button title="SAVE" color="#f16724" onPress={(e) => this.handleSaveTransferCreditCard(e)}></Button>
                        </Col>
                    </Row>
                </ScrollView>
            </View>
        );
    }
};

const TextHeaderCreditCardDetails = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${height('4.1%')};
    color: gray;
`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const mapStateToProps = (state) => ({
    login: state,
    paymentCreditCard: state.paymentCreditCard
});
  
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators({postPaymentTransferCreditCard}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingPaymentCreditCard);
