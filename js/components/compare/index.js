
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown';
import { Image, Platform, ScrollView, Modal, Dimensions, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Container, View, Text, Button, Picker, Content, Icon, Card, Item, Input, Switch, Thumbnail, Header, Left, Right, CardItem , Title} from 'native-base';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import { Feather, FontAwesome, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons, EvilIcons } from '@expo/vector-icons';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Font, FileSystem } from 'expo';
import FooterTabs from '../footerTabs';
import { NativeAdsManager, InterstitialAdManager, BannerView, AdSettings } from 'react-native-fbads';
import ComparisonSlider from "react-native-comparison-slider";
import { openDrawer } from '../../actions/drawer';

import { captureRef } from "react-native-view-shot";
import FullAd from './FullAd';
const { width, height } = Dimensions.get('window');
AdSettings.addTestDevice(AdSettings.currentDeviceHash);
const adsManager = new NativeAdsManager('1912255062335197');

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
class Compare extends Component {
  constructor(props){
    super(props);
  }
  state = {
  };

  _onImgSave(){captureRef(this.refs.viewShot, {
  format: "jpg",
  quality: 0.8
})
.then(
  uri => console.log("Image saved to", uri),
  error => console.error("Oops, snapshot failed", error)
);
  };
  componentDidMount() {
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
      console.log(e, 'Directory exists');
    });
  }
  _renderProductSlider ({item, index}) {
      return (
          <View key={index}  style={{marginTop: 0, width: (width/4-20), height:50}}>
            <View style={{flexDirection: 'column', flex: 1, padding: 0, alignSelf:'center', alignItems:'center'}}>
              <Image style={{width: width/4- 20, height: 50, resizeMode: 'contain'}} source={item.image}/>
            </View>
          </View>
      );
  }
  saveToGallery (uri) {
    console.log(uri)
    FileSystem.moveAsync({
      from: uri,
      to: `${FileSystem.documentDirectory}photos/Photo_${new Date().getTime()}.jpg`,
    }).then(error=> console.log(error))
  }
  saveToLook (uri) {
    FileSystem.moveAsync({
      from: uri,
      to: `${FileSystem.documentDirectory}photos/Photo_${new Date().getTime()}.jpg`,
    })
  }
  onBannerAdPress = () => console.log('Ad clicked!');
  onBannerAdError = (event) => console.log('Ad error :(', event.nativeEvent);
  render() {
    // console.disableYellowBox = true;
      return (
        <Container  style={{backgroundColor: 'white'}}>
          <Header style={{ backgroundColor: '#fff', borderBottomWidth: 0, height: 60}}>
            <Left >
              <Button style={{backgroundColor: 'transparent'}} onPress={() => {this.setState({isPhotoSelected: false, modalVisible:true,
    selectedPhotoUri: ''}); Actions.pop()}} >
                <Feather name="arrow-left" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Left>
            <View style={{position: 'absolute', top: 23, alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flexDirection:'row'}}>
                <Entypo name="facebook-with-circle" style={{ color: '#c34097', fontSize: 26, marginLeft: 2, marginRight: 2, lineHeight: 32, fontWeight: '900' }} />
                <Entypo name="twitter-with-circle" style={{ color: '#c34097', fontSize: 26, marginLeft: 2, marginRight: 2, lineHeight: 32, fontWeight: '900' }} />
                <Entypo name="instagram-with-circle" style={{ color: '#c34097', fontSize: 26, marginLeft: 2, marginRight: 2, lineHeight: 32, fontWeight: '900' }} />
              </View>
            </View>
            <Right >
              <Button style={{backgroundColor: 'transparent'}} onPress={() => Actions.shoppingList()} >
                <MaterialIcons name="shopping-basket" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>
          <ScrollView style={{marginTop: 20}}>
            <View style={styles.section}>
              <View style={styles.beautyContentWrap}>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 0, marginTop: 25, marginBottom:25, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <TouchableOpacity disabled={true} style={{ height: 50, width: "30%", backgroundColor: "#4a4a4a", borderRadius: 0, marginRight: "40%", justifyContent: "center", alignSelf: "center"}}>
                    <Text style={{fontSize: 13, color: "white", textAlign: "center", fontWeight: "700"}}>
                      Before
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity disabled={true} style={{ height: 50, width: "30%", backgroundColor: "#c34097", borderWidth: 1, borderRadius: 0, borderColor: "#949494", justifyContent: "center", alignSelf: "center"}}>
                    <Text style={{fontWeight: "700", fontSize: 13, textAlign: "center", color: "white"}}>
                      After
                    </Text>
                  </TouchableOpacity>
                 </Item>
                <View style={{position:'relative'}}>
                  <ComparisonSlider 
                    imageWidth={width}
                    imageHeight={400}
                    initialPosition={50}
                    leftImage={this.props.previous}
                    rightImage={this.props.after} 
                  />

                  <Item style={[styles.beautyContentItem, {width:'100%', position: 'absolute', bottom: 5, left: 0, borderBottomWidth: 0, marginTop: 5, flexDirection: 'row', justifyContent:'space-between'}]}>
                    <Button onPress={()=>this.props.typePro=='nail'? Actions.nail(): Actions.virtualMakeOver()} style={{width: "31%", height: 70, flexDirection:'column', backgroundColor: "#c34097", borderRadius: 0, marginRight: "3.5%", justifyContent: "center", alignSelf: "center"}}>
                      <EvilIcons name="refresh" style={{ color: '#fff', fontSize: 25, lineHeight: 25, fontWeight: '900' }} />
                      <Text style={{fontSize: 8, color: "white", textAlign: "center", lineHeight: 12, fontWeight: "700", width:'100%'}}>
                        Try Another Look
                      </Text>
                    </Button>
                    <Button  style={{width: "31%", height: 70, flexDirection:'column', backgroundColor: "#949494", borderWidth: 1, marginRight: "3.5%", borderRadius: 0, borderColor: "#949494", justifyContent: "center", alignSelf: "center"}}>
                      <Image style={{width:17, height:25, resizeMode:'contain'}} source={require('../../../assets/iconPNG/white/Icon-16.png')} />
                      <Text style={{width: '100%', fontWeight: "700", fontSize: 8, lineHeight: 12, textAlign: "center", color: "white"}}>
                        Save To My Looks
                      </Text>
                    </Button>
                    <Button style={{width: "31%", height: 70, flexDirection:'column', backgroundColor: "#949494", borderWidth: 1, borderRadius: 0, borderColor: "#949494", justifyContent: "center", alignSelf: "center"}}>
                      <Image  style={{width:17, height:25, resizeMode:'contain'}} source={require('../../../assets/iconPNG/white/Icon-13.png')} />
                      <Text style={{fontWeight: "700", fontSize: 8, lineHeight: 12,  textAlign: "center", color: "white", width:'100%'}}>
                        Save To Photo Gallery
                      </Text>
                    </Button>
                  </Item>
                </View>
                <View style={{backgroundColor: '#c34097'}}>
                  <Item style={[styles.beautyContentItem, {flexDirection:'row', justifyContent:'space-between', }]}>
                    <Text style={{flexDirection:'row', fontSize:12, color:'white', fontWeight:'900'}}>SHARE YOUR LOOK ON: </Text>
                    <View style={{flexDirection:'row'}}>
                      <FontAwesome name="facebook-official" style={{ color: '#fff', fontSize: 18, padding: 5, lineHeight: 25, fontWeight: '900' }} />
                      <FontAwesome name="instagram" style={{ color: '#fff', fontSize: 18, lineHeight: 25, padding: 5, fontWeight: '900' }} />
                      <MaterialCommunityIcons name="snapchat" style={{ color: '#fff', fontSize: 18, padding: 5, lineHeight: 25, fontWeight: '900' }} />
                      <FontAwesome name="twitter" style={{ color: '#fff', fontSize: 18, lineHeight: 25,padding: 5,  fontWeight: '900' }} />
                      <FontAwesome name="mail-forward" style={{ color: '#fff', fontSize: 18, padding: 5, lineHeight: 25, fontWeight: '900' }} />
                    </View>
                  </Item>
                </View>
                <Button onPress={()=> Actions.lookDetails({typePro:this.props.typePro})} style={{width:130, height: 50, marginTop: 5, marginBottom: 10, alignItems: 'center', alignSelf:'center', borderColor: '#949494', backgroundColor:'white', borderRadius: 0, borderWidth:1}}>
                  <Text style={{color:'#949494', fontSize: 15, fontWeight:'700', width: '100%', textAlign:'center'}}>Look Details</Text>
                </Button>
                <View style={{width: '100%', alignItems:'center', height:50}}>
                  <View style={{position:'relative'}}>
                    <Carousel 
                      autoplay={false}
                      renderItem={this._renderProductSlider}
                      ref={(c) => { this._carousel = c; }}
                      sliderWidth={width-80}
                      itemWidth={width/4-20}
                      activeSlideAlignment={'start'}
                      inactiveSlideScale={1}
                      loop={true}
                      data={products}
                      autoplayDelay={0}
                      autoplayInterval={1500}
                      inactiveSlideOpacity={1}
                    />
                  </View>
                  <Button onPress={()=>this._carousel.snapToPrev()} style={{position:'absolute', top: 0, left:0, backgroundColor:'transparent', borderWidth:0}}>
                    <Entypo name="chevron-left" style={{ color: '#4a4a4a', fontSize: 30, padding: 5, fontWeight: '900' }} />
                  </Button>
                  <Button onPress={()=>this._carousel.snapToNext()} style={{position:'absolute', top: 0, right:0,backgroundColor:'transparent', borderWidth:0}}>
                    <Entypo name="chevron-right" style={{ color: '#4a4a4a', fontSize: 30, padding: 5, fontWeight: '900' }} />
                  </Button>
                </View>
              </View>
              <View style={[styles.beautyContentItem]}>
                {false && <View style={{flex: 1, marginTop:20, height: 100, borderWidth:3, borderColor:'#c34097', marginBottom:80}}>
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

export default connect(mapStateToProps, bindAction)(Compare);