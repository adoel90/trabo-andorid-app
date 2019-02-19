import React from 'react';
import styled from 'styled-components/native';

const TextGeneral = ({value, fontSize}) => (

  <TextElement fontSize={fontSize}>
    {value}
  </TextElement>
)

const TextElement = styled.Text`
  font-family: 'TraboRobotoMedium';
  font-size: ${props => props.fontSize};
`

export default TextGeneral;