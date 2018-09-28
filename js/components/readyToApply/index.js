import { Constants, Camera, FileSystem, Permissions, FaceDetector } from 'expo';
import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet, TouchableOpacity, Modal, Vibration, Dimensions, TouchableHighlight, TouchableWithoutFeedback, WebView  } from 'react-native';
import { Feather, FontAwesome, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Container, View, Text, Button, Icon, Item, Input, Switch, Thumbnail, Header, Left, Right , Title} from 'native-base';
import GalleryScreen from './galleryScreen';
import { Actions, ActionConst } from 'react-native-router-flux';
import { openDrawer } from '../../actions/drawer';
import Carousel from 'react-native-snap-carousel';
import { Slider } from 'react-native-elements';
import FooterTabs from '../footerTabs';
const { width, height } = Dimensions.get('window');
const SLIDE_WIDTH = Math.round(width  / 5 - 4);
const ALL_ITEM_SLIDE_WIDTH = Math.round(width  / 5);
const ITEM_WIDTH = SLIDE_WIDTH;
const SLIDER_WIDTH = height;
const ButtonWidth = width>375?35:25;
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
    image: require('../../../images/makeup1.png'),
    type: 'makeup',
    loadImgLeft: require('../../../images/makeup1_left.png'),
    loadImgRight: require('../../../images/makeup1_right.png'),
    name: 'COVERGIRL* LashBlast Volume Mascara',
    color: '#ff5500',
    pSelNumber: 1,
  }
]
const landmarkSize = 40;

const flashModeOrder = {
  off: 'on',
  on: 'auto',
  auto: 'torch',
  torch: 'off',
};

const wbOrder = {
  auto: 'sunny',
  sunny: 'cloudy',
  cloudy: 'shadow',
  shadow: 'fluorescent',
  fluorescent: 'incandescent',
  incandescent: 'auto',
};

class ReadyToApply extends Component {
  state = {
    modalVisibleA: true,
    flash: 'off',
    zoom: 0,
    autoFocus: 'on',
    depth: 0,
    type: 'front',
    whiteBalance: 'auto',
    ratio: '16:9',
    ratios: [],
    photoId: 1,
    showGallery: false,
    photos: [],
    faces: [],
    permissionsGranted: false,
    selectedItem: 0,
    brightness: 1,  
    looktype: 'Unique',
    pSelNumber: -1,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ permissionsGranted: status === 'granted' });
  }

  componentDidMount() {
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
      console.log(e, 'Directory exists');
    });
  }

  getRatios = async () => {
    const ratios = await this.camera.getSupportedRatios();
    return ratios;
  };

  toggleView() {
    this.setState({
      showGallery: !this.state.showGallery,
    });
  }

  toggleFacing() {
    this.setState({
      type: this.state.type === 'back' ? 'front' : 'back',
    });
  }

  toggleFlash() {
    this.setState({
      flash: flashModeOrder[this.state.flash],
    });
  }

  setRatio(ratio) {
    this.setState({
      ratio,
    });
  }

  toggleWB() {
    this.setState({
      whiteBalance: wbOrder[this.state.whiteBalance],
    });
  }

  toggleFocus() {
    this.setState({
      autoFocus: this.state.autoFocus === 'on' ? 'off' : 'on',
    });
  }

  zoomOut() {
    this.setState({
      zoom: this.state.zoom - 0.1 < 0 ? 0 : this.state.zoom - 0.1,
    });
  }

  zoomIn() {
    this.setState({
      zoom: this.state.zoom + 0.1 > 1 ? 1 : this.state.zoom + 0.1,
    });
  }

  setFocusDepth(depth) {
    this.setState({
      depth,
    });
  }

  takePicture = async function() {
    if (this.camera) {
      this.camera.takePictureAsync().then(data => {
        FileSystem.moveAsync({
          from: data.uri,
          to: `${FileSystem.documentDirectory}photos/Photo_${this.state.photoId}.jpg`,
        }).then(() => {
          this.setState({
            photoId: this.state.photoId + 1,
          });
          Vibration.vibrate();
        });
      });
    }
  };

  onFacesDetected = ({ faces }) => this.setState({ faces });
  onFaceDetectionError = state => console.warn('Faces detection error:', state);

  renderGallery() {
    return <GalleryScreen onPress={this.toggleView.bind(this)} />;
  }

  renderFace({ bounds, faceID, rollAngle, yawAngle }) {
    return (
      <View
        key={faceID}
        transform={[
          { perspective: 600 },
          { rotateZ: `${rollAngle.toFixed(0)}deg` },
          { rotateY: `${yawAngle.toFixed(0)}deg` },
        ]}
        style={[
          styles.face,
          {
            ...bounds.size,
            left: bounds.origin.x,
            top: bounds.origin.y,
          },
        ]}>
        <Text style={styles.faceText}>ID: {faceID}</Text>
        <Text style={styles.faceText}>rollAngle: {rollAngle.toFixed(0)}</Text>
        <Text style={styles.faceText}>yawAngle: {yawAngle.toFixed(0)}</Text>
      </View>
    );
  }

  renderLandmarksOfFace(face) {
    console.log(face)
    const renderLandmarkEye = (positionLeft, positionRight, probabilityLeft, probabilityRight, direct, rollAngle, yawAngle) =>
      positionLeft && positionRight && (
        <View>
          <View
            style={[
              {
                position:'absolute',
                width: 60,
                height: 20,
                left: positionLeft.x - 60 / 2,
                top: direct=='up'?positionLeft.y - 80:positionLeft.y - 62,
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
            source={direct=='up'?productItems[0].loadImgLeftUp:productItems[0].loadImgLeftDown}
          />
          </View>
          <View
            style={[
              {
                position:'absolute',
                width: 60,
                height: 20,
                left: positionRight.x - 60 / 2,
                top: direct=='up'?positionRight.y - 80:positionRight.y - 62,
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
            source={direct=='up'?productItems[0].loadImgRightUp:productItems[0].loadImgRightDown}
          />
          </View>
        </View>
      );

    const renderLandmarkLip = (leftMouthPosition, mouthPosition, rightMouthPosition, bottomMouthPosition, rollAngle, yawAngle) =>
      leftMouthPosition && mouthPosition && rightMouthPosition && bottomMouthPosition &&(
        <View>
          <View
            style={[
              {
                position:'absolute',
                width: rightMouthPosition.x - leftMouthPosition.x,
                height: bottomMouthPosition.y - mouthPosition.y,
                left: leftMouthPosition.x,
                top: mouthPosition.y - 70,
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
            source={productItems[2].loadImgDown}
          />
          </View>
          <View
            style={[
              {
                position:'absolute',
                width: rightMouthPosition.x - leftMouthPosition.x,
                height: bottomMouthPosition.y - mouthPosition.y,
                left: leftMouthPosition.x,
                top: 2 * mouthPosition.y - bottomMouthPosition.y - 70,
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
            source={productItems[2].loadImgUp}
          />
          </View>
        </View>
      );
      const renderLandmarkCheek = (leftCheekPosition, rightCheekPosition, leftWidth, leftHeight, rightWidth, rightHeight, rollAngle, yawAngle) =>
      leftCheekPosition && rightCheekPosition && (
        <View>
          <View
            style={[
              {
                position:'absolute',
                width: leftWidth*1.6,
                height: leftHeight*1.6,
                left: leftCheekPosition.x - leftWidth * 0.8,
                top: leftCheekPosition.y - leftHeight * 0.8 - 70,
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
            source={productItems[1].loadImgLeft}
          />
          </View>
          <View
            style={[
              {
                position:'absolute',
                width: rightWidth*1.6,
                height: rightHeight*1.6,
                left: rightCheekPosition.x - rightWidth * 0.8,
                top: rightCheekPosition.y - rightHeight * 0.8 - 70,
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
            source={productItems[1].loadImgRight}
          />
          </View>
        </View>
      );
    return (
      <View key={`landmarks-${face.faceID}`}>
        {this.state.pSelNumber == 0 && renderLandmarkEye(face.leftEyePosition, face.rightEyePosition, face.leftEyeOpenProbability, face.rightEyeOpenProbability, 'up', face.rollAngle, face.yawAngle)}
        {this.state.pSelNumber == 0 && renderLandmarkEye(face.leftEyePosition, face.rightEyePosition, face.leftEyeOpenProbability, face.rightEyeOpenProbability, 'down', face.rollAngle, face.yawAngle)}
        {this.state.pSelNumber == 2 && renderLandmarkLip(face.leftMouthPosition, face.mouthPosition, face.rightMouthPosition, face.bottomMouthPosition, face.rollAngle, face.yawAngle)}
        {this.state.pSelNumber == 1 && renderLandmarkCheek(face.leftCheekPosition, face.rightCheekPosition, Math.abs(face.leftEarPosition.x - face.leftMouthPosition.x),  Math.abs(face.leftEarPosition.y - face.leftMouthPosition.y),  Math.abs(face.rightEarPosition.x - face.rightMouthPosition.x),  Math.abs(face.rightEarPosition.y - face.rightMouthPosition.y), face.rollAngle, face.yawAngle)}
      </View>
    );
  }

  renderFaces() {
    return (
      <View style={styles.facesContainer} pointerEvents="none">
        {this.state.faces.map(this.renderFace)}
      </View>
    );
  }

  renderLandmarks() {
    return (
      <View style={styles.facesContainer} pointerEvents="none">
        {this.state.faces.map(this.renderLandmarksOfFace.bind(this))}
      </View>
    );
  }

  renderNoPermissions() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
        <Text style={{ color: 'white' }}>
          Camera permissions not granted - cannot open camera preview.
        </Text>
      </View>
    );
  }

  
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
          <View key={index}  style={{marginTop: 0, width: (width/5), height:width/5 - 6}}>
            <View style={{flexDirection: 'column', flex: 1, padding: 0, alignSelf:'center', alignItems:'center'}}>
              <Item style={{borderBottomWidth: 0, backgroundColor: item.color, width: width/5 - 6, height: width/5 - 6}} ></Item>
            </View>
          </View>
      );
  }
  
  render() {
    return (              
      <Container>
        <Modal animationType="fade" transparent={true} visible={this.state.modalVisibleA} >
          <TouchableHighlight   onPress={() => this.setState({modalVisibleA: false})}>
            <View style={styles.modalView }>
              <TouchableWithoutFeedback  onPress={() => {return false;}} >
                <View style={styles.modalInnerView}>
                  <Text style={{textAlign: 'center', color: '#4a4a4a', fontSize: 16, fontWeight: '500', lineHeight: 25}}>Do you want to start from the Unique Look or Pre-built Look?</Text>
                  <View style={{flexDirection:'row', marginTop: 20}}>
                    <Button onPress={() => {this.setState({modalVisibleA: false, looktype: 'Unique'});}}
                      style={[styles.popupButton, {backgroundColor: '#c34097'}]}
                    >
                      <Text style={{ color:'#fff', textAlign: 'center', fontSize: 15, fontWeight: '500' }}>Unique</Text>
                    </Button>
                    <Button onPress={() => {this.setState({modalVisibleA: false, looktype: 'Pre-built'});}}
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
        <Header style={{ backgroundColor: 'black', borderBottomWidth: 0, height: 60}}>
          <Left >
            <Button style={{backgroundColor: 'transparent'}} onPress={() => Actions.pop()} >
              <Feather name="arrow-left" style={{ color: 'white', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
            </Button>
          </Left>
          <View style={styles.topHeaderText}>
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
        </Header>
        <View style={[styles.container]}>

          {this.state.looktype=='initial' &&
          <View style={{position:'absolute', right: 30,top:ButtonWidth, zIndex: 100}}>
            <Button style={{backgroundColor:'red', borderRadius:0, height:40, justifyContent:'space-between', alignSelf:'flex-end' }}>
              <MaterialCommunityIcons name="video-off" style={{ color: '#fff',  fontSize: 16, fontFamily: 'Roboto', lineHeight: 20, fontWeight: '900' }} />
              <Text style={{fontSize: 16, color:'#fff', fontWeight:'900', fontFamily: 'Roboto'}}>End Session</Text>
            </Button>
            <Button style={{marginTop:15, borderRadius:0, width: ButtonWidth, paddingRight:0, paddingLeft:0, height: ButtonWidth, alignSelf:'center', alignItems:'center', alignSelf:'flex-end', justifyContent:'center', backgroundColor: 'rgba(0,0,0,0.7)'}}>
              <MaterialCommunityIcons name="close-circle-outline" style={{ color: '#fff',  fontSize: 16, fontFamily: 'Roboto', lineHeight: 20, fontWeight: '900', justifyContent:'center', alignItems:'center', alignSelf:'center', textAlign:'center' }} />
            </Button>
            <Button style={{marginTop:3, borderRadius:0, width: ButtonWidth, paddingRight:0, paddingLeft:0, height: ButtonWidth, alignSelf:'center', alignItems:'center', alignSelf:'flex-end', justifyContent:'center', backgroundColor: 'rgba(0,0,0,0.7)'}}>
              <MaterialIcons name="exit-to-app" style={{ color: '#fff',  fontSize: 16, fontFamily: 'Roboto', lineHeight: 20, fontWeight: '900', justifyContent:'center', alignItems:'center', alignSelf:'center', textAlign:'center' }} />
            </Button>
            <Button style={{marginTop:3, borderRadius:0, width: ButtonWidth, paddingRight:0, paddingLeft:0, height: ButtonWidth, alignSelf:'center', alignItems:'center', alignSelf:'flex-end', justifyContent:'center', backgroundColor: 'rgba(0,0,0,0.7)'}}>
              <Entypo name="chevron-right" style={{ color: '#fff',  fontSize: 16, fontFamily: 'Roboto', lineHeight: 20, fontWeight: '900', justifyContent:'center', alignItems:'center', alignSelf:'center', textAlign:'center' }} />
            </Button>
            <Button style={{marginTop:3, borderRadius:0, width: ButtonWidth, paddingRight:0, paddingLeft:0, height: ButtonWidth, alignSelf:'center', alignItems:'center', alignSelf:'flex-end', justifyContent:'center', backgroundColor: 'rgba(0,0,0,0.7)'}}>
              <FontAwesome name="columns" style={{ color: '#fff',  fontSize: 16, fontFamily: 'Roboto', lineHeight: 20, justifyContent:'center', alignItems:'center', alignSelf:'center', textAlign:'center', fontWeight: '900' }} />
            </Button>
            <Button style={{marginTop:3, borderRadius:0, width: ButtonWidth, paddingRight:0, paddingLeft:0, height: ButtonWidth, alignSelf:'center', alignItems:'center', alignSelf:'flex-end', justifyContent:'center', backgroundColor: '#fff'}}>
              <Feather name="message-circle" style={{backgroundColor:'transparent', width:30, color: '#4a4a4a',  fontSize: 16, fontFamily: 'Roboto', justifyContent:'center', alignItems:'center', alignSelf:'center', textAlign:'center', fontWeight: '900' }} />
            </Button>
            <Button style={{marginTop:3, borderRadius:0, width: ButtonWidth, paddingRight:0, paddingLeft:0, height: ButtonWidth, alignSelf:'center', alignItems:'center', alignSelf:'flex-end', justifyContent:'center', backgroundColor: 'transparent'}}>
               <Entypo name="chevron-thin-up" style={{width:30, color: '#fff',  fontSize: 16, fontFamily: 'Roboto', justifyContent:'center', alignItems:'center', alignSelf:'center', textAlign:'center', fontWeight: '900' }} />
            </Button>
                
          </View>
          }
          {this.state.looktype!='initial' &&
          
            <View style={{backgroundColor:'white', padding:10}}>
              <Carousel 
                  autoplay={false}
                  renderItem={this._renderProductSlider}
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
          }
          <Camera
            ref={ref => {
              this.camera = ref;
            }}
            style={{
              flex: 1,
              flexDirection: 'column'
            }}
            type={this.state.type}
            flashMode={this.state.flash}
            autoFocus={this.state.autoFocus}
            zoom={this.state.zoom}
            whiteBalance={this.state.whiteBalance}
            ratio={this.state.ratio}
            faceDetectionLandmarks={FaceDetector.Constants.Landmarks.all}
            faceDetectionClassifications={FaceDetector.Constants.Classifications.all}
            onFacesDetected={this.onFacesDetected}
            onFaceDetectionError={this.onFaceDetectionError}
            focusDepth={this.state.depth}>
            {this.state.looktype=='initial' &&
              <WebView
                style={{ width: width*16/45, height: width/5, position: 'absolute', top: ButtonWidth, left: 30, zIndex:1000 }}
                javaScriptEnabled={true}
                source={{uri: 'https://player.vimeo.com/video/145342552?autoplay=1&quality=1080p'}}
              />
            }
            {this.state.looktype!='initial' &&
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                paddingTop: Constants.statusBarHeight / 2,
              }}>


              <Slider
                value={this.state.brightness}
                orientation="vertical"
                thumbTintColor="white"
                minimumTrackTintColor ="white"
                style={{width: width>375?240:180, position:'absolute', top: width>=375?150:100, right: width>375?-75:-45, zIndex: 30}}
                onValueChange={(value) => {this.setState({brightness: value});Expo.Brightness.setBrightnessAsync(value);}} />
              <TouchableOpacity style={[styles.flipButton, {position:'absolute', right: 20, bottom: 80, borderRadius: 50, width:50, height:50, backgroundColor:'rgba(0,0,0,0.7)'}]} onPress={this.toggleFacing.bind(this)}>
                <MaterialIcons name="flip" style={{ color: 'white', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.flipButton, {position:'absolute', left: 20, bottom: 80, borderRadius: 50, width:50, height:50, backgroundColor:'rgba(0,0,0,0.7)'}]} onPress={()=>this.setState({pSelNumber: -1})}>
                <Feather name="refresh-cw" style={{ color: 'white', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.flipButton, {position:'absolute', right: 20, bottom: 135, borderRadius: 50, width:50, height:50, backgroundColor:'rgba(0,0,0,0.7)'}]} onPress={()=> this.setState({looktype:'initial'})}>
                <FontAwesome name="wechat" style={{ color: 'white', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </TouchableOpacity>
            </View>
            }

            <View style={{backgroundColor:'transparent', width:'100%', flexDirection: 'row', position:'absolute', zIndex: 20,
                 bottom: 60, left: 0, paddingLeft: this.state.looktype=='Pre-built'?width/6: width/3}}>
            {
              this.state.looktype=='Unique' && productItems.map((item, index) => ( 
                <View key={index}  style={{marginTop: 0, width: (width/6), height:width/6-6}}>
                  <View style={{flexDirection: 'column', flex: 1, padding: 0, alignSelf:'center', alignItems:'center'}}>
                    <TouchableOpacity onPress={()=> this.setState({pSelNumber: item.pSelNumber})} style={{borderColor: '#949494', backgroundColor: '#fff', alignItems:'center', justifyContent:'center', width: width/6 - 6, height: width/6 - 6, marginBottom: 5, borderWidth:1, borderRadius: 5}} >
                      <Image source={item.image} style={{resizeMode:'contain', width: '60%' , alignSelf:'center', height: '100%' }}/>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            }
            {this.state.looktype=='Pre-built' && prebuiltItems.map((item, index) => ( 
              <View key={index}  style={{ marginTop: 0, width: (width/6), height:width/6-6}}>
                <View style={{flexDirection: 'column', flex: 1, padding: 0, alignSelf:'center', alignItems:'center'}}>
                  <TouchableOpacity style={{borderColor: '#949494', backgroundColor: '#fff', alignItems:'center', justifyContent:'center', width: width/6 - 6, height: width/6 - 6, marginBottom: 5, borderWidth:1, borderRadius: 5}} >
                    <Image source={item.image} style={{resizeMode:'contain', width: '60%' , alignSelf:'center', height: '100%' }}/>
                  </TouchableOpacity>
                </View>
              </View>

              ))}
            </View>
            {this.state.looktype=='initial' && <View
              style={{
                paddingBottom: 0,
                backgroundColor: 'transparent',
                flexDirection: 'column',
                position:'absolute',
                width: '100%',  
                bottom: 60,
                paddingLeft:30, 
                paddingRight:30,
                zIndex: 16,
              }}>
              <View style={{backgroundColor:'rgba(0,0,0,0.7)',width: '100%'}}>
                <Entypo name="chevron-thin-down" style={{position: 'absolute', top: 5, right: 10, color: '#fff', fontSize: 20, lineHeight: 32, fontWeight: '900' }} />
                <View style={{flexDirection:'row', height: 100, justifyContent:'center', padding: 10 }}>
                  <View style={{ height: 100, justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
                    <Image style={{backgroundColor:'white', borderRadius:15, width: 30,height:30}} source={require('../../../images/profile-default.png')}/>
                    <Text style={{color:'white', fontWeight: '700', fontSize: 12}}>Jane Smith</Text>
                  </View>
                  <View style={{height: 100, alignSelf:'center', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color: '#949494', fontSize: 9, fontWeight: '700'}}>
                      You are connected to
                    </Text> 
                  </View>
                  <View style={{height: 100, alignItems:'center', alignSelf:'center', justifyContent:'center'}}>
                    <Image style={{backgroundColor:'white', borderRadius:15, width: 30,height:30}} source={require('../../../images/prebuilt1.png')}/>
                    <Text style={{color:'white', fontWeight: '700', fontSize: 12}}>Sarah Dias</Text>
                    <Text style={{fontSize: 9, color: '#949494', fontWeight:'700'}}>Consultant</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', paddingLeft: 20, paddingRight:20, justifyContent:'flex-start', marginBottom: 25}}>
                  <Image style={{backgroundColor:'white', borderRadius:15, width: 30,height:30, marginRight: 10}} source={require('../../../images/prebuilt1.png')}/>
                  <View>
                    <View style={{flexDirection:'row'}}><Text style={{color:'white', fontWeight: '700', fontSize: 12}}>Sarah Dias</Text><Text style={{color:'#949494', fontWeight: '700', fontSize: 12}}> (consultant)</Text></View>
                    <Text style={{fontSize: 10, color: '#949494', fontWeight:'700'}}>Hello, how can I help you today?</Text>
                  </View>
                </View>
              </View>
              <View style={{backgroundColor:'rgba(0,0,0,0.7)', marginBottom: 10, paddingLeft: 20, paddingRight:20, borderTopWidth: 1, borderTopColor: '#fff'}}>
                <View style={{flexDirection:'row', alignItems:'center', alignSelf:'center', justifyContent:'space-between'}}>
                  <Input
                    style={{ fontSize: 14, fontWeight: '700', color: '#4a4a4a'}}
                    placeholder="Message..."
                    placeholderTextColor="#949494"
                  />
                  <Item style={{backgroundColor:'#c34097', borderRadius: 12, alignItems:'center', alignSelf:'center', justifyContent:'center', width:24, height:24, borderBottomWidth:0}}>
                    <MaterialIcons name="keyboard-arrow-right" style={{backgroundColor:'transparent', color: '#fff', alignItems:'center', alignSelf:'center', fontSize: 15, lineHeight: 24, fontWeight: '900' }} />
                  </Item>
                </View>
              </View>

              <View style={{flexDirection:'column', justifyContent:'center', marginTop: 10}}>
                <View style={{flexDirection:'row'}}>
                  <Button onPress={() => {this.setState({modalVisibleA: false, looktype: 'Pre-built'});}}
                    style={[{height: width>375?30: 40, borderRadius:0, alignItems:'center', backgroundColor: '#fff', width: '45%', marginRight: '10%', borderWidth: 0, paddingLeft: 0, paddingRight: 0, borderColor: '#4a4a4a'}]}
                  
                  >
                    <Text style={{ color:'#4a4a4a', width:'100%', textAlign: 'center', fontSize: 10, lineHeight:11, fontWeight: '500' }}>Select a Complete Look</Text>
                  </Button>
                  <Button onPress={() => {this.setState({modalVisibleA: false, looktype: 'Unique'});}}
                    style={{height: width>375?30:40, borderRadius:0, alignItems:'center', backgroundColor: '#c34097', width: '45%'}}
                  >
                    <Text style={{ color:'#fff', width:'100%', textAlign: 'center', fontSize: 10, lineHeight:11, fontWeight: '500' }}>Create a Unique Look</Text>
                  </Button>
                </View>
              </View>
            </View>
          }
          {this.state.looktype!='initial' &&
            <View
              style={{
                flex: 0.1,
                paddingBottom: 0,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                alignSelf: 'flex-end',
                zIndex: 16,
              }}>
              <TouchableOpacity
                style={[styles.flipButton, styles.picButton, { flex: 3, alignSelf: 'flex-end', backgroundColor: '#222' }]}
                >
                <Text style={styles.flipText}> ALL </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.flipButton, styles.picButton, { flex: 2, alignSelf: 'flex-end', backgroundColor: '#000' }]}
                onPress={this.takePicture.bind(this)}>
                
                <Feather name="camera" style={{ color: 'white', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>Actions.compare({previous: require("../../../images/facial1.png"), after: require("../../../images/facial1_eyeliner1.png"), typePro:'facial'})}
                style={[styles.flipButton, styles.picButton, { flex: 3, alignSelf: 'flex-end', backgroundColor: '#222' }]}>
                <Text style={styles.flipText}> COMPARE </Text>
              </TouchableOpacity>

            </View>
          }
          {this.state.looktype!='initial' &&
            <View style={styles.facesContainer} pointerEvents="none">
              {this.state.looktype=='Unique' && this.state.faces.map(this.renderLandmarksOfFace.bind(this))}
              {this.state.looktype=='Pre-built' && <Image style={{zIndex:15, width:'100%', height:'100%', backgroundColor:'#fff', resizeMode: 'contain'}} source={require('../../../images/prebuilt1.png')}/>}
            </View>
          }
          </Camera>
          {
            this.state.looktype=='initial' && <FooterTabs/>
          }
        </View>
      </Container>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  navigation: {
    flex: 1,
  },
  gallery: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flipButton: {
    height: 50,
    marginTop: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipText: {
    color: 'white',
    fontSize: 15,
  },
  item: {
    margin: 4,
    backgroundColor: 'indianred',
    height: 35,
    width: 80,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picButton: {
    backgroundColor: 'black',
  },
  galleryButton: {
    backgroundColor: 'indianred',
  },
  topHeaderText: {
    position: 'absolute',
    top: 23,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facesContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  face: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#FFD700',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  landmark: {
    width: landmarkSize,
    height: landmarkSize,
    position: 'absolute',
    backgroundColor: 'red',
  },
  faceText: {
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
  },
  modalView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%', 
    height: '100%', 
    alignItems: 'center'
  },
  popupButton: {
    borderRadius: 0,
    width: '44%',
    marginLeft: '3%',
    marginRight: '3%',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  modalInnerView: {
    position: 'absolute', 
    bottom: 30, 
    backgroundColor: '#fff', 
    width: '90%', 
    maxWidth: 400, 
    padding: 30, 
    borderWidth: 3, 
    borderColor: '#c34097'
  },
});


function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, bindAction)(ReadyToApply);
