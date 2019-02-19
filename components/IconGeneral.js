import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const IconGeneral = ({name,size}) => (

   
    <Icon 
        // name="person-outline" 
        name={name}
        size={20}
        // style={{ marginRight: 15, marginTop: 4, bottom:0 }}
        // style={[styles, textStyles]}
        color="#f16724"
    />
)

export default IconGeneral;