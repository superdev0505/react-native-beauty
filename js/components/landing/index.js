
import React, { Component } from 'react';
import { ImageBackground, Image, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text,Thumbnail, Header, Left, Right, Body, InputGroup, Input,Item, Button, Icon, View, Title } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import styles from './styles';
import { openDrawer } from '../../actions/drawer';
import Carousel from 'react-native-looped-carousel-improved';
import { MaterialIcons } from '@expo/vector-icons';

const logo = require('../../../images/whitelogo.png');
const data = [
  {
    imageUrl: require("../../../images/landing1.png"),
    text: "Beautiful You is a total beauty experience for your face and hands.",
    index: 1
  },
  {
    imageUrl: require("../../../images/landing2.png"),
    text: "Virtually try-on products and make-up for your eyes, cheeks, lips, hair and nails.",
    index: 2
  },
  {
    imageUrl: require("../../../images/landing3.png"),
    text: "Easily find the best products to fit your beauty personality.  ",
    index: 3
  },
  {
    imageUrl: require("../../../images/landing4.png"),
    text: "Utilize the personal beauty consultant as a personal shopper ",
    index: 4
  },
  {
    imageUrl: require("../../../images/landing5.png"),
    text: "Engage with the Beautiful You community for the latest trends, tips & tricks and how-to tutorials.",
    index: 5
  }
];
const { width, height } = Dimensions.get('window');
class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      size: { width: width, height: 240 },
    };
  }
  
  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: 240 } });
  }

  render() {
    return (
      <Container>

        
        <Content  style={{ backgroundColor: '#fff' }} >
          <Thumbnail source={logo} style={styles.shadow} />
          <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
            <Carousel
              arrows={true}
              delay={2000}
              style={this.state.size}
              autoplay
              isLooped
              rightArrowText={<Icon name="ios-arrow-forward" style={{color: '#fff', fontSize: 40 }} />}
              rightArrowStyle={{margin:5, paddingTop: 30}}
              leftArrowText={<Icon name="ios-arrow-back" style={{color: '#fff', fontSize: 40 }} />}
              leftArrowStyle={{margin:5, paddingTop: 30}}
              bullets={true}
              // onAnimateNextPage={(p) => console.log(p)}
            >
              {
                data.map(item => (
                  <View key={item.index} style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={item.imageUrl} style={[this.state.size, {flex: 1, resizeMode: 'cover'}]}></Image>
                    <Text style={{position: 'absolute', lineHeight: 25, fontSize: 18, color: '#000000', padding: 25, backgroundColor:'transparent', textAlign: 'center', fontWeight:'500' }}>{item.text}</Text>
                  </View>
                ))
              }
            </Carousel>
          </View>
          <View style={styles.inputContainer}>
            
            


            <Button style={[styles.normalButton, {borderWidth:0}]}  onPress={() => Actions.login()}>
                <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 20, color: '#4a4a4a' }}>Already have an account?</Text>
            </Button>
            <Button style={styles.registerButton}  onPress={() => Actions.register()}>
                <Text style={{ fontWeight: '700', fontSize: 14, lineHeight: 20, color: '#fff' }}>Create Account</Text>
            </Button>
            <Button style={styles.normalButton}>
                <Text style={{ fontWeight: '700', fontSize: 14, lineHeight: 20, color: '#4a4a4a' }}>Login with Target</Text>
            </Button>
            <Button style={styles.normalButton}>
                <Icon name="logo-twitter" style={styles.twitterIcon} />
                <Text style={{ fontWeight: '700', fontSize: 14, lineHeight: 20, color: '#4a4a4a' }}>
                  Continue with Twitter
                </Text>
            </Button>
            <Button style={styles.normalButton}>
                <Icon name="logo-facebook" style={styles.facebookIcon} />
                <Text style={{ fontWeight: '700', fontSize: 14, lineHeight: 20, color: '#4a4a4a' }}> 
                  Continue with Facebook
                </Text>
            </Button>
            <View style={styles.textWrap}>
              <Text style={styles.termsText} >By signing up, you agree with the </Text>
              <Text style={styles.hyperText}>Terms of Services</Text>
              <Text style={styles.termsText}> and </Text>
              <Text style={styles.hyperText}>Privacy Policy</Text>
            </View>
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

export default connect(mapStateToProps, bindAction)(Landing);
