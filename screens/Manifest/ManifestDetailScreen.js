
import React from 'react';
import { View, AsyncStorage, StyleSheet, Text, NativeModules, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled, {ThemeProvider} from 'styled-components/native';

import { Toolbar, COLOR, ThemeContext, getTheme, Card, Avatar, Button} from 'react-native-material-ui';


class ManifestDetailScreen extends React.Component {

    static navigationOptions = {
        title: 'Cajoma IV, Indonesia',
    };

    constructor(props){
        super(props);
        this.handleModalPickDate = this.handleModalPickDate.bind();
    
    };

    componentDidMount(){

    };

    componentDidUpdate(prevProps){

    };

    handleModalPickDate = (e) => {
        e.preventDefault();
        Alert.alert("In here you put list of dates... ");
    }
    
    render() {

        // <View style={styles.container}> 
        return (
            <ThemeContext.Provider value={getTheme(uiTheme)}>
                <View>
                    <Toolbar
                        // leftElement="menu"
                        centerElement="TOUR IN LOMBOK"
                        searchable={{
                                autoFocus: true,
                                placeholder: 'Search by contact email or trx id',
                            }}
                        // rightElement={{
                        //     menu: {
                        //         icon: "more-vert",
                        //         labels: ["item 1", "item 2"]
                        //     }
                        // }}
                        // onRightElementPress={ (label) => { console.log(label) }}
                        // theme = {{backgroundColor: 'yellow'}}
                        
                        // style={{titleText: 'TraboRobotoMedium'}}
                        style={{
                            fontFamily: 'TraboRobotoMedium'
                        }}
                    />
                    <TouchableOpacity>
                        <TextDate onPress={(e) => this.handleModalPickDate(e)}>
                            Sat, 18 Aug 2018
                        </TextDate>
                    </TouchableOpacity>

                    <BorderBottomView></BorderBottomView>
                    {/* <Avatar text="09.00 AM" />*/}
                    <Button raised primary text="09.00 AM" /> 
                    
                    <Card>
                        <Text>Data From Manifest List with parameter Date & Time</Text>
                    </Card>
                </View>
            </ThemeContext.Provider>
            );
        }
};

const uiTheme = { //==> Change Theme : https://github.com/xotahal/react-native-material-ui/blob/master/docs/Usage.md
    palette: {
    //   primaryColor: COLOR.green500,
        primaryColor: '#4855b7' 
    },
    toolbar: {
      container: {
        height: 60,
      },
    },
    fontFamily: 'TraboRobotoMedium'
  };

const TextDate = styled.Text`
  font-family: 'TraboRobotoMedium';
  font-size: 20px;
  margin: 13px;
  text-align: left;
  color: black;
`

const BorderBottomView = styled.View`
  background: white;
  border-width: 1;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 1};
  shadow-opacity: 0.8;
  elevation: 0.5;
  margin-left: 0;
  margin-right: 0;
  margin-top: 4;
  margin-bottom:10; 
`

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const mapStateToProps = (state) => ({
    login: state
  });
  
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators({}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ManifestDetailScreen);

