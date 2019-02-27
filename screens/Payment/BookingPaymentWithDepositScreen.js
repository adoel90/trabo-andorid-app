
import React from 'react';
import { View, Button, AsyncStorage, StyleSheet, Text, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import {widthPercentageToDP as width, heightPercentageToDP as height} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { TextField } from 'react-native-material-textfield';
// import { postPaymentTransferCreditCard } from '../../actions/payment_credit';

class BookingPaymentWithDepositScreen extends React.Component {

    static navigationOptions = {
        title: '.',
    };

    constructor(props){
        super(props);
        this.handleBackToPaymentOption = this.handleBackToPaymentOption.bind(this);
        this.handleSavePaymentDeposit = this.handleSavePaymentDeposit.bind(this);

        this.state = {
            paymentAmount:'',
            accessToken: null
        };
    };

    componentDidMount(){

    };

    componentDidUpdate(prevProps){
      
    };

    handleBackToPaymentOption = (e) => {
        e.preventDefault();
        this.props.navigation.navigate('BookingPayment');

    };

    handleSavePaymentDeposit = async (e) => {

        e.preventDefault();

        const paramsAccessTokenMobile = await AsyncStorage.getItem("accessTokenMobile");
        const accessTokenMobile = JSON.parse(paramsAccessTokenMobile);

        //*Only want to store "token".
        this.setState({
            ...this.state,
            accessToken: accessTokenMobile
        });
        //********************************** */

        // const { action } = this.props;

        // const data = {
            
        //     transaction_code:"1",
        //     token_id: "5bb1ca566225f3d717b71c34",
        //     access_token: accessTokenMobile.access_token
            
        // };

        // console.log("Data From Button Save : ", data)
        // action.postPaymentTransferCreditCard(data);
    };

    render() {

        const { paymentAmount } = this.state;

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
                            <TextHeaderCreditCardDetails>Make a deposit payment</TextHeaderCreditCardDetails>
                        </Col>
                    </Row>

                    {/** PARTIAL PAYMENT AMOUNT */}
                    <Row size={12} style={{margin: 12}}>
                        <Col sm={12}>
                            <TextField
                                label='Partial payment amount'
                                value={paymentAmount}
                                labelTextStyle={{fontFamily:'TraboRobotoMedium'}}
                                onChangeText={ (paymentAmount) => this.setState({ paymentAmount }) }
                                // animationDuration={150}
                                containerStyle={{marginLeft:7}}
                            />  
                        </Col>
                    </Row>

            
                    <Row size={12} style={{margin: 15}}>
                        <Col sm={7}>
                        
                        </Col>
                        <Col sm={5}>
                            <Button title="SAVE" color="#f16724" onPress={(e) => this.handleSavePaymentDeposit(e)}></Button>
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
    login: state
});
  
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators({}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingPaymentWithDepositScreen);
