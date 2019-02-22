import React from 'react';
import { View, Button, AsyncStorage, StyleSheet, Text, ScrollView} from 'react-native';
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
            <Container>
                <ScrollView>
                
                    <RowCalculatePrice>
                        <Button title="CALCULATE PRICE" color="#f16724" style={{marginTop: 10, marginRght: 10}}></Button>
                    </RowCalculatePrice>
                    
                    {/** <CardView>*/}
                        <RowTextPayment>
                            <TextPayment>Payment</TextPayment>
                        </RowTextPayment>                    
                        
                        <ContainerSecond>
                            <ResponsiveBox>
                                <TextSubtotalServiceChargeDiscountCommision>
                                    Sub total
                                </TextSubtotalServiceChargeDiscountCommision>
                            
                                <TextSubtotalServiceChargeDiscountCommision style={{marginRight: 20}}>
                                    Service Charge
                                </TextSubtotalServiceChargeDiscountCommision>

                                <TextHeadingTwo style={{marginTop: 20}}>IDR 131,000,000</TextHeadingTwo>
                                <TextHeadingTwo style={{marginTop: 20}}>IDR 50,000</TextHeadingTwo>
                            </ResponsiveBox>
                        </ContainerSecond>

                        {/**
                        <ContainerSecond>
                            <ResponsiveBox>
                                <DemoText>This box is always of 84.5% width and 17% height.</DemoText>
                                <DemoText>Test it by running this example repo in phones/emulators with screens of various dimensions and pixel per inch (ppi).</DemoText>
                            </ResponsiveBox>
                        </ContainerSecond>

                         */}

                    {/* </CardView>*/}
                </ScrollView>
            </Container>
        );
    }
}

const Container = styled.View`
    flex: 1;
`;

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
  margin-top: 20;
  margin-bottom:0; 

`;

const RowTextPayment = styled.View`
    margin: 15px;
`;

const TextPayment = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${height('6%')};
    color: black;
`;

const TextHeadingTwo = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${height('3.5%')};
    color: black;
`;

const TextSubtotalServiceChargeDiscountCommision = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${height('1.5%')};
    color: gray;
`;

//********************************** */
const ContainerSecond = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const ResponsiveBox = styled.View`
  width: ${width('84.5%')};
  height: ${height('17%')};
  border-width: 2;
  border-color: orange;
  flex-direction: row;
  justify-content: space-around; 
`;

const DemoText = styled.Text`
  color: gray;
`;

// const RowSubTotalAndServiceCharge = styled.View`
//     margin: 15px;
// `;



//*These css for column i mean, but not work 
// const styles = StyleSheet.create({
//     rowSubTotalAndServiceCharge: {
//         flexDirection:'row',
//         justifyContent:'space-between',
//         backgroundColor: 'white',
//         marginLeft: 5,
//         marginRight: 24,
//         marginBottom: 24
//     }
//   });


  


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
