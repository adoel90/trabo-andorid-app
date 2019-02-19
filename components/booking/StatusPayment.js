import React from 'react';
import { Text } from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';

const StatusPayment = ({value, fontSize}) => (

    <TextStatusPayment fontSize={fontSize}>
      {value}
    </TextStatusPayment>
  )
  
  const TextStatusPayment = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${props => props.fontSize};
    color:#1ea0b1;
  `

export default StatusPayment;
  