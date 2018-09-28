
import React, { Component } from 'react';
import { Image, Platform, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text,Thumbnail, Header, Left, Right, Body, InputGroup, Input,Item, Button, Icon, View, Title } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import styles from './styles';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { openDrawer } from '../../actions/drawer';


const logo = require('../../../images/whitelogo.png');

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      scroll: false,
    };
  }
  checkCredential(){
    if(this.state.email && this.state.password && this.state.firstName && this.state.lastName){
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
        Actions.home();
      }
    }
    else{
      Alert.alert(
         "Please fill the gaps"
      )

      console.log("Please fill the gaps")
    }
  }
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'white', borderBottomWidth: 0}}>
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
            <Item style={{ marginTop: 20, marginBottom: 10, borderBottomWidth:2 }}>

              <Input
                style={{ color: '#4a4a4a', fontSize: 14, fontWeight: '700'}}
                placeholder="First Name"
                placeholderTextColor="#949494"
                onChangeText={firstName => this.setState({ firstName })}
                />
            </Item>
            <Item style={{ marginBottom: 10, borderBottomWidth:2 }}>

              <Input
                style={{ color: '#4a4a4a', fontSize: 14, fontWeight: '700'}}
                placeholder="Last Name"
                placeholderTextColor="#949494"
                onChangeText={lastName => this.setState({ lastName })}
                />
            </Item>
            <Item style={{ marginBottom: 10, borderBottomWidth:2 }}>

              <Input
                style={{ color: '#4a4a4a', fontSize: 14, fontWeight: '700'}}
                placeholder="Email"
                placeholderTextColor="#949494"
                onChangeText={email => this.setState({ email })}
                />
            </Item>

            <Item style={{ marginBottom: 30, borderBottomWidth:2 }}>

                <Input
                  style={{ color: '#4a4a4a', fontSize: 14, fontWeight: '700' }}
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor="#949494"
                  onChangeText={password => this.setState({ password })}
                />

            </Item>

            <Button style={styles.register} onPress={() => this.checkCredential()}>
                <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 20 }}>Create Account</Text>
            </Button>
            <View style={styles.textWrap}>
              <Text style={styles.termsText} >By signing up, you agree with the </Text>
              <Text style={styles.hyperText} onPress={() => Actions.home()}>Terms of Services</Text>
              <Text style={styles.termsText}> and </Text>
              <Text style={styles.hyperText}>Privacy Policy</Text>
            </View>
            <Button style={styles.normalButton} onPress={() => Actions.login()}>
                <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 20, color: '#4a4a4a' }}>Already have an account?</Text>
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

export default connect(mapStateToProps, bindAction)(Register);
