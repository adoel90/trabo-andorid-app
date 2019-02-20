import React from 'react';
import styled from 'styled-components/native';

const TextGeneralBold = ({value, fontSize}) => (

  <TextElement fontSize={fontSize}>
    {value}
  </TextElement>
)

const TextElement = styled.Text`
    font-size: ${props => props.fontSize};
    font-weight: bold;
    font-family: 'TraboRobotoMedium';
`

export default TextGeneralBold;