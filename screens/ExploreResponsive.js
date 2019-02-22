import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import {widthPercentageToDP as width, heightPercentageToDP as height} from 'react-native-responsive-screen';
import styled from 'styled-components';

export default class ExploreResponsive extends React.Component {

  static navigationOptions = {
    title: 'Explore Responsive'
    
  };

  render() {
    return (
        <ContainerSecond>
            <ResponsiveBox>
                <DemoText>This box is always of 84.5% width and 17% height.</DemoText>
                <DemoText>Test it by running this example repo in phones/emulators with screens of various dimensions and pixel per inch (ppi).</DemoText>
            </ResponsiveBox>
        </ContainerSecond>
    );
  }
}

 {/**         
    <Container>
        <TextWrapper>
            <Login>Login</Login>
        </TextWrapper>
    </Container>
*/}

const Container = styled.View`
    flex: 1;
`;

const TextWrapper = styled.View`
  
  height: ${height('70%')};
  width: ${width('80%')};
`;

const Login = styled.Text`
  font-size: ${height('45%')};
  margin: 30px;
`;

//******************************* */
const ContainerSecond = styled.View`
  flex: 1;
  background-color: gray;
  align-items: center;
  justify-content: center;
`;

const ResponsiveBox = styled.View`
  width: ${width('84.5%')};
  height: ${height('17%')};
  border-width: 2;
  border-color: orange;
  flex-direction: column;
  justify-content: space-around; 
`;

const DemoText = styled.Text`
  color: gray;
`;



