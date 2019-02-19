
import React from 'react';
import { View, Button, AsyncStorage, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postUserLogin } from '../actions/login';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

class SignInScreen extends React.Component {

    static navigationOptions = {
        title: 'Please sign in',
    };

    constructor(props){
        super(props)
    
    }

    componentDidMount(){

 
    
    };

    componentDidUpdate(prevProps){

        const { login } = this.props;
        // if(prevProps.login != login){
        //     console.log(this.props)
        // }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign in!" onPress={this._signInAsync} />
            </View>
            );
        }

    _signInAsync = async () => {
        // await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Drawer');

        /* For a while, we "HARD CODE" in here !!! */
        const { action } = this.props;
        let data = {
            client_id: "8",
            client_secret :"Ea0wMDF3k6LaK59ZrfCCQw5BYcqu89rQbX2RsB9c",
            grant_type:"password",
            password: "trabo2019",
            username: "wisatamusi@gmail.com"
            };
        
        action.postUserLogin(data);
    };
}


const mapStateToProps = (state) => ({
    login: state,
    product:state,
    bookingCalendar: state,
    product: state
  });
  
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators({postUserLogin}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
