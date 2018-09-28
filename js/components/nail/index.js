
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Image, Platform, ScrollView, Modal, Dimensions, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { Container, View, Text, Button, Picker, Content, Icon, Card, Item, Input, Switch, Thumbnail, Header, Left, Right, CardItem , Title} from 'native-base';
import styles from './styles';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Feather, MaterialIcons, Entypo, Ionicons} from '@expo/vector-icons';
import FooterTabs from '../footerTabs';
import { openDrawer } from '../../actions/drawer';
import { ImagePicker, FaceDetector, Constants, Camera } from 'expo';

import Carousel from 'react-native-snap-carousel';
import { NativeAdsManager, InterstitialAdManager, BannerView, AdSettings } from 'react-native-fbads';
import FullAd from './FullAd';
import { Slider } from 'react-native-elements';
const { width, height } = Dimensions.get('window');
const SLIDE_WIDTH = Math.round(width  / 5 - 4);
const ALL_ITEM_SLIDE_WIDTH = Math.round(width  / 6);
const ITEM_WIDTH = SLIDE_WIDTH;
const SLIDER_WIDTH = height;
AdSettings.addTestDevice(AdSettings.currentDeviceHash);
const adsManager = new NativeAdsManager('1912255062335197');
const landmarkSize = 4;
const products = [
  {
    image: require('../../../images/Palette.jpg'),
    name: 'Eyeshadow',
    rating: 4
  },
  {
    image: require('../../../images/Eyeliner.jpg'),
    name: 'Eyeliner',
    rating: 3
  },
  {
    image: require('../../../images/Blusher.jpg'),
    name: 'Blusher',
    rating: 5
  },
  {
    image: require('../../../images/Softflex.jpg'),
    name: 'SoftFlex',
    rating: 4
  },
  {
    image: require('../../../images/Mascara.jpg'),
    name: 'Mascara',
    rating: 3
  },
  {
    image: require('../../../images/Lipstick.jpg'),
    name: 'Lipstick',
    rating: 5
  }
]
const prebuiltItems = [
  {
    image: require('../../../images/nail.png'),
    name: 'COVERGIRL* LashBlast Volume Mascara',
    color: '#ff0000',
    addName: 'prebuilt1'
  },
  {
    image: require('../../../images/nail.png'),
    name: 'Maybelline Sensational Powder Matte Lipstick',
    color: '#ff2200',
    addName: 'prebuilt1',
  },
  {
    image: require('../../../images/nail.png'),
    name: 'Pop-arazzi Special Effects Nail Polish, Never Too Rich 104',
    color: '#ff0022',
    addName: 'prebuilt1',
  },
  {
    image: require('../../../images/nail.png'),
    name: 'COVERGIRL* LashBlast Volume Mascara',
    color: '#ff5500',
    addName: 'prebuilt1',
  }
]
const colorItems = [
  {
    image: require('../../../images/nail-white.jpeg'),
    name: 'COVERGIRL* LashBlast Volume Mascara',
    color: '#fff',
    addName: 'white'
  },
  {
    image: require('../../../images/nail-red.jpeg'),
    name: 'Maybelline Sensational Powder Matte Lipstick',
    color: 'red',
    addName: 'red',
  },
  {
    image: require('../../../images/nail-black.jpeg'),
    name: 'Pop-arazzi Special Effects Nail Polish, Never Too Rich 104',
    color: 'black',
    addName: 'black',
  },
  {
    image: require('../../../images/nail-blue.jpeg'),
    name: 'COVERGIRL* LashBlast Volume Mascara',
    color: 'blue',
    addName: 'blue',
  }
]
const productItems = [
  {
    image: require('../../../images/nail.png'),
    name: 'COVERGIRL* LashBlast Volume Mascara',
    color: '#ff0000',
    addName: 'eyeliner1'
  },
  {
    image: require('../../../images/nail.png'),
    name: 'Maybelline Sensational Powder Matte Lipstick',
    color: '#ff2200',
    addName: 'eyeliner1',
  },
  {
    image: require('../../../images/nail.png'),
    name: 'Pop-arazzi Special Effects Nail Polish, Never Too Rich 104',
    color: '#ff0022',
    addName: 'eyeliner1',
  },
  {
    image: require('../../../images/nail.png'),
    name: 'COVERGIRL* LashBlast Volume Mascara',
    color: '#ff5500',
    addName: 'eyeliner1',
  }
]
class Nail extends Component {
  state = {
    faces: {},
    images: {},
    brightness: 1,
    sampleMode: false,
    beforeColor: '',
    selectedPhotoUri: require('../../../images/nailDefault.png'),
    sampleNumber: 1,
    modalVisible: true,
    looktype: 'Unique'
  };
  showFullScreenAd = () => {
    InterstitialAdManager.showAd('1912255062335197')
      .then(didClick => {
        console.log(didClick);
      })
      .catch(err => {
        console.log(err);
      });
  };

  _renderProductSlider ({item, index}) {
      return (
          <View key={index}  style={{marginTop: 0, width: (width/5-4), height:50, borderRightWidth: 1, borderRightColor: '#ccc'}}>
            <View style={{flexDirection: 'column', flex: 1, padding: 0, alignSelf:'center', alignItems:'center'}}>
              <Image style={{width: 40, height: 50, resizeMode: 'contain'}} source={item.image}/>
            </View>
          </View>
      );
  }
  _renderItemSlider ({item, index}) {
      return (
          <View key={index}  style={{marginTop: 0, width: (width/6), height:width/8 - 6}}>
            <View style={{flexDirection: 'column', flex: 1, padding: 0, alignSelf:'center', alignItems:'center'}}>
              <TouchableOpacity style={{borderColor: '#949494', alignItems:'center', justifyContent:'center', backgroundColor: '#fff', width: width/6 - 6, height: width/8 - 6, borderWidth:1, borderRadius: 5}} onPress={()=>{this.setState({selectedPhotoUri: item.image})}}>
                <Image source={item.image} style={{resizeMode:'contain', width: '60%' , height: '100%', alignSelf:'center'}}/>
              </TouchableOpacity>
            </View>
          </View>
      );
  }
  _renderItemSliderPreBuilt ({item, index}) {
      return (
          <View key={index}  style={{marginTop: 0, width: (width/6), height:width/6 - 6}}>
            <View style={{flexDirection: 'column', flex: 1, padding: 0, alignSelf:'center', alignItems:'center'}}>
              <TouchableOpacity style={{borderColor: '#949494', alignItems:'center', justifyContent:'center', backgroundColor: '#fff', width: width/6 - 6, height: width/6 - 6, padding:1, borderWidth:1, borderRadius: 5}} onPress={()=>{this.setState({selectedPhotoUri: item.image})}}>
                <Image source={item.image} style={{resizeMode:'contain', width: '95%' , height: '95%', alignSelf:'center'}}/>
              </TouchableOpacity>
            </View>
          </View>
      );
  }
  _renderItemSliderColor ({item, index}) {
      return (
          <View key={index}  style={{marginTop: 0, width: (width/6), height:width/6 - 6}}>
            <View style={{flexDirection: 'column', flex: 1, padding: 0, alignSelf:'center', alignItems:'center'}}>
              <TouchableOpacity style={{borderColor: '#949494', alignItems:'center', justifyContent:'center', backgroundColor: '#fff', width: width/6 - 6, height: width/6 - 6, padding:1, borderWidth:1, borderRadius: 5}} onPress={()=>{this.setState({selectedPhotoUri: item.image})}}>
                <Image style={{backgroundColor:item.color, resizeMode:'contain', width: '95%' , height: '95%', alignSelf:'center'}}/>
              </TouchableOpacity>
            </View>
          </View>
      );
  }
  render() {
      console.log(Actions.currentScene)
      var that=this;
      return (
        <Container style={{backgroundColor:'white'}}>
          
          
          <Header style={{ backgroundColor: 'black', borderBottomWidth: 0, height: 60}}>
            <Left >
              <Button style={{backgroundColor: 'transparent'}} onPress={() => {this.setState({isPhotoSelected: false, modalVisible:true}); Actions.pop()}} >
                <Feather name="arrow-left" style={{ color: 'white', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Left>
            <View style={{position: 'absolute', top: 23, alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flexDirection:'row'}}>
                <Entypo name="facebook-with-circle" style={{ color: 'white', fontSize: 26, marginLeft: 2, marginRight: 2, lineHeight: 32, fontWeight: '900' }} />
                <Entypo name="twitter-with-circle" style={{ color: 'white', fontSize: 26, marginLeft: 2, marginRight: 2, lineHeight: 32, fontWeight: '900' }} />
                <Entypo name="instagram-with-circle" style={{ color: 'white', fontSize: 26, marginLeft: 2, marginRight: 2, lineHeight: 32, fontWeight: '900' }} />
              </View>
            </View>
            <Right >
              <Button style={{backgroundColor: 'transparent'}} onPress={() => {Actions.shoppingList();}} >
                <MaterialIcons name="shopping-basket" style={{ color: 'white', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>
          <View style={{flex:1,
    justifyContent: 'center', backgroundColor:'transparent', position:'relative'}} 
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
            <Modal animationType="fade" transparent={true} visible={this.state.modalVisible && (Actions.currentScene=='nail')} >
              <TouchableHighlight   onPress={() => {this.setState({modalVisible: false})}}>
                <View style={styles.modalView }>
                  <TouchableWithoutFeedback  onPress={() => {return false;}} >
                    <View style={styles.modalInnerView}>
                      <Text style={{textAlign: 'center', color: '#4a4a4a', fontSize: 16, fontWeight: '500', lineHeight: 25}}>Do you want to start from the Unique Look or Pre-built Look?</Text>
                      <View style={{flexDirection:'row', marginTop: 20}}>
                        <Button onPress={() => {this.setState({modalVisible: false, looktype: 'Unique'});}}
                          style={[styles.popupButton, {backgroundColor: '#c34097'}]}
                        >
                          <Text style={{ color:'#fff', textAlign: 'center', fontSize: 15, fontWeight: '500' }}>Unique</Text>
                        </Button>
                        <Button onPress={() => {this.setState({modalVisible: false, looktype: 'Pre-built'});}}
                          style={[styles.popupButton, {backgroundColor: '#fff', borderWidth: 1, paddingLeft: 0, paddingRight: 0, borderColor: '#4a4a4a'}]}
                        
                        >
                          <Text style={{ color:'#4a4a4a', textAlign: 'center', fontSize: 15, fontWeight: '500' }}>Pre-built</Text>
                        </Button>
                      </View>
                      
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </TouchableHighlight>
            </Modal>
            <View style={{backgroundColor:'white', padding:10, zIndex: 20}}>
              <Carousel 
                  autoplay={false}
                  renderItem={this._renderProductSlider.bind(this)}
                  sliderWidth={width}
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
            <Image source={this.state.selectedPhotoUri} style={{flex:1, zIndex: 9, position:'absolute', top:0, left:0, resizeMode:'contain', width: '100%', height:'100%'}}/>

        
            <View
              style={{
                flex: 1,
                zIndex: 10,
                backgroundColor: 'transparent',
                paddingTop: Constants.statusBarHeight / 2,
              }}>


              <Slider
                value={this.state.brightness}
                orientation="vertical"
                thumbTintColor="white"
                thumbStyle={{borderWidth:1, borderColor:'#ccc'}}
                trackStyle={{borderWidth:1, borderColor:'#ccc'}}
                minimumTrackTintColor ="white"
                style={{width: 280, position:'absolute', top: 150, right: -95}}
                onValueChange={(value) => {this.setState({brightness: value});Expo.Brightness.setBrightnessAsync(value);}} />
              <TouchableOpacity style={[styles.flipButton, {position:'absolute', right: 20, bottom: 30, borderRadius: 50, width:50, height:50, backgroundColor:'rgba(0,0,0,0.7)'}]}>
                <Feather name="download" style={{ color: 'white', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </TouchableOpacity>
              {this.state.beforeColor==''?
                <TouchableOpacity onPress={()=>this.setState({looktype: 'color', beforeColor: this.state.looktype})} style={[styles.flipButton, {position:'absolute', left: 20, bottom: 30, borderRadius: 50, width:50, height:50, backgroundColor:'rgba(0,0,0,0.7)'}]}>
                  <Ionicons name="ios-color-palette" style={{ color: 'white', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
                </TouchableOpacity>:
                <TouchableOpacity onPress={()=>this.setState({looktype: this.state.beforeColor, beforeColor: ''})} style={[styles.flipButton, {position:'absolute', left: 20, bottom: 30, borderRadius: 50, width:50, height:50, backgroundColor:'rgba(255,255,255,0.7)'}]}>
                  <Ionicons name="ios-color-palette-outline" style={{ color: '#4a4a4a', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
                </TouchableOpacity>
              }
            </View>
     
            <View style={{backgroundColor:'transparent', width:'66%',marginLeft:'16%', zIndex: 20, marginBottom: 5}}>
              {this.state.looktype != "color" && <Carousel 
                  autoplay={false}
                  renderItem={this.state.looktype=="Unique"? this._renderItemSlider.bind(this):this._renderItemSliderPreBuilt.bind(this)}
                  sliderWidth={SLIDER_WIDTH}
                  itemWidth={ALL_ITEM_SLIDE_WIDTH}
                  activeSlideAlignment={'start'}
                  inactiveSlideScale={1}
                  loop={false}
                  data={this.state.looktype=="Unique"? productItems: prebuiltItems}
                  autoplayDelay={0}
                  autoplayInterval={1500}
                  inactiveSlideOpacity={1}
              />}
              {this.state.looktype == "color" && <Carousel 
                  autoplay={false}
                  renderItem={this._renderItemSliderColor.bind(this)}
                  sliderWidth={SLIDER_WIDTH}
                  itemWidth={ALL_ITEM_SLIDE_WIDTH}
                  activeSlideAlignment={'start'}
                  inactiveSlideScale={1}
                  loop={false}
                  data={colorItems}
                  autoplayDelay={0}
                  autoplayInterval={1500}
                  inactiveSlideOpacity={1}
              />}
            </View>
            <View
              style={{
                paddingBottom: 0,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                alignSelf: 'flex-end',
                zIndex: 21
              }}>
              <TouchableOpacity
                style={[styles.flipButton, styles.picButton, { flex: 3, alignSelf: 'flex-end', backgroundColor: '#222' }]}
                >
                <Text style={styles.flipText}> ALL </Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>Actions.compare({previous: require("../../../images/nailDefault.png"), typePro:"nail", after: this.state.selectedPhotoUri})}
                style={[styles.flipButton, styles.picButton, { flex: 3, alignSelf: 'flex-end', backgroundColor: '#222' }]}>
                <Text style={styles.flipText}> COMPARE </Text>
              </TouchableOpacity>

            </View>
          </View>
          
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

export default connect(mapStateToProps, bindAction)(Nail);