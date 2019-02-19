import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';

const TextDate = ({value, fontSize}) => (

    <TextElement fontSize={fontSize}>
      {value}
    </TextElement>
  )
  
const TextElement = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${props => props.fontSize};
    color: black;
`

export default TextDate;