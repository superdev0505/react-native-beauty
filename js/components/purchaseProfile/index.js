
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown';
import { Image, Platform, ScrollView, Modal, Dimensions, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { Container, View, Text, Button, Picker, Content, Icon, Card, Item, Input, Switch, Thumbnail, Header, Left, Right, CardItem , Title} from 'native-base';
import styles from './styles';
import { Feather, FontAwesome, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Font } from 'expo';
import FooterTabs from '../footerTabs';
import { openDrawer } from '../../actions/drawer';
const ItemPic = Picker.Item;
const profile = require('../../../images/profile-default.png');

class PurchaseProfile extends Component {
  state = {
    repeat: 'Daily',
    monthlySpend: '',
    preferred: 'Target',
    buyBeautyProduct: true,
    familySize: 'Single',
    eyeliner: 'Classic Black',
    mascara: 'Ruby Woo',
    lipstick: 'Flawless Fusion',
    foundation: 'Defined Gel'
  };
  render() {
      var percent = 0;
      percent += (this.state.favoriteColorPalette>0? 12:0);
      percent += (this.state.beautyPersonality>0? 11:0);
      percent += (this.state.skinType? 11:0);
      percent += (this.state.skinTone>0? 11:0);
      percent += (this.state.eyeColor>0? 11:0);
      percent += (this.state.skinConcerns? 11:0);
      percent += (this.state.hairType? 11:0);
      percent += (this.state.ethnicity? 11:0);
      percent += (this.state.hairStyling? 11:0);  
    // console.disableYellowBox = true;
      return (
        <Container   style={{backgroundColor:'white'}}>
          <Header style={{backgroundColor: 'white', borderBottomWidth: 0 }}>
            <Left>
              <Button style={{backgroundColor: 'white'}} onPress={() => Actions.pop()} >
                <Feather name="arrow-left" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Left>
            <Text style={[styles.topHeaderText, {top: (Platform.OS == 'android') ? 10: 30}]}>Purchase Profile</Text>
            <Right>
              <Button style={{backgroundColor: 'white'}} onPress={this.props.openDrawer} >
                <MaterialIcons name="menu" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>
          <ScrollView style={{marginTop: 20}}>
          <View style={styles.section}>
            <View style={styles.beautyContentWrap}>
              <View style={styles.content}>
                
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View  style={{flexDirection:'row', justifyContent: 'flex-start', flex: 7}}>
                    <Text style={styles.leftEl}>
                      Frequency of Beauty Purchases:
                    </Text>
                  </View>
                  <View style={[styles.beautyProfileRightEl, {flexDirection: 'row', justifyContent: 'flex-end', flex:3, alignItems:'center', borderWidth: 1, borderColor: '#949494', marginTop: 15, marginBottom: 15, paddingRight:0 }]}>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start', flex: 1}}>
                      <Ionicons name="ios-arrow-down" size={20} style={[{position: 'absolute', right: 10, top: 7, color: '#949494', zIndex: 10000}]}/>
                     
                      <ModalDropdown style={{ flex: 1, height: 30, alignItems: 'stretch', alignSelf: 'center', justifyContent:'center'}} dropdownStyle= {{width: 70}} textStyle={{height:'100%', width:'100%', fontSize: 13, color: '#949494', fontWeight:'700',  lineHeight: 30, alignSelf:'center'}} onSelect={(idx, category)=>this.setState({repeat: category})} options={['Daily', 'Weekly']}  defaultValue={this.state.repeat}>
                      </ModalDropdown>
                    </View>
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View  style={{flexDirection:'row', justifyContent: 'flex-start', flex: 5}}>
                    <Text style={styles.leftEl}>
                      Monthly Spend on Beauty Products:
                    </Text>
                  </View>
                  <View style={[styles.beautyProfileRightEl, {flexDirection: 'row', justifyContent: 'flex-end', borderWidth: 0, flex:2, alignItems:'center', marginTop: 15, marginBottom: 15, paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0}]}>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start', flex: 1}}>
                      <Button style={{backgroundColor: '#c34097', borderRadius: 0, height:38, paddingLeft: 0, paddingRight: 0, width: '100%', alignItems: 'center'}}><Text style={{color: 'white', width:'100%', textAlign: 'center'}}>$</Text></Button>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start', flex: 3, borderWidth: 1, borderLeftWidth: 0,  borderColor: '#949494'}}>
                      <Input
                        style={{ fontSize: 14, fontWeight: '700', color: '#4a4a4a', height:36}}
                        placeholder="0 - 50"
                        placeholderTextColor="#949494"
                      />
                    </View>
                  </View>
                </Item>
                
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View  style={{flexDirection:'row', justifyContent: 'flex-start', flex: 3}}>
                    <Text style={styles.leftEl}>
                      Preferred Retailers for Beauty Purchases:
                    </Text>
                  </View>
                  <View style={[styles.beautyProfileRightEl, {flexDirection: 'row', justifyContent: 'flex-end', flex:1, alignItems:'center', borderWidth: 1, borderColor: '#949494', marginTop: 15, marginBottom: 15, paddingRight:0 }]}>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start', flex: 1}}>
                      <Ionicons name="ios-arrow-down" size={20} style={[{position: 'absolute', right: 10, top: 7, color: '#949494', zIndex: 10000}]}/>
                      <ModalDropdown style={{ flex: 1, height: 30, alignItems: 'stretch', alignSelf: 'center', justifyContent:'center', position:'relative'}} dropdownStyle= {{width: 70}} textStyle={{height:'100%', width:'100%', fontSize: 13, color: '#949494', fontWeight:'700',  lineHeight: 30, alignSelf:'center'}} onSelect={(idx, category)=>this.setState({preferred: category})} options={['Target', 'Target1']}  defaultValue={this.state.preferred}>
                      </ModalDropdown>
                    </View>
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'column', justifyContent:'space-between', paddingTop: 15, paddingBottom: 15}]}>
                  <View  style={{flexDirection:'row', justifyContent: 'flex-start', flex: 1, width: '100%'}}>
                    <Text style={styles.leftEl}>
                      Do You Buy Beauty Products Online?
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 15}}>
                    <View style={{flexDirection: 'row', justifyContent:'center', flex: 1}}>
                      <Button style={{backgroundColor:this.state.buyBeautyProduct?'#c34097':'#fff', borderWidth: 1, borderRadius:0, borderColor: '#c34097', height: 40, width: '100%'}}><Text style={{color: this.state.buyBeautyProduct?'white':'#c34097', fontSize:13, textAlign: 'center', width: '100%'}} onPress={()=>this.setState({buyBeautyProduct: true})}>Yes</Text></Button>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'center', flex: 1}}>
                      <Button style={{backgroundColor:this.state.buyBeautyProduct?'#fff':'#c34097', borderWidth: 1, borderRadius:0, borderColor: '#c34097', height: 40, width: '100%'}}><Text style={{color: this.state.buyBeautyProduct?'#c34097':'white', fontSize:13, textAlign: 'center', width: '100%'}} onPress={()=>this.setState({buyBeautyProduct: false})}>No</Text></Button>
                    </View>
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View  style={{flexDirection:'row', justifyContent: 'flex-start', flex: 3}}>
                    <Text style={styles.leftEl}>
                      Family Size:
                    </Text>
                  </View>
                  <View style={[styles.beautyProfileRightEl, {flexDirection: 'row', justifyContent: 'flex-end', flex:1, alignItems:'center', borderWidth: 1, borderColor: '#949494', marginTop: 15, marginBottom: 15, paddingRight:0 }]}>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start', flex: 1}}>
                      <Ionicons name="ios-arrow-down" size={20} style={[{position: 'absolute', right: 10, top: 7, color: '#949494', zIndex: 10000}]}/>
                      <ModalDropdown style={{ flex: 1, height: 30, alignItems: 'stretch', alignSelf: 'center', justifyContent:'center', position:'relative'}} dropdownStyle= {{width: 70}} textStyle={{height:'100%', width:'100%', fontSize: 13, color: '#949494', fontWeight:'700',  lineHeight: 30, alignSelf:'center'}} onSelect={(idx, category)=>this.setState({familySize: category})} options={['Single', 'Double']}  defaultValue={this.state.familySize}>
                      </ModalDropdown>
                    </View>
                  </View>
                </Item>
                <View style={{height:30, backgroundColor:'#fff'}}>
                </View>
                <Item style={{height:30, paddingLeft:30, paddingRight:30, backgroundColor:'#eee', flexDirection:'row', alignItems: 'center'}}>
                  <View style={{flex:3, flexDirection:'row'}}>

                  </View>
                  <View style={{flex:4, flexDirection:'row', paddingLeft: 5, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize: 11, color: "#4a4a4a", fontWeight: '700'}}>Product Brand</Text>
                  </View>
                  <View style={{flex:3, flexDirection:'row', paddingLeft: 5, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize: 11, color: "#4a4a4a", fontWeight: '700'}}>Product Name</Text>
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {paddingTop: 15, paddingBottom: 15, borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flexDirection: 'row', flex: 3}}>
                    <Text style={styles.leftEl}>Favorite Eyeliner:</Text>
                  </View>
                  <View style={{flexDirection: 'row', flex: 4, borderWidth: 1, borderColor: '#949494', height: 38, paddingLeft: 5}}>
                    <Ionicons name="ios-arrow-down" size={20} style={[{position: 'absolute', right: 10, top: 7, color: '#949494', zIndex: 10000}]}/>
                    <ModalDropdown style={{ flex: 1, height: 30, alignItems: 'stretch', alignSelf: 'center', justifyContent:'center'}} dropdownStyle= {{width: 70}} textStyle={{height:'100%', width:'100%', fontSize: 13, color: '#949494', fontWeight:'700',  lineHeight: 30, alignSelf:'center'}} onSelect={(idx, category)=>this.setState({eyeliner: category})} options={['Classic Black', 'Black']}  defaultValue={this.state.eyeliner}>
                    </ModalDropdown>
                  </View>
                  <View style={{flexDirection: 'row', flex: 3, paddingLeft: 5}}>
                    <Input
                      style={{ fontSize: 14, fontWeight: '700', color: '#4a4a4a', height:38, borderWidth: 1, borderColor: '#949494'}}
                      placeholder="Maybelline"
                      placeholderTextColor="#949494"
                    />
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {paddingTop: 15, paddingBottom: 15, borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flexDirection: 'row', flex: 4}}>
                    <Text style={styles.leftEl}>Favorite Mascara:</Text>
                  </View>
                  <View style={{flexDirection: 'row', flex: 3, borderWidth: 1, borderColor: '#949494', height: 38, paddingLeft: 5}}>
                    <Ionicons name="ios-arrow-down" size={20} style={[{position: 'absolute', right: 10, top: 7, color: '#949494', zIndex: 10000}]}/>
                    <ModalDropdown style={{ flex: 1, height: 30, alignItems: 'stretch', alignSelf: 'center', justifyContent:'center'}} dropdownStyle= {{width: 70}} textStyle={{height:'100%', width:'100%', fontSize: 13, color: '#949494', fontWeight:'700',  lineHeight: 30, alignSelf:'center'}} onSelect={(idx, category)=>this.setState({mascara: category})} options={['Ruby Woo', 'Woo']}  defaultValue={this.state.mascara}>
                    </ModalDropdown>
                  </View>
                  <View style={{flexDirection: 'row', flex: 3, paddingLeft: 5}}>
                    <Input
                      style={{ fontSize: 14, fontWeight: '700', color: '#4a4a4a', height:38, borderWidth: 1, borderColor: '#949494'}}
                      placeholder="Clinique"
                      placeholderTextColor="#949494"
                    />
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {paddingTop: 15, paddingBottom: 15, borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flexDirection: 'row', flex: 3}}>
                    <Text style={styles.leftEl}>Favorite Lipstick:</Text>
                  </View>
                  <View style={{flexDirection: 'row', flex: 4.5, borderWidth: 1, borderColor: '#949494', height: 38, paddingLeft: 5}}>
                    <Ionicons name="ios-arrow-down" size={20} style={[{position: 'absolute', right: 10, top: 7, color: '#949494', zIndex: 10000}]}/>
                    <ModalDropdown style={{ flex: 1, height: 30, alignItems: 'stretch', alignSelf: 'center', justifyContent:'center'}} dropdownStyle= {{width: 70}} textStyle={{height:'100%', width:'100%', fontSize: 13, color: '#949494', fontWeight:'700',  lineHeight: 30, alignSelf:'center'}} onSelect={(idx, category)=>this.setState({lipstick: category})} options={['Flawless Fusion', 'Fusion']}  defaultValue={this.state.lipstick}>
                    </ModalDropdown>
                  </View>
                  <View style={{flexDirection: 'row', flex: 3, paddingLeft: 5}}>
                    <Input
                      style={{ fontSize: 14, fontWeight: '700', color: '#4a4a4a', height:38, borderWidth: 1, borderColor: '#949494'}}
                      placeholder="Laura Mercier"
                      placeholderTextColor="#949494"
                    />
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {paddingTop: 15, paddingBottom: 15, borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flexDirection: 'row', flex: 3}}>
                    <Text style={styles.leftEl}>Favorite Foundation:</Text>
                  </View>
                  <View style={{flexDirection: 'row', flex: 4, borderWidth: 1, borderColor: '#949494', height: 38, paddingLeft: 5}}>
                    <Ionicons name="ios-arrow-down" size={20} style={[{position: 'absolute', right: 10, top: 7, color: '#949494', zIndex: 10000}]}/>
                    <ModalDropdown style={{ flex: 1, height: 30, alignItems: 'stretch', alignSelf: 'center', justifyContent:'center'}} dropdownStyle= {{width: 70}} textStyle={{height:'100%', width:'100%', fontSize: 13, color: '#949494', fontWeight:'700',  lineHeight: 30, alignSelf:'center'}} onSelect={(idx, category)=>this.setState({foundation: category})} options={['Defined Gel', 'Gel']}  defaultValue={this.state.foundation}>
                    </ModalDropdown>
                  </View>
                  <View style={{flexDirection: 'row', flex: 3, paddingLeft: 5}}>
                    <Input
                      style={{ fontSize: 14, fontWeight: '700', color: '#4a4a4a', height:38, borderWidth: 1, borderColor: '#949494'}}
                      placeholder="Bobby Brown"
                      placeholderTextColor="#949494"
                    />
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 0, marginBottom: 15, marginTop: 15}]}>
                  <View style={{marginBottom: 15, marginTop: 15, paddingLeft: 15, backgroundColor: '#f4f4f4', borderWidth: 1, borderColor: '#949494', alignItems: "center", flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row', justifyContent: 'flex-start', flex: 1}}>
                      <Text style={styles.leftEl}>
                        Welcome Jane Smith!
                      </Text>
                    </View>
                    <View style={[styles.beautyProfileRightEl, {borderWidth: 0, backgroundColor: "transparent", flexDirection:'row', justifyContent: 'flex-end', flex: 1, paddingRight: 15}]}>
                      <Text style={{fontSize: 8, color: '#4a4a4a', fontWeight: '700', textAlign: 'right'}}>Your beauty profile is {percent}% complete</Text>
                    </View>
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 0, marginBottom:70, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <Button style={{width: "45%", backgroundColor: "#c34097", borderRadius: 0, marginRight: "10%", justifyContent: "center", alignSelf: "center", paddingLeft: 5, paddingRight: 5}}>
                    <Text style={{fontSize: 13, fontWeight: '700', color: "white", textAlign: "center", fontWeight: "700"}}>
                      Done
                    </Text>
                  </Button>
                  <Button onPress={() => Actions.settings()} style={{width: "45%", backgroundColor: "#fff", borderWidth: 1, borderRadius: 0, borderColor: "#949494", justifyContent: "center", alignSelf: "center", paddingLeft: 5, paddingRight: 5}}>
                    <Text style={{fontWeight: "700", fontSize: 13, fontWeight: '700', textAlign: "center", color: "#949494"}}>
                      Cancel
                    </Text>
                  </Button>
                </Item>

              </View>

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

export default connect(mapStateToProps, bindAction)(PurchaseProfile);