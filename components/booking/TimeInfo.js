import React from 'react';
import styled from 'styled-components/native';


const TimeInfo = ({value, fontSize}) => (

    <TextElement fontSize={fontSize}>
        { value }
    </TextElement>
)
  
const TextElement = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${props => props.fontSize};
    color:gray;
`

export default TimeInfo;