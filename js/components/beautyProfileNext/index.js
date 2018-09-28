
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Platform, ScrollView, Modal, TouchableHighlight, TouchableWithoutFeedback, Dimensions, Alert } from 'react-native';
import { Container, View, Text, Button,Content, Icon, Card, Item, Input, Switch, Thumbnail, Header, Left, Right, CardItem , Title, Picker} from 'native-base';
import styles from './styles';
import { Feather, FontAwesome, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Font } from 'expo';
import { openDrawer } from '../../actions/drawer';

import FooterTabs from '../footerTabs';
const ItemPic = Picker.Item;
const profile = require('../../../images/profile-default.png');
const stateList = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY"
  ];
class BeautyProfileNext extends Component {
  state = {
    email: 'janesmith@gmail.com',
    phone: '0156685558',
    accountOwner: 'Jane Smith',
    address: '125 Colony Road',
    city: 'New York',
    state: 'NY',
    zip: '10019',
    loyaltyCard: '123 - 98746 - 0987 - 087',
    favoriteStore: 0,
    storeLocations: ['#302, Suit 3, NY', '#303, Suit 3, NY'],
    age: "38",
  };
  onSave () {
    if(this.state.accountOwner=='')
    {
      Alert.alert(
         "Please input account owner name"
      )
      console.log("Please input account owner name");
      return false;
    }
    if(this.state.address=='')
    {
      Alert.alert(
         "Please input address"
      )
      console.log("Please input address");
      return false;
    }
    if(this.state.city=='')
    {
      Alert.alert(
         "Please input city"
      )
      console.log("Please input city");
      return false;
    }
    if(this.state.zip=='')
    {
      Alert.alert(
         "Please input zip code"
      )
      console.log("Please input zip code");
      return false;
    }
    if(this.state.zip.length!=5)
    {
      Alert.alert(
         "Zip Code must be 5 numbers"
      )
      console.log("Zip Code must be 5 numbers");
      return false;
    }
    if(this.state.phone=='')
    {
      Alert.alert(
         "Please input phone number"
      )
      console.log("Please input phone number");
      return false;
    }
    if(this.state.phone.length!=10)
    {
      console.log(this.state.phone.length)
      Alert.alert(
         "Phone numbers must be 10 numbers"
      )
      console.log("Phone numbers must be 10 numbers");
      return false;
    }
    if(this.state.email=='')
    {
      Alert.alert(
         "Please input email"
      )
      console.log("Please input email");
      return false;
    }
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(this.state.email.toLowerCase()) === false)
    {
      Alert.alert(
         "Incorrect email format"
      )
      console.log("Incorrect email format");
      return false;
    }
    if(this.state.loyaltyCard=='')
    {
      Alert.alert(
         "Please input Card"
      )
      console.log("Please input Card");
      return false;
    }
    if(this.state.age=='')
    {
      Alert.alert(
         "Please input age"
      )
      console.log("Please input age");
      return false;
    }
    if(this.state.age.length!=2)
    {
      console.log(this.state.age.length)
      Alert.alert(
         "Age numbers must be 2 numbers"
      )
      console.log("Age numbers must be 2 numbers");
      return false;
    }
    Actions.claimReward();
  }
  render() {
    // console.disableYellowBox = true;
      return (
        <Container  style={{backgroundColor:'white'}}>
          <Header style={{backgroundColor: 'white', borderBottomWidth: 0 }}>
            <Left>
              <Button style={{backgroundColor: 'white'}} onPress={() => Actions.pop()} >
                <Feather name="arrow-left" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Left>
            <Text style={[styles.topHeaderText, {top: (Platform.OS == 'android') ? 10: 30}]}>Account</Text>
            <Right>
              <Button style={{backgroundColor: 'white'}} onPress={this.props.openDrawer} >
                <MaterialIcons name="menu" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>
          <ScrollView style={{marginTop: 20}}>
          <View style={styles.section}>
            <Text style={styles.header}>
              Personal Information
            </Text>
            <View style={styles.beautyContentWrap}>
              <View style={styles.content}>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 2}}>
                    <Text style={styles.leftEl}>
                      Account Owner:
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 3}}>
                    <Input
                      style={styles.rightEl}
                      placeholder="Account Owner"
                      defaultValue={this.state.accountOwner}
                      placeholderTextColor="#949494"
                      onChangeText={accountOwner => this.setState({ accountOwner })}
                    />
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 2}}>
                    <Text style={styles.leftEl}>
                      Address:
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 3}}>
                    <Input
                      style={styles.rightEl}
                      placeholder="Address"
                      defaultValue={this.state.address}
                      placeholderTextColor="#949494"
                      onChangeText={address => this.setState({ address })}
                    />
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 2}}>
                    <Text style={styles.leftEl}>
                      City:
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 3}}>
                    <Input
                      style={styles.rightEl}
                      placeholder="City"
                      defaultValue={this.state.city}
                      placeholderTextColor="#949494"
                      onChangeText={city => this.setState({ city })}
                    />
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flex: 4}}>
                    <Text style={styles.leftEl}>
                      State:
                    </Text>
                  </View>
                  <View style={[styles.beautyProfileRightEl, {flexDirection: 'row', justifyContent: 'flex-end', flex:1, alignItems:'center', borderWidth: 1, borderColor: '#949494', marginTop: 15, marginBottom: 15}]}>
                    <View style={{flexDirection: 'row', justifyContent:'flex-start', flex: 1}}>
                      <Ionicons name="ios-arrow-down" size={20} style={[{position: 'absolute', right: 10, top: 7, color: '#949494'}]}/>
                      <Picker
                        mode="dropdown"
                        style={{ paddingLeft: 5,  height: 30, width: 200, backgroundColor:'transparent' }}
                        itemTextStyle = {{color: '#4a4a4a'}}
                        textStyle = {{color: '#949494', fontSize: 13, fontWeight: '700'}}
                        selectedValue={this.state.state}
                        onValueChange={(key) => this.setState({ state: key })}
                      >
                      {
                        stateList.map((stat, key)=>
                          <ItemPic key={key} label={stat} value={stat} />
                        )
                      }

                      </Picker>
                    </View>
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 2}}>
                    <Text style={styles.leftEl}>
                      Zip:
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 3}}>
                    <Input
                      style={styles.rightEl}
                      placeholder="Zip"
                      defaultValue={this.state.zip}
                      placeholderTextColor="#949494"
                      onChangeText={zip => this.setState({ zip })}
                    />
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 2}}>
                    <Text style={styles.leftEl}>
                      Phone:
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 3}}>
                    <Input
                      style={styles.rightEl}
                      placeholder="Phone"
                      defaultValue={this.state.phone}
                      placeholderTextColor="#949494"
                      onChangeText={phone => this.setState({ phone })}
                    />
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 2}}>
                    <Text style={styles.leftEl}>
                      Email:
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 3}}>
                    <Input
                      style={styles.rightEl}
                      placeholder="Email"
                      defaultValue={this.state.email}
                      placeholderTextColor="#949494"
                      onChangeText={email => this.setState({ email })}
                    />
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 2}}>
                    <Text style={styles.leftEl}>
                      Loyalty Card #:
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 3}}>
                    <Input
                      style={styles.rightEl}
                      placeholder="Loyalty Card"
                      defaultValue={this.state.loyaltyCard}
                      placeholderTextColor="#949494"
                      onChangeText={loyaltyCard => this.setState({ loyaltyCard })}
                    />
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 2, paddingBottom: 20, paddingTop: 20, maxWidth: '40%'}}>
                    <View>
                      <Text style={styles.leftEl}>
                        Favorite Store Location:
                      </Text>
                      <Text style={{fontSize: 10, fontWeight: '700', color: '#949494'}}>
                        {this.state.storeLocations[this.state.favoriteStore]}
                      </Text>
                    </View>
                  </View>
                  
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 3}}>

                  {
                    Dimensions.get('window').width>375?
                      <View style={{flexDirection:'row'}}>
                        <Button onPress={() => this.setState({favoriteStore: 0})}
                          style={{backgroundColor: this.state.favoriteStore==0?'#c34097':'#fff', borderWidth: 1, borderColor:  this.state.favoriteStore==0? '#c34097':'#949494', borderRadius: 0, paddingLeft: 10, paddingRight: 10, borderRadius: 0}}
                        >
                          <MaterialCommunityIcons name="map-marker" size={20} style={{color: this.state.favoriteStore==0?'#fff':'#949494'}} />
                          <Text style={{ color: this.state.favoriteStore==0?'#fff':'#949494', textAlign: 'center', fontSize: 13, fontWeight: '500' }}>Primary</Text>
                        </Button>
                        <Button onPress={() => this.setState({favoriteStore: 1})}
                           style={{marginLeft: 10, backgroundColor: this.state.favoriteStore==1?'#c34097':'#fff', borderWidth: 1, borderColor:  this.state.favoriteStore==0? '#c34097':'#949494', borderRadius: 0, paddingLeft: 10, paddingRight: 10, borderRadius: 0}}
                      
                        >
                          <MaterialCommunityIcons name="map-marker-outline"  size={20} style={{color: this.state.favoriteStore==1?'#fff':'#949494'}}  />
                          <Text style={{ color: this.state.favoriteStore==1?'#fff':'#949494', textAlign: 'center', fontSize: 13, fontWeight: '500' }}>Secondary</Text>
                        </Button>
                      </View>:
                      <View style={{flexDirection:'column'}}>
                        <Button onPress={() => this.setState({favoriteStore: 0})}
                          style={{width: 135, marginTop: 10,   backgroundColor: this.state.favoriteStore==0?'#c34097':'#fff', borderWidth: 1, borderColor:  this.state.favoriteStore==0? '#c34097':'#949494', borderRadius: 0, paddingLeft: 10, paddingRight: 10, borderRadius: 0, alignItems: "center"}}
                        >
                          <MaterialCommunityIcons name="map-marker" size={20} style={{color: this.state.favoriteStore==0?'#fff':'#949494'}} />
                          <Text style={{ color: this.state.favoriteStore==0?'#fff':'#949494', textAlign: 'center', fontSize: 13, fontWeight: '500' }}>Primary</Text>
                        </Button>
                        <Button onPress={() => this.setState({favoriteStore: 1})}
                           style={{width: 135, marginTop: 10, marginBottom:10, backgroundColor: this.state.favoriteStore==1?'#c34097':'#fff', borderWidth: 1, borderColor:  this.state.favoriteStore==0? '#c34097':'#949494', borderRadius: 0, paddingLeft: 10, paddingRight: 10, borderRadius: 0, alignItems: "center"}}
                      
                        >
                          <MaterialCommunityIcons name="map-marker-outline"  size={20} style={{color: this.state.favoriteStore==1?'#fff':'#949494'}}  />
                          <Text style={{ color: this.state.favoriteStore==1?'#fff':'#949494', textAlign: 'center', fontSize: 13, fontWeight: '500' }}>Secondary</Text>
                        </Button>
                      </View>
                  }
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 2}}>
                    <Text style={styles.leftEl}>
                      Age:
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: 60}} >
                    <Input
                      style={{borderColor: '#949494', borderWidth: 1, fontSize: 15, fontWeight: '700', color: '#949494', textAlign: 'center', width: 60, marginTop: 10, marginBottom: 10}}
                      placeholder= "0"
                      defaultValue={this.state.age}
                      placeholderTextColor="#949494"
                      onChangeText={age => this.setState({ age })}
                    />
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 0, marginTop: 30, marginBottom:120, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <Button style={{width: "45%", backgroundColor: "#c34097", borderRadius: 0, marginRight: "10%", justifyContent: "center", alignSelf: "center"}} onPress={() => this.onSave()} >
                    <Text style={{fontSize: 13, color: "white", textAlign: "center", fontWeight: "700"}}>
                      Done
                    </Text>
                  </Button>
                  <Button style={{width: "45%", backgroundColor: "#fff", borderWidth: 1, borderRadius: 0, borderColor: "#949494", justifyContent: "center", alignSelf: "center"}}  onPress={() => Actions.beautyProfile()} >
                    <Text style={{fontWeight: "700", fontSize: 13, textAlign: "center", color: "#949494"}}>
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

export default connect(mapStateToProps, bindAction)(BeautyProfileNext);