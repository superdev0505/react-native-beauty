
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
import { CheckBox } from 'react-native-elements'; 
import { NativeAdsManager, InterstitialAdManager, BannerView, AdSettings } from 'react-native-fbads';
import ComparisonSlider from "react-native-comparison-slider";
import { openDrawer } from '../../actions/drawer';
import SideBar from '../sideBar';
const { width, height } = Dimensions.get('window');


class ShoppingList extends Component {
  state = {
    sidebar: false,
    selectedAll: false,
    readmore: false,
    recommendedProducts : [
    {
      image: require('../../../images/Lipstick.jpg'),
      name: 'Lorem Dress T-Shirt',
      inStock: 2,
      price: 40.00,
      itemNo  : '#12304',
      availabeInStock: true,
      like: false,
    },
    {
      image: require('../../../images/Eyeliner.jpg'),
      name: 'Lorem Dress T-Shirt',
      inStock: 2,
      price: 40,
      itemNo  : '#12304',
      availabeInStock: true,
      like: false,
    },
    {
      image: require('../../../images/Blusher.jpg'),
      name: 'Lorem Dress T-Shirt',
      inStock: 2,
      price: 40,
      itemNo  : '#12304',
      availabeInStock: true,
      like: false,
    },
    {
      image: require('../../../images/Softflex.jpg'),
      name: 'Lorem Dress T-Shirt',
      inStock: 2,
      price: 40,
      itemNo  : '#12304',
      availabeInStock: true,
      like: false,
    },
    {
      image: require('../../../images/Lipstick.jpg'),
      name: 'Lorem Dress T-Shirt',
      inStock: 2,
      price: 40.00,
      itemNo  : '#12304',
      availabeInStock: true,
      like: false,
    },
    {
      image: require('../../../images/Eyeliner.jpg'),
      name: 'Lorem Dress T-Shirt',
      inStock: 2,
      price: 40,
      itemNo  : '#12304',
      availabeInStock: true,
      like: false,
    },
    {
      image: require('../../../images/Blusher.jpg'),
      name: 'Lorem Dress T-Shirt',
      inStock: 2,
      price: 40,
      itemNo  : '#12304',
      availabeInStock: true,
      like: false,
    },
    {
      image: require('../../../images/Softflex.jpg'),
      name: 'Lorem Dress T-Shirt',
      inStock: 2,
      price: 40,
      itemNo  : '#12304',
      availabeInStock: true,
      like: false,
    }
  ],
  completeProducts : [
    {
      image: require('../../../images/Softflex.jpg'),
      name: 'Lorem Dress T-Shirt',
      quantity: 2,
      price: 40,
      itemNo  : '#12304',
      selected: false
    },
    {
      image: require('../../../images/Softflex.jpg'),
      name: 'Lorem Dress T-Shirt',
      quantity: 2,
      price: 40,
      itemNo  : '#12304',
      selected: false
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
            <Text style={[styles.topHeaderText, {top: (Platform.OS == 'android') ? 10: 30}]}>Shopping List</Text>
            <Right >
              <Button style={{backgroundColor: 'white'}} onPress={()=> this.setState({sidebar: !this.state.sidebar})} >
                <MaterialIcons name="menu" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>
          <ScrollView style={{marginTop: 20}}>
            <View style={styles.section}>
              <View style={[styles.header,{flexDirection: 'row', alignItems:'center'}]}>
                <CheckBox
                  containerStyle={{backgroundColor: 'transparent', margin:0, padding:0, width: 25, borderWidth: 0}}
                  checked={this.state.selectedAll}
                  checkedColor='#949494'
                  uncheckedColor='#949494'
                  onPress={() => {var completeProductsTemp=this.state.completeProducts; completeProductsTemp.map(function(product){product.checked=!that.state.selectedAll}); this.setState({completeProducts: completeProductsTemp, selectedAll: !this.state.selectedAll })}}
                />
                <Text style={styles.headerInnerText}>
                  Select All
                </Text>
              </View>
              <View style={styles.contentWrap}>
                {this.state.completeProducts.map(function(product, index){
                  return <View key={index} style={[styles.content, {borderBottomWidth: 1, borderColor: '#eee',backgroundColor: '#fff'}]}>
                    <Item style={[styles.basicContentItem, {borderBottomWidth:0, flexDirection:'row', height: 90}]}>
                      <CheckBox
                        containerStyle={{backgroundColor: 'transparent', margin:0, padding:0, width: 25, borderWidth: 0}}
                        checked={product.checked}
                        checkedColor='#949494'
                        uncheckedColor='#949494'
                        onPress={() => {var completeProductsTemp= that.state.completeProducts; completeProductsTemp[index].checked=!completeProductsTemp[index].checked; that.setState({ completeProducts: completeProductsTemp})}}
                      />
                      <Image source={product.image} style={{flex:2, height: 60, resizeMode:'contain', borderWidth:1 , borderColor: '#eee'}}/>
                      <View style={{flex:5, flexDirection:'column', paddingLeft: 10, paddingRight: 10}}>

                        <Text style={{color:'#222', fontWeight: '700', fontSize: 13, fontFamily: 'Roboto'}}>{product.name}</Text>
                        <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontFamily: 'Roboto', fontSize: 10, fontWeight: '700'}}>Price : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>${product.price}</Text></View>
                        <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontFamily: 'Roboto', fontSize: 10, fontWeight: '700'}}>Item No : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>{product.itemNo}</Text></View>
                        <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontFamily: 'Roboto', fontSize: 10, fontWeight: '700'}}>Quantity : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>{product.quantity}</Text></View>
                      </View>
                      <View style={{flex:2, flexDirection:'row',justifyContent:'space-between'}}>
                        <Feather name="plus" style={{ color: '#aaa', paddingLeft: 5, alignItems:'center', textAlign:'center', paddingRight:5, borderColor: '#aaa', borderWidth:1, fontSize: 16, width: 25, lineHeight: 20, height:20, fontWeight: '300' }} onPress={()=> {var completeProductsTemp = that.state.completeProducts; completeProductsTemp[index].quantity+=1; that.setState({completeProducts:completeProductsTemp})}}/>
                        <Feather name="minus" style={{ color: '#aaa', paddingLeft: 5, alignItems:'center', textAlign:'center',paddingRight:5, fontSize: 16, borderColor: '#aaa', borderWidth:1, width: 25, lineHeight: 20, height: 20, fontWeight: '300' }}  onPress={()=> {var completeProductsTemp = that.state.completeProducts; completeProductsTemp[index].quantity-=completeProductsTemp[index].quantity>0?1:0; that.setState({completeProducts:completeProductsTemp})}}/>
                      </View>
                    </Item>
                  </View>
                })}
              </View>
              <Text style={styles.header}>
                Recommended Just For You
              </Text>
              <View style={styles.contentWrap}>
                
                {this.state.recommendedProducts.map(function(product, index){
                  if(index<4 || that.state.readmore){
                    return <View key={index} style={[styles.content, {borderBottomWidth: 1, borderColor: '#eee',backgroundColor: '#fff'}]}>
                      <Item style={[styles.basicContentItem, {borderBottomWidth:0, flexDirection:'row', height: 90}]}>
                        <Image source={product.image} style={{flex:2, height: 60, resizeMode:'contain', borderWidth:1 , borderColor: '#eee'}}/>
                        <View style={{flex:5, flexDirection:'column', paddingLeft: 10, paddingRight: 10}}>

                          <Text style={{color:'#222', fontWeight: '700', fontSize: 13, fontFamily: 'Roboto'}}>{product.name}</Text>
                          <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>Price : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>${product.price}</Text></View>
                          <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>Item No : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>${product.itemNo}</Text></View>
                          <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>In Stock : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>${product.inStock}</Text></View>
                          <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>Avaiable In-Store : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>${product.availabeInStock?'Yes':'No'}</Text></View>
                        </View>
                        <View style={{flex:1.5, flexDirection:'row',justifyContent:'space-between'}}>
                          <Ionicons name={product.like?"md-heart":"md-heart-outline"} style={{ color:  '#949494', fontSize: 15, minWidth: 20, lineHeight: 32, fontWeight: '900' }} onPress={()=> {var recommendedProductsTemp = that.state.recommendedProducts; recommendedProductsTemp[index].like=recommendedProductsTemp[index].like?false:true; that.setState({recommendedProducts:recommendedProductsTemp})}}/>
                          <MaterialCommunityIcons name="cart-outline" style={{ color: '#c34097', fontSize: 15, minWidth: 20, lineHeight: 32, fontWeight: '900' }} onPress={()=> Actions.shoppingList()}/>
                        </View>
                      </Item>
                    </View>
                  }
                })}
                
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{color:'#949494', fontWeight:'900', fontSize:9}}>{this.state.readmore?"Hide":"Show More"}</Text>
                <Entypo onPress={()=>this.setState({readmore: !this.state.readmore})} name={this.state.readmore?"chevron-thin-up":"chevron-thin-down"} style={{ color:  '#949494', fontSize: 15, minWidth: 20, lineHeight: 15, fontWeight: '900' }}/>          
              </View>

            </View>
            <Item style={[styles.beautyContentItem, {width:'100%', borderBottomWidth: 0, marginTop: 5, flexDirection: 'row', justifyContent:'space-between', marginTop:30, marginBottom:80}]}>
              <Button style={{width: "55%", height:50, flexDirection:'column', backgroundColor: "#4a4a4a", borderRadius: 0, marginRight: "5%", justifyContent: "center", alignSelf: "center"}}>
                <Text style={{fontSize: 11, color: "white", textAlign: "center", lineHeight: 11, fontWeight: "700", width:'100%'}}>
                  Print Shopping List
                </Text>
              </Button>
              <Button style={{width: "40%", flexDirection:'column', height:50, backgroundColor: "transparent", borderWidth: 1, marginRight: "3.5%", borderRadius: 0, borderColor: "#949494", justifyContent: "center", alignSelf: "center"}}>
                <Text style={{width: '100%', fontWeight: "700", fontSize: 11, lineHeight: 11, textAlign: "center", color: "#949494"}}>
                  View Digital Coupons
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

export default connect(mapStateToProps, bindAction)(ShoppingList);