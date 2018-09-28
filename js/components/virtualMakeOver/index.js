
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Image, Platform, ScrollView, Modal, Dimensions, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { Container, View, Text, Button, Picker, Content, Icon, Card, Item, Input, Switch, Thumbnail, Header, Left, Right, CardItem , Title} from 'native-base';
import styles from './styles';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Feather, MaterialIcons, Entypo} from '@expo/vector-icons';
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
    image: require('../../../images/prebuilt1.png'),
    name: 'COVERGIRL* LashBlast Volume Mascara',
    color: '#ff0000',
    addName: 'prebuilt1'
  },
  {
    image: require('../../../images/prebuilt1.png'),
    name: 'Maybelline Sensational Powder Matte Lipstick',
    color: '#ff2200',
    addName: 'prebuilt1',
  },
  {
    image: require('../../../images/prebuilt1.png'),
    name: 'Pop-arazzi Special Effects Nail Polish, Never Too Rich 104',
    color: '#ff0022',
    addName: 'prebuilt1',
  },
  {
    image: require('../../../images/prebuilt1.png'),
    name: 'COVERGIRL* LashBlast Volume Mascara',
    color: '#ff5500',
    addName: 'prebuilt1',
  }
]
const productItems = [
  {
    image: require('../../../images/eye3.png'),
    type: 'eye',
    loadImgLeftUp: require('../../../images/eye3_left_up.png'),
    loadImgRightUp: require('../../../images/eye3_right_up.png'),
    loadImgLeftDown: require('../../../images/eye3_left_down.png'),
    loadImgRightDown: require('../../../images/eye3_right_down.png'),
    name: 'Maybelline Sensational Powder Matte Lipstick',
    color: '#ff2200',
    pSelNumber: 0,
  },
  {
    image: require('../../../images/lip1.png'),
    type: 'lip',
    loadImgDown: require('../../../images/lip1_down.png'),
    loadImgUp: require('../../../images/lip1_up.png'),
    name: 'Pop-arazzi Special Effects Nail Polish, Never Too Rich 104',
    color: '#ff0022',
    pSelNumber: 1,
  },
  {
    image: require('../../../images/makeup1.png'),
    type: 'makeup',
    loadImgLeft: require('../../../images/makeup1_left.png'),
    loadImgRight: require('../../../images/makeup1_right.png'),
    name: 'COVERGIRL* LashBlast Volume Mascara',
    color: '#ff5500',
    pSelNumber: 2,
  }
]
class VirtualMakeOver extends Component {
  state = {
    isPhotoSelected: false,
    selectedPhotoUri: '',
    faces: {},
    images: {},
    brightness: 1,
    sampleMode: false,
    sampleNumber: 1,
    modalVisible: true,
    looktype: 'Unique',
    pSelNumber: -1
  };
  async pickCamera() {
    this.setState({sampleMode: false})
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,

    });

    if (!result.cancelled) {
      this.setState({ selectedPhotoUri: {uri: result.uri}, isPhotoSelected: true });
      this.detectFace(result.uri)
    }
  }
  async pickImage() {
    this.setState({sampleMode: false})
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
    });

    if (!result.cancelled) {
      this.setState({ selectedPhotoUri: {uri: result.uri}, isPhotoSelected: true });
      this.detectFace(result.uri)
    }
  }
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
      var madeup; 
      if(this.state.sampleNumber==1){ 
        madeup=require('../../../images/facial1_eyeliner1.png'); 
      }
      else if(this.state.sampleNumber==2){ 
        madeup=require('../../../images/facial2_eyeliner1.png');  
      }else if(this.state.sampleNumber==3) {
        madeup=require('../../../images/facial3_eyeliner1.png');
      }  
      else if(this.state.sampleNumber==4) {
        madeup=require('../../../images/facial4_eyeliner1.png');
      } 
      return (
          <View key={index}  style={{marginTop: 0, width: (width/5), height:width/5 - 6}}>
            <View style={{flexDirection: 'column', flex: 1, padding: 0, alignSelf:'center', alignItems:'center'}}>
              <TouchableOpacity style={{borderColor: '#949494', alignItems:'center', justifyContent:'center', backgroundColor: '#fff', width: width/5 - 6, height: width/5 - 6, borderWidth:1, borderRadius: 5}} onPress={()=>{console.log(this.state.sampleMode);this.state.sampleMode? this.setState({selectedPhotoUri: madeup}):this.setState({seletedItem: item.Image})}}>
                <Image source={item.image} style={{resizeMode:'contain', width: '60%' , height: '100%', alignSelf:'center'}}/>
              </TouchableOpacity>
            </View>
          </View>
      );
  }
  _renderItemSliderPreBuilt ({item, index}) {
      var madeup=require('../../../images/prebuilt1.png');
      return (
          <View key={index}  style={{marginTop: 0, width: (width/6), height:width/6 - 6}}>
            <View style={{flexDirection: 'column', flex: 1, padding: 0, alignSelf:'center', alignItems:'center'}}>
              <TouchableOpacity style={{borderColor: '#949494', alignItems:'center', justifyContent:'center', backgroundColor: '#fff', width: width/6 - 6, height: width/6 - 6, padding:1, borderWidth:1, borderRadius: 5}} onPress={()=>{console.log(this.state.sampleMode);this.state.sampleMode? this.setState({selectedPhotoUri: madeup}):this.setState({seletedItem: item.Image})}}>
                <Image source={item.image} style={{resizeMode:'contain', width: '95%' , height: '95%', alignSelf:'center'}}/>
              </TouchableOpacity>
            </View>
          </View>
      );
  }
  componentDidMount(){
    this.showFullScreenAd();
  }
  onBannerAdPress = () => console.log('Ad clicked!');
  onBannerAdError = (event) => console.log('Ad error :(', event.nativeEvent);

  renderLandmarksOfFace(face, index) {
    const renderLandmarkEye = (positionLeft, positionRight, probabilityLeft, probabilityRight, direct, rollAngle, yawAngle) =>
      positionLeft && positionRight && (
        <View>
          <View
            style={[
              {
                position:'absolute',
                width: 50,
                height: 15,
                left: positionLeft.x * width/this.state.images.width - 50 / 2,
                top: direct=='up'?positionLeft.y * width/this.state.images.width - 82 + 37 + (height - this.state.images.height*width/this.state.images.width)/2 :positionLeft.y * width/this.state.images.width - 60 + 28 + (height - this.state.images.height*width/this.state.images.width)/2 ,
              },
            ]}
          >

          <Image
            style={[
              {
                width: '100%',
                height: '100%',
                resizeMode:'stretch',
                transform: [
                  { rotateZ: `${rollAngle.toFixed(0)}deg` },
                  { rotateY: `${yawAngle.toFixed(0)}deg` }],
                flex: 1
              },
            ]}
            source={direct=='up'?require('../../../images/eye3_left_up.png'):require('../../../images/eye3_left_down.png')}
          />
          </View>
          <View
            style={[
              {
                position:'absolute',
                width: 50,
                height: 15,
                left: positionRight.x * width/this.state.images.width - 50 / 2,
                top: direct=='up'?positionRight.y * width/this.state.images.width - 82 + 37 + (height - this.state.images.height*width/this.state.images.width)/2 :positionRight.y * width/this.state.images.width - 60 + 28 + (height - this.state.images.height*width/this.state.images.width)/2 ,
              },
            ]}
          >

          <Image
            style={[
              {
                width: '100%',
                height: '100%',
                resizeMode:'stretch',
                transform: [
                  { rotateZ: `${rollAngle.toFixed(0)}deg` },
                  { rotateY: `${yawAngle.toFixed(0)}deg` }],
                flex: 1
              },
            ]}
            source={direct=='up'?require('../../../images/eye3_right_up.png'):require('../../../images/eye3_right_down.png')}
          />
          </View>
        </View>
      );
    
    return (
      <View key={`landmarks-${index}`}  style={{width:'100%', height:'100%', flex:1, position:'relative'}}>
        { !this.state.sampleMode && renderLandmarkEye(face.leftEyePosition, face.rightEyePosition, face.leftEyeOpenProbability, face.rightEyeOpenProbability, 'up', face.rollAngle, face.yawAngle)}
        {  !this.state.sampleMode && renderLandmarkEye(face.leftEyePosition, face.rightEyePosition, face.leftEyeOpenProbability, face.rightEyeOpenProbability, 'down', face.rollAngle, face.yawAngle)}
      </View>
    );
  }
  detectFace(photoUri){
    FaceDetector.detectFacesAsync(photoUri, {
      detectLandmarks: FaceDetector.Constants.Landmarks.all,
      runClassifications: FaceDetector.Constants.Classifications.all,
    })
      .then(this.facesDetected)
      .catch(this.handleFaceDetectionError);
  }
  facesDetected = ({ image, faces }) => {
    this.setState({
      faces: faces,
      images: image,
    });
  }

  handleFaceDetectionError = error => console.warn(error);
  render() {
      var that=this;
      return (
        <Container style={{backgroundColor:'white'}}>
          {!this.state.selectedPhotoUri?        
          <Header style={{backgroundColor: 'white', borderBottomWidth: 0 }}>
            <Left>
              <Button style={{backgroundColor: 'white'}} onPress={() => Actions.pop()} >
                <Feather name="arrow-left" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Left>
            <View style={{alignItems:'center', flex:1, position: 'absolute', alignSelf: 'center'}}>
              <View style={{position:'relative', alignItems:'center'}}>
                <Text style={styles.topHeaderTextMenu}>Virtual Makeover</Text>
                <Text style={styles.bottomHeaderText}>Virtually apply makeup to your own face or choose a model.</Text>
              </View>
            </View>
            <Right>
              <Button style={{backgroundColor: 'white'}} onPress={this.props.openDrawer} >
                <MaterialIcons name="menu" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>
          :
          <Header style={{ backgroundColor: 'black', borderBottomWidth: 0, height: 60}}>
            <Left >
              <Button style={{backgroundColor: 'transparent'}} onPress={() => {this.setState({isPhotoSelected: false, modalVisible:true,
    selectedPhotoUri: ''}); Actions.pop()}} >
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
              <Button style={{backgroundColor: 'transparent'}} onPress={() => Actions.shoppingList()} >
                <MaterialIcons name="shopping-basket" style={{ color: 'white', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>}
          {!this.state.selectedPhotoUri?
          <ScrollView style={{marginTop: 20}}>
            <Item style={[styles.beautyContentItem, {flexDirection:'row', flex:1, alignItems:'center', justifyContent:'center', marginBottom:20}]}>
              <Text style={{textAlign:'center', fontSize:16, fontWeight: '700', color:'#4a4a4a'}}>Apply Makeup to a Your Face</Text>
            </Item>
            <Item style={styles.beautyContentItem}>
              <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'row', justifyContent: 'flex-start', flex: 1}}>
                  <Item style={{alignItems:'center', flexDirection:'column', borderBottomWidth:0}} onPress={this.pickCamera.bind(this)}>
                    <Image source={require('../../../assets/iconPNG/Grey/Icon12.png')} />
                    <Text style={{fontSize:14, fontWeight: '500', color:'#949494'}}>Take Photo</Text>
                  </Item>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'center', flex: 1}}>
                  <Item style={{alignItems:'center', flexDirection:'column', borderBottomWidth:0}} onPress={this.pickImage.bind(this)}>
                    <Image source={require('../../../assets/iconPNG/Grey/Icon16.png')} />
                    <Text style={{fontSize:14, fontWeight: '500', color:'#949494'}}>Upload Photo</Text>
                  </Item>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'flex-end', flex: 1}}>
                  <Item style={{alignItems:'center', flexDirection:'column', borderBottomWidth:0}} onPress={()=> Actions.readyToApply()}>
                    <Image source={require('../../../assets/iconPNG/Grey/Icon13.png')} />
                    <Text style={{fontSize:14, fontWeight: '500', color:'#949494'}}>Live Video</Text>
                  </Item>
                </View>
              </View>
            </Item>
            <Item style={[styles.beautyContentItem, {flexDirection:'row', flex:1, alignItems:'center', justifyContent:'center', marginTop:40}]}>
              <Text style={{textAlign:'center', fontSize:16, fontWeight: '700', color:'#4a4a4a'}}>Apply Makeup to a Model Face</Text>
            </Item>
            <View style={{flexDirection:'column', justifyContent:'space-between', flex:1}}>
              <View style={[styles.beautyContentItem, {flexDirection:'row', flex:1, marginTop:30}]}>
                <Item style={{width:'45%', height: 120, marginRight: '10%', borderWidth: 3, borderColor: '#c34097'}} onPress={()=> this.setState({isPhotoSelected: true, sampleMode: true, sampleNumber: 1, selectedPhotoUri: require('../../../images/facial1.png')})} >
                  <Image  style={{resizeMode:'contain', borderWidth: 3, borderColor: '#c34097', width:'100%', height:'100%'}} source={require('../../../images/facial1.png')} />
                </Item>
                <Item  style={{width:'45%', height: 120, borderWidth: 3, borderColor: '#c34097'}} onPress={()=> this.setState({isPhotoSelected: true, sampleMode: true, sampleNumber: 2, selectedPhotoUri: require('../../../images/facial2.png')})} >
                  <Image style={{resizeMode:'contain', borderWidth: 3, borderColor: '#c34097', width:'100%', height:'100%'}}  source={require('../../../images/facial2.png')} />
                </Item>
              </View>
              <View style={[styles.beautyContentItem, {flexDirection:'row', flex:1, marginTop:20}]}>
                  
                <Item style={{width:'45%', height: 120, marginRight: '10%', borderWidth: 3, borderColor: '#c34097'}} onPress={()=> this.setState({isPhotoSelected: true, sampleNumber: 3, sampleMode: true, selectedPhotoUri: require('../../../images/facial3.png')})} >
                  <Image  style={{resizeMode:'contain', borderWidth: 3, borderColor: '#c34097', width:'100%', height:'100%'}} source={require('../../../images/facial3.png')} />
                </Item>
                <Item  style={{width:'45%', height: 120, borderWidth: 3, borderColor: '#c34097'}} onPress={()=> this.setState({isPhotoSelected: true, sampleMode: true, sampleNumber: 4, selectedPhotoUri: require('../../../images/facial4.png')})} >
                  <Image style={{resizeMode:'contain', borderWidth: 3, borderColor: '#c34097', width:'100%', height:'100%'}}  source={require('../../../images/facial4.png')} />
                </Item>
              </View>
            </View>
            <View style={[styles.beautyContentItem]}>
              {false && <View style={{flex: 1, marginTop:40,  height: 100, borderWidth:3, borderColor:'#c34097', marginBottom:60}}>
              <FullAd adsManager={adsManager} />
              <BannerView
                type="large"
                placementId="1912255062335197_1912257885668248"
                onPress={this.onBannerAdPress}
                onError={this.onBannerAdError}
              />
              </View>}
                <Image style={{paddingTop:0, height:100, marginBottom:80,  width:'100%', resizeMode:'contain'}} source={require('../../../images/exampleAd.png')} />


            </View>
          </ScrollView>
          :
          <View style={{flex:1,
    justifyContent: 'center', backgroundColor:'transparent', position:'relative'}}>
            <Modal animationType="fade" transparent={true} visible={(Actions.currentScene=='virtualMakeOver') && this.state.modalVisible} >
              <TouchableHighlight   onPress={() => this.setState({modalVisible: false})}>
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

            <View style={[styles.facesContainer,{zIndex: 10}]}>
              {
                this.state.isPhotoSelected  && this.state.faces.length>0 && this.state.faces.map(function(face, index){
                  return that.renderLandmarksOfFace(face, index)
                }) 
              }
            </View>
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
              
            </View>
     
            <View style={{backgroundColor:'transparent', width:'60%',marginLeft:'20%', zIndex: 20, marginBottom: 5}}>
              <Carousel 
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
              />
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
              <TouchableOpacity  onPress={()=>Actions.compare({previous: require("../../../images/facial1.png"), after: require("../../../images/facial1_eyeliner1.png"), typePro:'facial'})}
                style={[styles.flipButton, styles.picButton, { flex: 3, alignSelf: 'flex-end', backgroundColor: '#222' }]}>
                <Text style={styles.flipText}> COMPARE </Text>
              </TouchableOpacity>

            </View>
          </View>}
          {
            !this.state.isPhotoSelected && <FooterTabs/>
          }
          
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

export default connect(mapStateToProps, bindAction)(VirtualMakeOver);