import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const IconGeneralInActive = ({name,size, onPress}) => (

   
    <Icon 
        name={name}
        size={20}
        // style={{ marginRight: 15, marginTop: 4, bottom:0 }}
        // style={[styles, textStyles]}
        color="gray"
    />
)

export default IconGeneralInActive;