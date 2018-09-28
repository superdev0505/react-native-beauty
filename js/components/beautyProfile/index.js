
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Platform, ScrollView, Modal, Dimensions, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { Container, View, Text, Button, Picker, Content, Icon, Card, Item, Input, Switch, Thumbnail, Header, Left, Right, CardItem , Title} from 'native-base';
import styles from './styles';
import { Feather, FontAwesome, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Font } from 'expo';
import { openDrawer } from '../../actions/drawer';
import FooterTabs from '../footerTabs';
const ItemPic = Picker.Item;
const profile = require('../../../images/profile-default.png');

class BeautyProfile extends Component {
  state = {
    favoriteColorPalette: 1,
    beautyPersonality: 0,
    skinType: "Fair",
    skinTone: 1,
    eyeColor: 1,
    skinConcerns: "Aging",
    hairType: "Wavy",
    ethnicity: "Caucasian",
    hairStyling: "Short",
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
        <Container style={{backgroundColor:'white'}}>
          <Header style={{backgroundColor: 'white', borderBottomWidth: 0 }}>
            <Left>
              <Button style={{backgroundColor: 'white'}} onPress={() => Actions.pop()} >
                <Feather name="arrow-left" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Left>
            <Text style={[styles.topHeaderText, {top: (Platform.OS == 'android') ? 10: 30}]}>Beauty Profile</Text>
            <Right>
              <Button style={{backgroundColor: 'white'}} onPress={this.props.openDrawer} >
                <MaterialIcons name="menu" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>
          <ScrollView style={{marginTop: 20}}>
          <View style={styles.section}>
            <Text style={styles.header}>
              Beauty Personality
            </Text>
            <View style={styles.beautyContentWrap}>
              <View style={styles.content}>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flexDirection:'row', justifyContent: 'flex-start', flex: 2}}>
                    <Text style={styles.leftEl}>
                      Favorite Color Palette:
                    </Text>
                  </View>
                  <View style={[styles.beautyProfileRightEl, {flexDirection:'row', justifyContent: 'flex-end', flex: 3}]}>
                    <View  style={[{borderColor: this.state.favoriteColorPalette==1?'#4a4a4a':'transparent'}, {padding: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: '#fff', borderRadius: 0, width: '20%', minWidth: 20, alignItems: 'center', alignSelf: 'stretch'}]}>
                      <TouchableHighlight onPress={() => this.setState({favoriteColorPalette: 1})} style={{alignSelf:'stretch'}}>
                        <View>
                          <View style={{backgroundColor:'blue', width: '100%', height: 20, alignSelf:'stretch'}}>
                          </View>
                          <Text style={{color: '#949494', fontSize: 7.5, fontWeight: '700', paddingTop:5, alignSelf:'stretch', textAlign: 'center'}}>
                            Blue
                          </Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    <View  style={[{borderColor: this.state.favoriteColorPalette==2?'#4a4a4a':'transparent'}, {padding: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: '#fff', borderRadius: 0, width: '20%', minWidth: 20, alignItems: 'center', alignSelf: 'stretch'}]}>
                      <TouchableHighlight  onPress={() => this.setState({favoriteColorPalette: 2})} style={{alignSelf:'stretch'}}>
                        <View>
                          <View style={{backgroundColor:'green', width: '100%', height: 20, alignSelf:'stretch'}}>
                          </View>
                          <Text style={{color: '#949494', fontSize: 7.5, fontWeight: '700', paddingTop:5, alignSelf:'stretch', textAlign: 'center'}}>
                            Green
                          </Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    <View  style={[{borderColor: this.state.favoriteColorPalette==3?'#4a4a4a':'transparent'}, {padding: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: '#fff', borderRadius: 0, width: '20%', minWidth: 20, alignItems: 'center', alignSelf: 'stretch'}]}>
                      <TouchableHighlight  onPress={() => this.setState({favoriteColorPalette: 3})} style={{alignSelf:'stretch'}}>
                        <View>
                          <View style={{backgroundColor:'#e83865', width: '100%', height: 20, alignSelf:'stretch'}}>
                          </View>
                          <Text style={{color: '#949494', fontSize: 7.5, fontWeight: '700', paddingTop:5, alignSelf:'stretch', textAlign: 'center'}}>
                            Pink
                          </Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    <View  style={[{borderColor: this.state.favoriteColorPalette==4?'#4a4a4a':'transparent'}, {padding: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: '#fff', borderRadius: 0, width: '20%', minWidth: 20, alignItems: 'center', alignSelf: 'stretch'}]}>
                      <TouchableHighlight  onPress={() => this.setState({favoriteColorPalette: 4})} style={{alignSelf:'stretch'}}>
                        <View>
                          <View style={{backgroundColor:'#e14253', width: '100%', height: 20, alignSelf:'stretch'}}>
                          </View>
                          <Text style={{color: '#949494', fontSize: 7.5, fontWeight: '700', paddingTop:5, alignSelf:'stretch', textAlign: 'center'}}>
                            Pinkish
                          </Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    <View   style={[{borderColor: this.state.favoriteColorPalette==5?'#4a4a4a':'transparent'}, {padding: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: '#fff', borderRadius: 0, width: '20%', minWidth: 20, alignItems: 'center', alignSelf: 'stretch'}]}>
                      <TouchableHighlight  onPress={() => this.setState({favoriteColorPalette: 5})} style={{alignSelf:'stretch'}}>
                        <View>
                          <View style={{backgroundColor:'#202020', width: '100%', height: 20, alignSelf:'stretch'}}>
                          </View>
                          <Text style={{color: '#949494', fontSize: 7.5, fontWeight: '700', paddingTop:5, alignSelf:'stretch', textAlign: 'center'}}>
                            Other
                          </Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flexDirection:'row', justifyContent: 'flex-start', flex: 2}}>
                    <Text style={styles.leftEl}>
                      Beauty Personality:
                    </Text>
                  </View>
                  <View style={[styles.beautyProfileRightEl, {flexDirection:'row', justifyContent: 'flex-start', flex: 3}]}>
                    <View  style={[{borderColor: this.state.beautyPersonality==1?'#4a4a4a' : '#949494'}, {padding: 2, flexDirection: 'column', backgroundColor: '#e8cbb8', borderWidth: 1, borderRadius: 0, width: '25%', alignItems: 'center', alignSelf: 'center'}]}>
                      <TouchableHighlight onPress={() => this.setState({beautyPersonality: 1})}>
                        <Entypo name="add-user" size={30} style={[styles.contentIcon, {color: '#9a9a9a'}]}/>
                      </TouchableHighlight> 
                    </View>
                    <View  style={[{borderColor: this.state.beautyPersonality==2?'#4a4a4a' : '#949494'}, {padding: 2, flexDirection: 'column', backgroundColor: '#e8cbb8', borderWidth: 1, borderRadius: 0, width: '25%', alignItems: 'center', alignSelf: 'center'}]}>
                      
                      <TouchableHighlight onPress={() => this.setState({beautyPersonality: 2})}>
                        <Entypo name="add-user" size={30} style={[styles.contentIcon, {color: '#9a9a9a'}]}/>
                      </TouchableHighlight>                        
                    </View>
                    <View  style={[{borderColor: this.state.beautyPersonality==3?'#4a4a4a' : '#949494'}, {padding: 2, flexDirection: 'column', backgroundColor: '#e8cbb8', borderWidth: 1, borderRadius: 0, width: '25%', alignItems: 'center', alignSelf: 'center'}]}>
                      
                      <TouchableHighlight onPress={() => this.setState({beautyPersonality: 3})}>
                        <Entypo name="add-user" size={30} style={[styles.contentIcon, {color: '#9a9a9a'}]}/>
                      </TouchableHighlight>
                    </View>
                    <View  style={[{borderColor: this.state.beautyPersonality==4?'#4a4a4a' : '#949494'}, {padding: 2, flexDirection: 'column', backgroundColor: '#e8cbb8', borderWidth: 1, borderRadius: 0, width: '25%', alignItems: 'center', alignSelf: 'center'}]}>
                      
                      <TouchableHighlight onPress={() => this.setState({beautyPersonality: 4})}>
                        <Entypo name="add-user" size={30} style={[styles.contentIcon, {color: '#9a9a9a'}]}/>
                      </TouchableHighlight>
                    </View>
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View  style={{flexDirection:'row', justifyContent: 'flex-start', flex: 2}}>
                    <Text style={styles.leftEl}>
                      Skin Type:
                    </Text>
                  </View>
                  <View style={[styles.beautyProfileRightEl, {flexDirection: 'row', justifyContent: 'flex-end', flex:3, alignItems:'center', borderWidth: 1, borderColor: '#949494', marginTop: 15, marginBottom: 15}]}>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start', flex: 1}}>
                      <Ionicons name="ios-arrow-down" size={20} style={[{position: 'absolute', right: 10, top: 7, color: '#949494'}]}/>
                      <Picker
                        mode="dropdown"
                        style={{ paddingLeft: 5,  height: 30, width: 200, backgroundColor:'transparent' }}
                        itemTextStyle = {{color: '#4a4a4a'}}
                        textStyle = {{color: '#949494', fontSize: 13, fontWeight: '700'}}
                        selectedValue={this.state.skinType}
                        onValueChange={(key) => this.setState({ skinType: key })}
                      >
                        <ItemPic label="Fair" value="Fair" />
                        <ItemPic label="Unfair" value="Unfair" />

                      </Picker>
                    </View>
                  </View>
                </Item>
                  <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View  style={{flexDirection:'row', justifyContent: 'flex-start', flex: 2}}>
                    <Text style={styles.leftEl}>
                      Skin Tone:
                    </Text>
                  </View>
                  <View style={[styles.beautyProfileRightEl, {flexDirection:'row', justifyContent: 'flex-end', flex: 3}]}>
                    <View  style={[{borderColor: this.state.skinTone==1?'#4a4a4a':'transparent'}, {padding: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: '#fff', borderRadius: 0, width: '20%', minWidth: 20, alignItems: 'center', alignSelf: 'stretch'}]}>
                      <TouchableHighlight onPress={() => this.setState({skinTone: 1})} style={{alignSelf:'stretch'}}>
                        <View>
                          <View style={{backgroundColor:'#e8cbb8', width: '100%', height: 20, alignSelf:'stretch'}}>
                          </View>
                          <Text style={{color: '#949494', fontSize: 7.5, fontWeight: '700', paddingTop:5, alignSelf:'stretch', textAlign: 'center'}}>
                            Fair
                          </Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    <View  style={[{borderColor: this.state.skinTone==2?'#4a4a4a':'transparent'}, {padding: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: '#fff', borderRadius: 0, width: '20%', minWidth: 20, alignItems: 'center', alignSelf: 'stretch'}]}>
                      <TouchableHighlight  onPress={() => this.setState({skinTone: 2})} style={{alignSelf:'stretch'}}>
                        <View>
                          <View style={{backgroundColor:'#d3b29c', width: '100%', height: 20, alignSelf:'stretch'}}>
                          </View>
                          <Text style={{color: '#949494', fontSize: 7.5, fontWeight: '700', paddingTop:5, alignSelf:'stretch', textAlign: 'center'}}>
                            Light
                          </Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    <View  style={[{borderColor: this.state.skinTone==3?'#4a4a4a':'transparent'}, {padding: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: '#fff', borderRadius: 0, width: '20%', minWidth: 20, alignItems: 'center', alignSelf: 'stretch'}]}>
                      <TouchableHighlight  onPress={() => this.setState({skinTone: 3})} style={{alignSelf:'stretch'}}>
                        <View>
                          <View style={{backgroundColor:'#c89e86', width: '100%', height: 20, alignSelf:'stretch'}}>
                          </View>
                          <Text style={{color: '#949494', fontSize: 7.5, fontWeight: '700', paddingTop:5, alignSelf:'stretch', textAlign: 'center'}}>
                            Medium
                          </Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    <View  style={[{borderColor: this.state.skinTone==4?'#4a4a4a':'transparent'}, {padding: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: '#fff', borderRadius: 0, width: '20%', minWidth: 20, alignItems: 'center', alignSelf: 'stretch'}]}>
                      <TouchableHighlight  onPress={() => this.setState({skinTone: 4})} style={{alignSelf:'stretch'}}>
                        <View>
                          <View style={{backgroundColor:'#9a7a66', width: '100%', height: 20, alignSelf:'stretch'}}>
                          </View>
                          <Text style={{color: '#949494', fontSize: 7.5, fontWeight: '700', paddingTop:5, alignSelf:'stretch', textAlign: 'center'}}>
                            Deep
                          </Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    <View   style={[{borderColor: this.state.skinTone==5?'#4a4a4a':'transparent'}, {padding: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: '#fff', borderRadius: 0, width: '20%', minWidth: 20, alignItems: 'center', alignSelf: 'stretch'}]}>
                      <TouchableHighlight  onPress={() => this.setState({skinTone: 5})} style={{alignSelf:'stretch'}}>
                        <View>
                          <View style={{backgroundColor:'#5e4c41', width: '100%', height: 20, alignSelf:'stretch'}}>
                          </View>
                          <Text style={{color: '#949494', fontSize: 7.5, fontWeight: '700', paddingTop:5, alignSelf:'stretch', textAlign: 'center'}}>
                            Dark
                          </Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                  </View>
                 </Item>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View  style={{flexDirection:'row', justifyContent: 'flex-start', flex: 2}}>
                    <Text style={styles.leftEl}>
                      Eye Color:
                    </Text>
                  </View>
                  <View style={[styles.beautyProfileRightEl, {flexDirection:'row', justifyContent: 'flex-end', flex: 3}]}>
                    <View  style={[{borderColor: this.state.eyeColor==1?'#4a4a4a':'transparent'}, {padding: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: '#fff', borderRadius: 0, width: '20%', minWidth: 20, alignItems: 'center', alignSelf: 'stretch'}]}>
                      <TouchableHighlight onPress={() => this.setState({eyeColor: 1})} style={{alignSelf:'stretch'}}>
                        <View>
                          <View style={{backgroundColor:'#b4cdf5', width: '100%', height: 20, alignSelf:'stretch'}}>
                          </View>
                          <Text style={{color: '#949494', fontSize: 7.5, fontWeight: '700', paddingTop:5, alignSelf:'stretch', textAlign: 'center'}}>
                            Blue
                          </Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    <View  style={[{borderColor: this.state.eyeColor==2?'#4a4a4a':'transparent'}, {padding: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: '#fff', borderRadius: 0, width: '20%', minWidth: 20, alignItems: 'center', alignSelf: 'stretch'}]}>
                      <TouchableHighlight  onPress={() => this.setState({eyeColor: 2})} style={{alignSelf:'stretch'}}>
                        <View>
                          <View style={{backgroundColor:'#7ece78', width: '100%', height: 20, alignSelf:'stretch'}}>
                          </View>
                          <Text style={{color: '#949494', fontSize: 7.5, fontWeight: '700', paddingTop:5, alignSelf:'stretch', textAlign: 'center'}}>
                            Green
                          </Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    <View  style={[{borderColor: this.state.eyeColor==3?'#4a4a4a':'transparent'}, {padding: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: '#fff', borderRadius: 0, width: '20%', minWidth: 20, alignItems: 'center', alignSelf: 'stretch'}]}>
                      <TouchableHighlight  onPress={() => this.setState({eyeColor: 3})} style={{alignSelf:'stretch'}}>
                        <View>
                          <View style={{backgroundColor:'#b48e77', width: '100%', height: 20, alignSelf:'stretch'}}>
                          </View>
                          <Text style={{color: '#949494', fontSize: 7.5, fontWeight: '700', paddingTop:5, alignSelf:'stretch', textAlign: 'center'}}>
                            Hazel
                          </Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    <View  style={[{borderColor: this.state.eyeColor==4?'#4a4a4a':'transparent'}, {padding: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: '#fff', borderRadius: 0, width: '20%', minWidth: 20, alignItems: 'center', alignSelf: 'stretch'}]}>
                      <TouchableHighlight  onPress={() => this.setState({eyeColor: 4})} style={{alignSelf:'stretch'}}>
                        <View>
                          <View style={{backgroundColor:'#9a7a66', width: '100%', height: 20, alignSelf:'stretch'}}>
                          </View>
                          <Text style={{color: '#949494', fontSize: 7.5, fontWeight: '700', paddingTop:5, alignSelf:'stretch', textAlign: 'center'}}>
                            Brown
                          </Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    <View   style={[{borderColor: this.state.eyeColor==5?'#4a4a4a':'transparent'}, {padding: 2, flexDirection: 'column', borderWidth: 1, backgroundColor: '#fff', borderRadius: 0, width: '20%', minWidth: 20, alignItems: 'center', alignSelf: 'stretch'}]}>
                      <TouchableHighlight  onPress={() => this.setState({eyeColor: 5})} style={{alignSelf:'stretch'}}>
                        <View>
                          <View style={{backgroundColor:'#a9a9a9', width: '100%', height: 20, alignSelf:'stretch'}}>
                          </View>
                          <Text style={{color: '#949494', fontSize: 7.5, fontWeight: '700', paddingTop:5, alignSelf:'stretch', textAlign: 'center'}}>
                            Gray
                          </Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                  </View>
                </Item>
                {
                  Dimensions.get('window').width>375?
                    <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                      <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 1, alignItems: 'center'}}>


                        <View style={{flexDirection:'row', justifyContent: 'flex-start', flex: 1}}>
                          <Text style={styles.leftEl}>
                            Skin Concerns:
                          </Text>
                        </View>
                        <View style={[{flexDirection: 'row', justifyContent: 'flex-end', flex: 1, alignItems:'center', borderWidth: 1, borderColor: '#949494', marginTop: 15, marginBottom: 15, marginLeft: 5}]}>
                          <View style={{flexDirection: 'row', justifyContent:'flex-start', flex: 1}}>
                            <Ionicons name="ios-arrow-down" size={20} style={[{position: 'absolute', right: 10, top: 7, color: '#949494'}]}/>
                            <Picker
                              mode="dropdown"
                              style={{ backgroundColor: 'transparent', width: 200, paddingLeft: 5, height: 30 , marginLeft: 10}}
                              itemTextStyle = {{color: '#4a4a4a'}}
                              textStyle = {{color: '#949494', fontSize: 13, fontWeight: '700'}}
                              selectedValue={this.state.skinConcerns}
                              onValueChange={(key) => this.setState({ skinConcerns: key })}
                            >
                              <ItemPic label="Aging" value="Aging" />
                              <ItemPic label="Aging Sec" value="Aging Sec" />

                            </Picker>
                          </View>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1, alignItems: 'center'}}>
                        <View style={{flexDirection:'row', justifyContent: 'flex-start', flex: 1}}>
                          <Text style={[styles.leftEl, {paddingLeft: 5}]}>
                            Hair Type:
                          </Text>
                        </View>
                        <View style={[{flexDirection: 'row', justifyContent: 'flex-end', flex: 1, alignItems:'center', borderWidth: 1, borderColor: '#949494', marginTop: 15, marginBottom: 15, marginLeft: 5}]}>
                          <View style={{flexDirection: 'row', justifyContent:'flex-start', flex: 1}}>
                            <Ionicons name="ios-arrow-down" size={20} style={[{position: 'absolute', right: 10, top: 7,  color: '#949494'}]}/>
                            <Picker
                              mode="dropdown"
                              style={{  backgroundColor: 'transparent', width: 200,  height: 30, paddingLeft: 5, marginLeft: 10}}
                              itemTextStyle = {{color: '#4a4a4a'}}
                              textStyle = {{color: '#949494', fontSize: 13,  fontWeight: '700'}}
                              selectedValue={this.state.hairType}
                              onValueChange={(key) => this.setState({ hairType: key })}
                            >
                              <ItemPic label="Wavy" value="Wavy" />
                              <ItemPic label="Stick" value="Stick" />

                            </Picker>
                          </View>
                        </View>
                      </View>
                    </Item>:
                    <View>

                      <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                        <View style={{flexDirection:'row', justifyContent: 'flex-start', flex: 2}}>
                          <Text style={styles.leftEl}>
                            Skin Concerns:
                          </Text>
                        </View>
                        <View style={[styles.beautyProfileRightEl, {flexDirection: 'row', justifyContent: 'flex-end', flex: 3, alignItems:'center', borderWidth: 1, borderColor: '#949494', marginTop: 15, marginBottom: 15}]}>
                          <View style={{flexDirection: 'row', justifyContent:'flex-start', flex: 1}}>
                            <Ionicons name="ios-arrow-down" size={20} style={[{position: 'absolute', right: 10, top: 7, color: '#949494'}]}/>
                            <Picker
                              mode="dropdown"
                              style={{ backgroundColor: 'transparent', paddingLeft: 5,  height: 30 }}
                              itemTextStyle = {{color: '#4a4a4a'}}
                              textStyle = {{color: '#949494', width: 200, backgroundColor:'transparent', fontSize: 13, fontWeight: '700'}}
                              selectedValue={this.state.skinConcerns}
                              onValueChange={(key) => this.setState({ skinConcerns: key })}
                            >
                              <ItemPic label="Aging" value="Aging" />
                              <ItemPic label="Aging Sec" value="Aging Sec" />

                            </Picker>
                          </View>
                        </View>
                      </Item>
                      <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                        <View style={{flexDirection:'row', justifyContent: 'flex-start', flex: 2}}>
                          <Text style={styles.leftEl}>
                            Hair Type:
                          </Text>
                        </View>
                        <View style={[styles.beautyProfileRightEl, {flexDirection: 'row', justifyContent: 'flex-end', flex: 3, alignItems:'center', borderWidth: 1, borderColor: '#949494', marginTop: 15, marginBottom: 15}]}>
                          <View style={{flexDirection: 'row', justifyContent:'flex-start', flex: 1}}>
                            <Ionicons name="ios-arrow-down" size={20} style={[{position: 'absolute', right: 10, top: 7,  color: '#949494'}]}/>
                            <Picker
                              mode="dropdown"
                              style={{ backgroundColor: 'transparent', width: 200, paddingLeft: 5,  height: 30 }}
                              itemTextStyle = {{color: '#4a4a4a'}}
                              textStyle = {{color: '#949494', fontSize: 13, width:200, backgroundColor:'transparent', fontWeight: '700'}}
                              selectedValue={this.state.hairType}
                              onValueChange={(key) => this.setState({ hairType: key })}
                            >
                              <ItemPic label="Wavy" value="Wavy" />
                              <ItemPic label="Stick" value="Stick" />

                            </Picker>
                          </View>
                        </View>
                    </Item></View>
                }
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View  style={{flexDirection:'row', justifyContent: 'flex-start', flex: 2}}>
                    <Text style={styles.leftEl}>
                      Ethnicity:
                    </Text>
                  </View>
                  <View style={[styles.beautyProfileRightEl, {flexDirection: 'row', justifyContent: 'flex-end', flex: 3, alignItems:'center', borderWidth: 1, borderColor: '#949494', marginTop: 15, marginBottom: 15}]}>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start', flex: 1}}>
                      <Ionicons name="ios-arrow-down" size={20} style={[{position: 'absolute', right: 10, top:10, color: '#949494'}]}/>
                      <Picker
                        mode="dropdown"
                        style={{ backgroundColor: 'transparent', width: 200, paddingLeft: 5,  height: 30 }}
                        itemTextStyle = {{color: '#4a4a4a'}}
                        textStyle = {{color: '#949494', fontSize: 13, fontWeight: '700'}}
                        selectedValue={this.state.ethnicity}
                        onValueChange={(key) => this.setState({ ethnicity: key })}
                      >
                        <ItemPic label="Caucasian" value="Caucasian" />
                        <ItemPic label="Caucasian Sec" value="Caucasian Sec" />

                      </Picker>
                    </View>
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 2}}>
                    <Text style={styles.leftEl}>
                      Hair Styling Preferences:
                    </Text>
                  </View>
                  <View style={[styles.beautyProfileRightEl, {flexDirection: 'row', justifyContent: 'flex-end', flex: 3, alignItems:'center', borderWidth: 1, borderColor: '#949494', marginTop: 15, marginBottom: 15}]}>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start', flex: 1}}>
                      <Ionicons name="ios-arrow-down" size={20} style={[{position: 'absolute', right: 10, top: 7, color: '#949494'}]}/>
                      <Picker
                        mode="dropdown"
                        style={{paddingLeft:5, alignSelf: 'stretch', width: 200, backgroundColor:'transparent', height: 30 }}
                        itemTextStyle = {{color: '#4a4a4a'}}
                        textStyle = {{color: '#949494', fontSize: 13, fontWeight: '700'}}
                        selectedValue={this.state.hairStyling}
                        onValueChange={(key) => this.setState({ hairStyling: key })}
                      >
                        <ItemPic label="Short" value="Short" />
                        <ItemPic label="Long" value="Long" />

                      </Picker>
                    </View>
                  </View>
                </Item>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1}]}>
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
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 0, marginTop: 30, marginBottom:120, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <Button style={{width: "31%", backgroundColor: "#c34097", borderRadius: 0, marginRight: "3.5%", justifyContent: "center", alignSelf: "center", paddingLeft: 5, paddingRight: 5}}>
                    <Text style={{fontSize: 13, fontWeight: '700', color: "white", textAlign: "center", fontWeight: "700"}}>
                      Save
                    </Text>
                  </Button>
                  <Button onPress={() => Actions.settings()} style={{width: "31%", backgroundColor: "#fff", borderWidth: 1, borderRadius: 0, marginRight: "3.5%", borderColor: "#949494", justifyContent: "center", alignSelf: "center", paddingLeft: 5, paddingRight: 5}}>
                    <Text style={{fontWeight: "700", fontSize: 13, fontWeight: '700', textAlign: "center", color: "#949494"}}>
                      Settings
                    </Text>
                  </Button>
                  <Button onPress={() => Actions.beautyProfileNext()} style={{width: "31%", backgroundColor: "#4a4a4a", borderWidth: 1, borderRadius: 0, paddingLeft: 5, paddingRight: 5,  marginRight: "3.5%", borderColor: "#949494", justifyContent: "center", alignSelf: "center"}}>
                    <Text style={{fontWeight: "700", fontSize: 13, fontWeight: '700', textAlign: "center", color: "#fff"}}>
                      Next
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

export default connect(mapStateToProps, bindAction)(BeautyProfile);