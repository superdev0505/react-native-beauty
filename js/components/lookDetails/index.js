
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
import SideBar from '../sideBar';
import { NativeAdsManager, InterstitialAdManager, BannerView, AdSettings } from 'react-native-fbads';
import ComparisonSlider from "react-native-comparison-slider";
import { openDrawer } from '../../actions/drawer';
import FullAd from './FullAd';
const { width, height } = Dimensions.get('window');


class LookDetails extends Component {
  state = {
    sidebar: false,
    products : [
    {
      image: require('../../../images/Lipstick.jpg'),
      name: 'Lorem Dress T-Shirt',
      content: 'Lorem ipsum color sit amet consect adipiscing elit',
      rating: 4,
      price: 40,
      like: true
    },
    {
      image: require('../../../images/Eyeliner.jpg'),
      name: 'Lorem Dress T-Shirt',
      content: 'Lorem ipsum color sit amet consect adipiscing elit',
      rating: 4,
      price: 40,
      like: true
    },
    {
      image: require('../../../images/Blusher.jpg'),
      name: 'Lorem Dress T-Shirt',
      content: 'Lorem ipsum color sit amet consect adipiscing elit',
      rating: 4,
      price: 40,
      like: true
    },
    {
      image: require('../../../images/Softflex.jpg'),
      name: 'Lorem Dress T-Shirt',
      content: 'Lorem ipsum color sit amet consect adipiscing elit',
      rating: 4,
      price: 40,
      like: true
    }
  ],
  completeProducts : [
    {
      image: require('../../../images/Softflex.jpg'),
      name: 'Lorem Dress T-Shirt',
      content: 'Lorem ipsum color sit amet consect adipiscing elit',
      rating: 4,
      price: 40,
      like: true
    },
    {
      image: require('../../../images/Softflex.jpg'),
      name: 'Lorem Dress T-Shirt',
      content: 'Lorem ipsum color sit amet consect adipiscing elit',
      rating: 4,
      price: 40,
      like: true
    }
  ]
  };

  componentDidMount() {
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
      console.log(e, 'Directory exists');
    });
  }
  render() {
    var that= this;
      return (
        <Container  style={{backgroundColor: 'white'}}>
          <View style={{height:'100%', width: 300, display:this.state.sidebar?'flex':'none', shadowOffset:{  width: 2,  height: 0,  }, shadowColor: '#949494', shadowOpacity: 1.0, position:'absolute', zIndex:10000000}}>
            <SideBar/>
          </View>
          
          <Header style={{backgroundColor: 'white', borderBottomWidth: 0 }}>
            <Left >
              <Button style={{backgroundColor: 'white'}} onPress={() => Actions.pop()} >
                <Feather name="arrow-left" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Left>
            <Right >
              <Button style={{backgroundColor: 'white'}}  onPress={()=> this.setState({sidebar: !this.state.sidebar})}  >
                <MaterialIcons name="menu" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>
          <ScrollView style={{marginTop: 20}}>
            <View style={styles.section}>
              <Text style={styles.header}>
                Look Details
              </Text>
              <View style={styles.contentWrap}>
                {this.state.products.map(function(product, index){
                  return <View key={index} style={[styles.content, {borderBottomWidth: 1, borderColor: '#eee',backgroundColor: '#fff'}]}>
                    <Item style={[styles.basicContentItem, {borderBottomWidth:0, flexDirection:'row', height: 90}]}>
                      <Image source={product.image} style={{flex:2, height: 60, resizeMode:'contain', borderWidth:1 , borderColor: '#eee'}}/>
                      <View style={{flex:5, flexDirection:'column', paddingLeft: 10, paddingRight: 10}}>

                        <Text style={{color:'#222', fontWeight: '700', fontSize: 13, fontFamily: 'Roboto'}}>{product.name}</Text>
                        <Text style={{color:'#949494', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>{product.content}</Text>
                        <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontFamily: 'Roboto', fontSize: 10, fontWeight: '700'}}>Price : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>${product.price}</Text></View>
                      </View>
                      <View style={{flex:1.5, flexDirection:'row',justifyContent:'space-between'}}>
                        <Ionicons name={product.like?"md-heart":"md-heart-outline"} style={{ color: '#949494', fontSize: 18, minWidth: 20, lineHeight: 32, fontWeight: '900' }} onPress={()=> {var productsTemp = that.state.products; productsTemp[index].like=productsTemp[index].like?false:true; that.setState({products:productsTemp})}}/>
                        <MaterialCommunityIcons name="cart-outline" style={{ color: '#c34097', fontSize: 18, minWidth: 20, lineHeight: 32, fontWeight: '900' }}  onPress={()=> Actions.shoppingList()}/>
                      </View>
                    </Item>
                  </View>
                })}
                <View style={[styles.content, {marginTop: 10,  paddingTop: 15, paddingBottom: 15, borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#ccc',backgroundColor: '#eee'}]}>
                  <Item style={[styles.basicContentItem, {alignItems: 'flex-start', borderBottomWidth:0, flexDirection:'row'}]}>
                    <View style={{flex: 1}}>
                      <Entypo name="info-with-circle" style={{ color: '#949494', fontSize: 13, minWidth: 20, lineHeight: 13, fontWeight: '900' }} />
                    </View>
                    <View style={{flex: 11}}>
                      <Text style={{color:'#222', fontWeight: '700', fontSize: 13, fontFamily: 'Roboto' }}>Pro Tip</Text>
                      <Text style={{fontSize:9, lineHeight: 14, color: '#949494', fontFamily: 'Roboto', fontWeight: '700' }}>Now that you found a look you are ready to try at home, don't forget the items below to complete your look like a professional.</Text>
                    </View>
                  </Item>
                </View>
                {this.state.completeProducts.map(function(product, index){
                  return <View key={index} style={[styles.content, {borderBottomWidth: 1, borderColor: '#eee',backgroundColor: '#fff'}]}>
                    <Item style={[styles.basicContentItem, {borderBottomWidth:0, flexDirection:'row', height: 60}]}>
                      <Image source={product.image} style={{flex:2, height: 40, resizeMode:'contain', borderWidth:1 , borderColor: '#eee'}}/>
                      <View style={{flex:7, flexDirection:'column', paddingLeft: 10, paddingRight: 10}}>

                        <Text style={{color:'#222', fontWeight: '700', fontSize: 13, fontFamily: 'Roboto'}}>{product.name}</Text>
                        <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>Price : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>${product.price}</Text></View>
                      </View>
                      <View style={{flex:1.5, flexDirection:'row',justifyContent:'space-between'}}>
                        <Ionicons name={product.like?"md-heart":"md-heart-outline"}  style={{ color:  '#949494', fontSize: 18, minWidth: 20, lineHeight: 32, fontWeight: '900' }} onPress={()=> {var productsTemp = that.state.completeProducts; productsTemp[index].like=productsTemp[index].like?false:true; that.setState({completeProducts:productsTemp})}}/>
                        <MaterialCommunityIcons name="cart-outline" style={{ color: '#c34097', fontSize: 18, minWidth: 20, lineHeight: 32, fontWeight: '900' }} onPress={()=> Actions.shoppingList()}/>
                      </View>
                    </Item>
                  </View>
                })}
                
              </View>

            </View>
            <Item style={[styles.beautyContentItem, {width:'100%', borderBottomWidth: 0, marginTop: 5, flexDirection: 'row', justifyContent:'space-between', marginTop:100, marginBottom:80}]}>
              <Button onPress={()=>{this.props.typePro=='nail'?Actions.nail(): Actions.virtualMakeOver()}} style={{width: "31%", height: 60, flexDirection:'column', backgroundColor: "#c34097", borderRadius: 0, marginRight: "3.5%", justifyContent: "center", alignSelf: "center"}}>
                <Text style={{fontSize: 8, color: "white", textAlign: "center", lineHeight: 12, fontWeight: "700", width:'100%'}}>
                  Try Another Look
                </Text>
              </Button>
              <Button onPress={()=>Actions.shoppingList()}  style={{width: "31%", height: 60, flexDirection:'column', backgroundColor: "transparent", borderWidth: 1, marginRight: "3.5%", borderRadius: 0, borderColor: "#949494", justifyContent: "center", alignSelf: "center"}}>
                <Text style={{width: '100%', fontWeight: "700", fontSize: 8, lineHeight: 12, textAlign: "center", color: "#949494"}}>
                  Review Shopping List
                </Text>
              </Button>
              <Button  onPress={()=>Actions.reviewMyFavorite()} style={{width: "31%", height: 60, flexDirection:'column', backgroundColor: "#4a4a4a", borderWidth: 1, borderRadius: 0, borderColor: "#949494", justifyContent: "center", alignSelf: "center"}}>
                <Text style={{fontWeight: "700", fontSize: 8, lineHeight: 12,  textAlign: "center", color: "white", width:'100%'}}>
                  Review Favorites
                </Text>
              </Button>
            </Item>
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

export default connect(mapStateToProps, bindAction)(LookDetails);