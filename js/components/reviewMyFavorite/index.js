
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
const { width, height } = Dimensions.get('window');


class ShoppingList extends Component {
  state = {
    selectedAll: false,
    recommendedProducts : [
    {
      image: require('../../../images/Lipstick.jpg'),
      name: 'Lorem Dress T-Shirt',
      inStock: 2,
      price: 40.00,
      itemNo  : '#12304',
      availabeInStock: true,
      quantity: 2,
      expanded: false,
      like: false,
      salesPrice: 30.00,
      packageSize: 3,
      ingredients: 'lorem ipsum',
      brand: 'lorem ipsum',
      color: '#202020'
    },
    {
      image: require('../../../images/Eyeliner.jpg'),
      name: 'Lorem Dress T-Shirt',
      inStock: 2,
      price: 40,
      itemNo  : '#12304',
      quantity: 2,
      availabeInStock: true,
      expanded: false,
      like: false,
      salesPrice: 30.00,
      packageSize: 3,
      ingredients: 'lorem ipsum',
      brand: 'lorem ipsum',
      color: '#202020'
    },
    {
      image: require('../../../images/Blusher.jpg'),
      name: 'Lorem Dress T-Shirt',
      inStock: 2,
      price: 40,
      itemNo  : '#12304',
      quantity: 2,
      availabeInStock: true,
      expanded: false,
      like: false,
      salesPrice: 30.00,
      packageSize: 3,
      ingredients: 'lorem ipsum',
      brand: 'lorem ipsum',
      color: '#202020'
    }
  ],
  completeProducts : [
    {
      image: require('../../../images/Softflex.jpg'),
      name: 'Lorem Dress T-Shirt',
      quantity: 2,
      price: 40,
      itemNo  : '#12304',
      expanded: false,
      selected: false
    },
    {
      image: require('../../../images/Softflex.jpg'),
      name: 'Lorem Dress T-Shirt',
      quantity: 2,
      price: 40,
      itemNo  : '#12304',
      expanded: false,
      selected: false
    },
    {
      image: require('../../../images/Softflex.jpg'),
      name: 'Lorem Dress T-Shirt',
      quantity: 2,
      price: 40,
      itemNo  : '#12304',
      expanded: false,
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
          
          <Header style={{backgroundColor: 'white', borderBottomWidth: 0 }}>
            <Left >
              <Button style={{backgroundColor: 'white'}} onPress={() => Actions.pop()} >
                <Feather name="arrow-left" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Left>
            <Text style={[styles.topHeaderText, {top: (Platform.OS == 'android') ? 10: 30}]}>My Favorites</Text>
            <Right >
              <Button style={{backgroundColor: 'white'}} onPress={this.props.openDrawer} >
                <MaterialIcons name="menu" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>
          <ScrollView style={{marginTop: 20}}>
            <View style={styles.section}>
              <View style={[styles.contentWrap, {borderTopWidth: 0}]}>
                <Button onPress={()=>Actions.shoppingList()} style={{marginTop:10 ,marginBottom:10 , width: "60%", flexDirection:'column', backgroundColor: "#eee", borderWidth: 1, borderRadius: 0, borderColor: "#949494", justifyContent: "center", alignSelf: "center"}}>
                  <Text style={{width: '100%', fontWeight: "700", fontSize: 14, lineHeight: 14, textAlign: "center", color: "#4a4a4a"}}>
                    Manage Favorites
                  </Text>
                </Button>
                
                {this.state.recommendedProducts.map(function(product, index){
                  return <View key={index} style={[styles.content, {borderBottomWidth: 1, borderColor: '#ccc',backgroundColor: '#eee'}]}>
                    <Item style={[styles.basicContentItem, {borderBottomWidth:0, flexDirection:'row', height: 90}]} onPress={()=>{var recommendedProductsTemp=that.state.recommendedProducts;recommendedProductsTemp[index].expanded=!recommendedProductsTemp[index].expanded; that.setState({recommendedProducts:recommendedProductsTemp})}}>
                      <Image source={product.image} style={{flex:2, height: 60, resizeMode:'contain', borderWidth:1 , borderColor: '#eee'}}/>
                      <View style={{flex:5, flexDirection:'column', paddingLeft: 10, paddingRight: 10}}>

                        <Text style={{color:'#222', fontWeight: '700', fontSize: 13, fontFamily: 'Roboto'}}>{product.name}</Text>
                        <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>Price : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>${product.price}</Text></View>
                        <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>Item No : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>{product.itemNo}</Text></View>
                        <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>Quantity : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>{product.quantity}</Text></View>
                      </View>
                      <View style={{flex:1, flexDirection:'row',justifyContent:'flex-end'}}>
                        <MaterialCommunityIcons name="cart-outline" style={{ color: '#c34097', fontSize: 15, minWidth: 20, lineHeight: 32, fontWeight: '900' }} onPress={()=> Actions.shoppingList()}/>
                      </View>
                    </Item>
                    <View style={{display: product.expanded? 'flex': 'none'}}>
                      <Text style={styles.header}>
                        Availability Options
                      </Text>
                      <Item style={[styles.basicContentItem, {borderBottomWidth:0, flexDirection:'row', height: 90}]}>
                        
                        <View   style={{flex:5, flexDirection:'column', paddingLeft: 10, paddingRight: 10}}>

                          <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>Sale Price : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>${product.salesPrice}</Text></View>
                          <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>Package Size : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>{product.packageSize}</Text></View>
                          <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>Ingredients : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>{product.ingredients}</Text></View>
                          <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>Brand : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>{product.brand}</Text></View>
                          <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>Color Code : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>{product.color}</Text></View>
                          <View style={{flexDirection:'row'}}><Text  style={{color:'#949494', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>Availability in Primary & Secondary Favorite store : </Text><Text  style={{color:'#222', fontSize: 10, fontWeight: '700', fontFamily: 'Roboto'}}>{product.availabeInStock?'Yes':'No'}</Text></View>
                        </View>
                        
                      </Item>
                      <Item style={[styles.beautyContentItem, {width:'100%', borderBottomWidth: 0, marginTop: 5, marginBottom: 5, flexDirection: 'row', justifyContent:'space-between'}]}>
                        
                        <Button onPress={()=>Actions.shoppingList()} style={{width: "45%", flexDirection:'column', backgroundColor: "transparent", marginRight: "10%", borderWidth: 1, borderRadius: 0, borderColor: "#949494", justifyContent: "center", alignSelf: "center"}}>
                          <Text style={{width: '100%', fontWeight: "700", fontSize: 12, lineHeight: 12, textAlign: "center", color: "#949494"}}>
                            Explore Different Stores
                          </Text>
                        </Button>
                        <Button style={{width: "45%", flexDirection:'column', backgroundColor: "#4a4a4a", borderRadius: 0, justifyContent: "center", alignSelf: "center"}}>
                          <Text style={{fontSize: 12, color: "white", textAlign: "center", lineHeight: 12, fontWeight: "700", width:'100%'}}>
                            
                            Explore Alternate Products
                          </Text>
                        </Button>
                      </Item>
                    </View>
                  </View>
                })}
                
              </View>
              <View style={[styles.header,{flexDirection: 'row', alignItems:'center', paddingLeft:30, paddingRight:30}]}>
                <View style={{flex: 5,flexDirection: 'row'}}>
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
                <View style={{flex:2, flexDirection:'row',justifyContent:'flex-end'}}>
                  <MaterialIcons name="add-shopping-cart" style={{ color: '#aaa', paddingLeft: 5, alignItems:'flex-end', textAlign:'right', paddingRight:5, fontSize: 20, lineHeight: 20, height:20, fontWeight: '300' }} onPress={()=> Actions.shoppingList()}/>
                  <MaterialCommunityIcons name="delete" style={{ color: '#aaa', paddingLeft: 5, alignItems:'flex-end', textAlign:'right',paddingRight:5, fontSize: 20, lineHeight: 20, height: 20, fontWeight: '300' }}/>
                </View>
              </View>
              <View style={styles.contentWrap}>
                {this.state.completeProducts.map(function(product, index){
                  return <View key={index} style={[styles.content, {borderBottomWidth: 1, borderColor: '#ccc',backgroundColor: '#eee'}]}>
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

            </View>
            <Item style={[styles.beautyContentItem, {width:'100%', borderBottomWidth: 0, marginTop: 5, flexDirection: 'row', justifyContent:'space-between', marginTop:70, marginBottom:80}]}>
              <Button onPress={()=>Actions.virtualMakeOver()} style={{height: 55, width: "45%", flexDirection:'column', backgroundColor: "#4a4a4a", borderRadius: 0, marginRight: "10%", justifyContent: "center", alignSelf: "center"}}>
                <Text style={{fontSize: 12, color: "white", textAlign: "center", lineHeight: 12, fontWeight: "700", width:'100%'}}>
                  Back To Shopping
                </Text>
              </Button>
              <Button onPress={()=>Actions.shoppingList()} style={{height: 55, width: "45%", flexDirection:'column', backgroundColor: "#c34097", borderWidth: 0, borderRadius: 0, borderColor: "#949494", justifyContent: "center", alignSelf: "center"}}>
                <Text style={{width: '100%', fontWeight: "700", fontSize: 12, lineHeight: 12, textAlign: "center", color: "#fff"}}>
                  Proceed To Shopping List
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