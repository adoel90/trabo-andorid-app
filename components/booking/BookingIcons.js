import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons'


const BookingIcons = ({nameIcon, sizeIcon}) => (

    <Icon 
        // name="menu" 
        name={nameIcon}
        // size={26}
        size={sizeIcon}
        style={{ marginRight: 5, marginLeft: 5 }}
        // style={[styles, textStyles]}
        color="gray"
    />
)

export default BookingIcons;
  
