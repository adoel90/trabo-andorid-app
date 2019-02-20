import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const TextTotalDay = ({value, fontSize}) => (

    <TextElement fontSize={fontSize}>
        <Icon 
            name="access-time" 
            size={14}
            style={{ marginRight: 15, marginTop: 4, bottom:0 }}
            // style={[styles, textStyles]}
            color="gray"
        />
        { value }

    </TextElement>
)
  
const TextElement = styled.Text`
    font-family: 'TraboRobotoMedium';
    font-size: ${props => props.fontSize};
    color: gray;
    margin-bottom: 4px;
`

export default TextTotalDay;