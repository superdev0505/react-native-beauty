import React, { Component } from 'react';
import { Image, ScrollView, TouchableHighlight, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import autobind from 'class-autobind';
import { Container, View, Text, Button, Icon, Item, Input, Switch, Thumbnail, Header, Left, Right , Title} from 'native-base';
import styles from './styles';
import { Feather, FontAwesome, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import Stars from 'react-native-stars-rating';
import { Font } from 'expo';
import { Actions, ActionConst } from 'react-native-router-flux';
import { openDrawer } from '../../actions/drawer';import Carousel from 'react-native-snap-carousel';
import FooterTabs from '../footerTabs';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modalbox';
import PropTypes from 'prop-types';
const { width, height } = Dimensions.get('window');
const SLIDE_WIDTH = Math.round(width / 3);
const ITEM_WIDTH = SLIDE_WIDTH;
const SLIDER_WIDTH = height;


const logo = require('../../../images/whitelogo.png');
const slideimages = [
  {
    source: require('../../../images/OfferBanner.jpg')
  },
  {
    source: require('../../../images/OfferBanner.jpg')
  },
  {
    source: require('../../../images/OfferBanner.jpg')
  }
]
const products = [
  {
    image: require('../../../images/Covergirl.png'),
    name: 'COVERGIRL* LashBlast Volume Mascara',
    rating: 4
  },
  {
    image: require('../../../images/Maybelline.png'),
    name: 'Maybelline Sensational Powder Matte Lipstick',
    rating: 3
  },
  {
    image: require('../../../images/Pop-arazzi.png'),
    name: 'Pop-arazzi Special Effects Nail Polish, Never Too Rich 104',
    rating: 5
  },
  {
    image: require('../../../images/Covergirl.png'),
    name: 'COVERGIRL* LashBlast Volume Mascara',
    rating: 4
  },
  {
    image: require('../../../images/Maybelline.png'),
    name: 'Maybelline Sensational Powder Matte Lipstick',
    rating: 3
  },
  {
    image: require('../../../images/Pop-arazzi.png'),
    name: 'Pop-arazzi Special Effects Nail Polish, Never Too Rich 104',
    rating: 5
  }
]
class Home extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: PropTypes.func,
  }
  state = {
    fontLoaded: false,
  };
  _renderItemSlider ({item, index}) {
      return (
          <View key={index}  style={{marginTop: 40, width: width/3, marginBottom:80, borderRightWidth: 1, borderRightColor: '#ccc'}}>
            <View style={{flexDirection: 'column', flex: 1, padding: 10}}>
              <Image style={{width: 40, height: 70, resizeMode: 'contain', }} source={item.image}/>
              <Text style={{fontSize: 12, height: 50, marginTop: 5, fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto'}}>
                {item.name}
              </Text> 
              <Stars
                isActive={true}
                rateMax={5}
                isHalfStarEnabled={false}
                isActive={false}
                rate={item.rating}
                size={20}
                color='#B51E56'
              />
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <MaterialCommunityIcons name="plus-circle-outline" style={{ color: '#c34097', fontSize: 20, lineHeight: 32, fontWeight: '900' }} />
                <MaterialCommunityIcons name="heart-outline" style={{ color: '#c34097', fontSize: 20, lineHeight: 32, fontWeight: '900' }} />
              </View>
            </View>
          </View>
      );
  }
  async componentDidMount() {
    await Font.loadAsync({
      'JosefinSans-Regular': require('../../../assets/josefin-sans/JosefinSans-Regular.ttf'),
      'JosefinSans': require('../../../assets/josefin-sans/JosefinSans-Bold.ttf'),
      'JosefinSans-Thin': require('../../../assets/josefin-sans/JosefinSans-Thin.ttf'),
      'JosefinSans-Light': require('../../../assets/josefin-sans/JosefinSans-Light.ttf'),
      'FreshScript': require('../../../assets/FreshScript.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() { // eslint-disable-line class-methods-use-this
    
    return (
      <Container >
        <Header style={{backgroundColor: 'white', borderBottomWidth: 0, shadowColor: '#ccc', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 3, height: 95 }}>
            
            <Left style={{minWidth: 65}}>
              <Item  onPress={()=> Actions.home()} style={{borderBottomWidth:0}}>
                <Thumbnail style={{height: 60, width: 60}} source={logo}/>
              </Item>
            </Left>
            <View style={{marginTop: 25}}>
              <Text style={{fontSize:18, color: '#B51E56', letterSpacing: 0.5, fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto'}}>
                Hi, Jessica!
              </Text>
              <Text style={{fontSize:10,  marginTop: 5,fontFamily:'700', color: '#000', fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto'}}>
                Your beauty profile is 80% complete
              </Text>
            </View>
            <Right>
              <Button style={{backgroundColor: 'white'}} onPress={this.props.openDrawer} >
                <MaterialIcons name="menu" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>
          <Modal  backdrop={false}  position={"top"} ref={"modal"}>
            <View style={{alignItems: 'center', alignSelf:'center', justifyContent: 'center', flex: 1}}>
              <TouchableOpacity  onPress={()=> Actions.home()} >
                <Image style={{width:200, height:200}} source={require('../../../images/whitelogo.png')}/>
              </TouchableOpacity>
              <Entypo onPress={()=> this.refs.modal.close()} name="chevron-thin-down" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              <Button style={{height: 60, width: 200, paddingLeft:0,paddingRight:0,  borderRadius: 0, backgroundColor: '#c34097', marginTop: 20}} onPress={()=>Actions.virtualMakeOver()}><Text style={{width: '100%', textAlign:'center', fontSize: 13, lineHeight:14}}>Go To Facial Make Up</Text></Button>
              <Button style={{height: 60, width: 200, paddingLeft:0,paddingRight:0, borderRadius: 0, borderColor:'#4a4a4a', borderWidth: 1, backgroundColor: '#fff', marginTop: 20}} onPress={()=>Actions.nail()}><Text style={{color:'#4a4a4a', fontSize: 13, lineHeight:14, width: '100%', textAlign:'center'}}>Go To Nails Make Up</Text></Button>
            </View>
          </Modal>
          <ScrollView>
          <View style={{height: 44}}>
            <Swiper size={44} horizontal={false} autoplay activeDotColor="white" dotColor="#ccc" dotStyle={{borderColor:'white', borderWidth: 1}}>
              {
                slideimages.map((item, index) => (
                  <View key={index} style={styles.slide}>
                    <Image resizeMode='stretch' style={styles.slideImage} source={item.source}/>
                  </View>
                ))
              }
            </Swiper>
          </View>
          <View style={{borderWidth: 4, borderColor: "#b01e53", flexDirection: 'row', flex: 1}}>
            <Item onPress={()=> this.refs.modal.open()} style={{flexDirection:'row', width: '100%', flex:1}}>
              <View style={{flexDirection:'row', flex: 1, width: '100%'}}>
                <Image source={require('../../../images/VirtualMakeover.jpg')} style={{flex: 1, alignSelf:'stretch', alignItems:'stretch', width:'100%', resizeMode:'stretch'}} />
                <View style={{position: 'absolute', bottom: 10, left: 0, alignItems: 'center', width: '100%'}}>
                  <Text style={{color: '#B51E56', fontSize: 50, fontFamily:this.state.fontLoaded?'FreshScript':'Roboto', fontWeight: '700', marginBottom:0, paddingBottom:0, lineHeight: 50}}>
                    virtual
                  </Text>
                  <Text style={{color: '#4a4a4a', fontSize: 25, fontFamily:this.state.fontLoaded?'JosefinSans':'Roboto', marginBottom:5, marginTop:-7, paddingTop:0, lineHeight:25}}>
                    makeover
                  </Text>
                  <View style={{alignItems: 'center', flexDirection:'row', maxWidth: '90%', flexWrap: 'wrap',  justifyContent:'center'}}>
                    <Text style={{color: '#B51E56', fontSize: width>=375?14:12, fontFamily:this.state.fontLoaded?'JosefinSans':'Roboto'}}>
                      a total beauty experience 
                    </Text>

                    <Text style={{color: '#4a4a4a', marginLeft: 5, fontSize: width>=375?14:12, fontFamily:this.state.fontLoaded?'JosefinSans-Regular':'Roboto'}}>
                      for your face, hair and nails
                    </Text>
                  </View>
                </View>
              </View>
            </Item>
          </View>
          
          <View style={{borderWidth: 4, borderTopWidth: 0, borderColor: "#b01e53", flexDirection: 'row', flex: 1}}>
            <Image source={require('../../../images/BeautyConsultant.jpg')} style={{flex: 1}} />
            <View style={{position: 'absolute', bottom: 10, left: 0, alignItems: 'center', flexDirection: 'row', width: '94%', marginLeft: '3%', justifyContent: 'center'}}>
              <Text style={{color: '#B51E56', fontSize: 45, fontFamily: this.state.fontLoaded?'FreshScript':'Roboto'}}>
                personal
              </Text>
              <Text style={{paddingLeft: 5, color: '#4a4a4a', fontSize: 20, fontFamily: this.state.fontLoaded?'JosefinSans-Regular':'Roboto'}}>
                beauty consultant
              </Text>
            </View>
          </View>
          <View style={{borderWidth: 2, borderTopWidth: 0, borderColor: "#b01e53", flexDirection: 'row', flex: 1}}>
            <View style={{borderWidth: 2, borderTopWidth: 0, borderColor: "#b01e53", flexDirection: 'row', flex: 1}}>

              <Image source={require('../../../images/Trending.jpg')} style={{flex: 1, width: '100%', height: 150, alignItems:'stretch',alignSelf:'stretch', resizeMode:'stretch'}} />
              <View style={{position: 'absolute', bottom: 15, left: 0, alignItems: 'center', flexDirection:'column', width: '100%'}}>
                <Text style={{color: '#4a4a4a', fontSize: 24, fontFamily: this.state.fontLoaded?'JosefinSans-Regular':'Roboto'}}>
                  trending
                </Text>
                <Text style={{color: '#B51E56', fontSize: 30, fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto'}}>
                  now 
                </Text>
              </View>
            </View>
            <View style={{borderWidth: 2, borderTopWidth: 0, borderColor: "#b01e53", flexDirection: 'row', flex: 1}}>
              <Item onPress={()=> Actions.community()} style={{flexDirection:'row', flex: 1,  width: '100%'}}>
                <View style={{flexDirection:'row', flex: 1, width: '100%'}}>
                  <Image source={require('../../../images/Community.jpg')} style={{flex: 1, width: '100%', height: 150, alignItems:'stretch',alignSelf:'stretch', resizeMode:'stretch'}}/>
                
                  <View style={{position: 'absolute', bottom: 15, left: 0, alignItems: 'center',  width: '100%'}}>
                    <Text style={{color: '#4a4a4a', fontSize: 24, fontFamily: this.state.fontLoaded?'JosefinSans-Regular':'Roboto'}}>
                      your
                    </Text>
                    <Text style={{color: '#B51E56', fontSize: 30, fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto'}}>
                      community
                    </Text>
                  </View>
                </View>
              </Item>
            </View>
          </View>
          <View style={{borderWidth: 2, borderTopWidth: 0, borderColor: "#b01e53", flexDirection: 'row', flex: 1}}>
            <View style={{borderWidth: 2, borderTopWidth: 0, borderColor: "#b01e53", flexDirection: 'row', flex: 1}}>

              <Image source={require('../../../images/Target-store-image-homepage-todaysoffers.jpg')} style={{flex: 1, width:'100%', height:150, alignSelf:'stretch'}} />
              <View style={{position: 'absolute', bottom: 15, left: 0, alignItems: 'center',  width: '100%'}}>
                    <Text style={{color: '#4a4a4a', fontSize: 24, fontFamily: this.state.fontLoaded?'JosefinSans-Regular':'Roboto'}}>
                      today's
                    </Text>
                    <Text style={{color: '#B51E56', fontSize: 30, fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto'}}>
                      offers
                    </Text>
                  </View>
            </View>
            <View style={{borderWidth: 2, borderTopWidth: 0, borderColor: "#b01e53", flexDirection: 'row', flex: 1}}>
              
              <Image source={require('../../../images/UltimateBeautyExperience.jpg')} style={{flex: 1,  width:'100%', height:150, alignSelf:'stretch'}} />
              <View style={{position: 'absolute', bottom: 15, left: 0, alignItems: 'center', width: '100%'}}>
                <Text  style={{color: '#4a4a4a', fontSize: 24, fontFamily: this.state.fontLoaded?'JosefinSans-Regular':'Roboto'}}>
                  ultimate beauty
                </Text>
                <Text  style={{color: '#B51E56', fontSize: 30, fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto'}}>
                  experience
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '80%', marginLeft: '10%', backgroundColor: '#000', alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, backgroundColor: '#fff'}}>
            <FontAwesome name="angle-double-down" style={{ color: '#B51E56', fontSize: 30, lineHeight: 32, fontWeight: '100' }} />
            <Text style={{color: '#B51E56', fontSize:18, fontWeight: '700', fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto'}}> beauty picks</Text>
            <Text style={{color: '#4a4a4a', fontSize:18, fontWeight: '700', fontFamily: this.state.fontLoaded?'JosefinSans':'Roboto'}}> just for you </Text>
            <FontAwesome name="angle-double-down" style={{ color: '#4a4a4a', fontSize: 30, lineHeight: 32, fontWeight: '100' }} />
          </View>
          <View>
            <Carousel 
                autoplay={false}
                renderItem={this._renderItemSlider.bind(this)}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                activeSlideAlignment={'start'}
                inactiveSlideScale={1}
                loop={true}
                data={products}
                autoplayDelay={0}
                autoplayInterval={1500}
                inactiveSlideOpacity={1}
            />
          </View>
        </ScrollView>

        <FooterTabs/>

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

export default connect(mapStateToProps, bindAction)(Home);
