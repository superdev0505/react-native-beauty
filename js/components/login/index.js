
import React, { Component } from 'react';
import { Image, Platform, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text,Thumbnail, Header, Left, Right, Body, InputGroup, Input,Item, Button, Icon, View, Title } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import styles from './styles';
import { openDrawer } from '../../actions/drawer';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const logo = require('../../../images/whitelogo.png');

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      scroll: false,
    };
  }
  checkCredential(){
    if(this.state.email && this.state.password){
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(this.state.email.toLowerCase()) === false)
      {
        Alert.alert(
           "Incorrect email format"
        )
        console.log("Incorrect email format");
        return false;
      }
      else{
        if(((this.state.email.toLowerCase())=="test@gmail.com") && (this.state.password=="test123")){
          Actions.home();
        }
        else{
          Alert.alert(
             "Incorrect email and password"
          )

          console.log("Incorrect email and password")
        }
      }
    }
    else{
      Alert.alert(
         "Please input your email and password"
      )

      console.log("Please input your email and password")
    }
  }
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'white', borderBottomWidth: 0 }}>
          <Left >
            <Button style={{backgroundColor: 'white'}} onPress={() => Actions.pop()} >
              <Feather name="arrow-left" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
            </Button>
          </Left>
          <Right >
            <Button style={{backgroundColor: 'white'}} onPress={this.props.openDrawer} >
              <MaterialIcons name="menu" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
            </Button>
          </Right>
        </Header>
        <Content  style={{ backgroundColor: '#fff' }} >
          <Thumbnail source={logo} style={styles.shadow} />
          <View style={styles.inputContainer}>
            <Text style={styles.headerText}>Sign in to continue</Text>
            <Item style={{ marginTop: 20, marginBottom: 15, borderBottomWidth:1 }}>

                <Input
                  style={{ color: '#4a4a4a', fontSize: 14, fontWeight: '700'}}
                  placeholder="Email"
                  placeholderTextColor="#949494"
                  onChangeText={email => this.setState({ email })}
                />
             </Item>

            <Item style={{ marginBottom: 15, borderBottomWidth:1 }}>

                <Input
                  style={{ color: '#4a4a4a', fontSize: 14, fontWeight: '700' }}
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor="#949494"
                  onChangeText={password => this.setState({ password })}
                />

            </Item>

            <Button transparent style={styles.forgot}>
                    <Text style={styles.forgotText}>Forgot Password or Email?</Text>
            </Button>
            <Button style={styles.login} onPress={() => this.checkCredential()}>
                <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 20 }}>Sign In</Text>
            </Button>
            <Text style={styles.divide}>Or</Text>
            <Button style={styles.registerButton} onPress={() => Actions.register()}>
                <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 20, color: '#c34097' }}>Create Account</Text>
            </Button>
            <Button style={styles.normalButton} onPress={() => Actions.home()}>
                <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 20, color: '#4a4a4a' }}>Login with Target</Text>
            </Button>
            <Button style={styles.normalButton} onPress={() => Actions.home()}>
                <Icon name="logo-twitter" style={styles.twitterIcon} />
                <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 20, color: '#4a4a4a' }}>
                  Continue with Twitter
                </Text>
            </Button>
            <Button style={styles.normalButton} onPress={() => Actions.home()}>
                <Icon name="logo-facebook" style={styles.facebookIcon} />
                <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 20, color: '#4a4a4a' }}> 
                  Continue with Facebook
                </Text>
            </Button>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Button
              transparent
              style={{...styles.transparentButton, paddingRight: 0, paddingLeft: 0}}
            >
            <Text style={{ color:'#fff' }}>Do not have an account? </Text>
            </Button>
            <Button
              transparent
              style={styles.transparentButton}
            >
              <Text style={{ textDecorationLine: 'underline',color:'#fff' }}>Sign up here</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, bindAction)(Login);
