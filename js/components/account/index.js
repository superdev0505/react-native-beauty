
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Platform, ScrollView, Modal, TouchableHighlight, TouchableWithoutFeedback, Alert } from 'react-native';
import { Container, View, Text, Button,Content, Icon, Card, Item, Input, Switch, Thumbnail, Header, Left, Right, CardItem , Title, Picker} from 'native-base';
import styles from './styles';
import { Feather, FontAwesome, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Font } from 'expo';
import { openDrawer } from '../../actions/drawer';
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
class Account extends Component {
  state = {
    name: 'Jane Smith',
    email: 'janesmith@gmail.com',
    phone: '0156685558',
    accountOwner: 'Jane Smith',
    address: '125 Colony Road',
    city: 'New York',
    state: 'NY',
    zip: '10019',
    loyaltyCard: '123 - 98746 - 0987 - 087',
    favoriteProducts: [
      {number: "111-22-11", type: "Defined Gel", name: "Bobby Brown"},
      {number: "111-22-11", type: "Classic Black", name: "Maybelline"},
      {number: "333-22-45", type: "Ruby Woo", name: "Clinique"}
    ]
  };
  onSave () {
    if(this.state.name=='')
    {
      Alert.alert(
         "Please input name"
      )
      console.log("Please input name");
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
    Actions.home();
  }
  render() {
    // console.disableYellowBox = true;
      return (
        <Container style={{backgroundColor:'white'}}>
          <Header style={{backgroundColor: 'white', borderBottomWidth: 0 }}>
            <Left>
              <Button style={{backgroundColor: 'white'}} onPress={() => Actions.pop()} >
                <Feather name="arrow-left" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Left>
            <Right>
              <Button style={{backgroundColor: 'white'}} onPress={this.props.openDrawer} >
                <MaterialIcons name="menu" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>
          <ScrollView style={{marginTop: 20, backgroundColor:'white'}}>

          <Item style={{paddingLeft: 30, paddingRight: 30, borderBottomWidth: 0, marginBottom: 5}}>
            <Text style={{fontSize: 13, color: '#949494', fontWeight: '500'}}>
              Account
            </Text>
          </Item>
          <Item style={{paddingLeft: 30, paddingRight: 30, borderBottomWidth: 0, marginBottom: 25}}>
            <Text style={{fontSize: 25, color: '#4a4a4a', fontWeight: '500'}}>
              Target - {this.state.name}
            </Text>
          </Item>
          <Item style={[styles.beautyContentItem, {borderBottomWidth: 0, marginBottom: 20, flexDirection: 'row', justifyContent:'space-between'}]}>
            <Button onPress={this.onSave.bind(this)} style={{width: "30%", backgroundColor: "#c34097", borderRadius: 0, marginRight: "5%", justifyContent: "center", alignSelf: "center"}}>
              <Text style={{fontSize: 13, color: "white", textAlign: "center", fontWeight: "700"}}>
                Save
              </Text>
            </Button>
            <Button onPress={() => Actions.beautyProfile()} style={{width: "30%", backgroundColor: "#949494", borderWidth: 1, marginRight: "5%",borderRadius: 0, borderColor: "#949494", justifyContent: "center", alignSelf: "center"}}  onPress={() => Actions.beautyProfile()} >
              <Text style={{fontWeight: "700", fontSize: 13, textAlign: "center", color: "#fff"}}>
                Next
              </Text>
            </Button>            
            <Button onPress={() => Actions.home()} style={{width: "30%", backgroundColor: "#fff", borderWidth: 1, borderRadius: 0, borderColor: "#949494", justifyContent: "center", alignSelf: "center"}}  onPress={() => Actions.beautyProfile()} >
              <Text style={{fontWeight: "700", fontSize: 13, textAlign: "center", color: "#949494"}}>
                Cancel
              </Text>
            </Button>
          </Item>
          <View style={styles.section}>
            <View style={{ borderTopColor: '#4a4a4a', borderTopWidth: 1, borderBottomColor: '#4a4a4a', borderBottomWidth: 1}}>
              <Text style={styles.header}>
                Personal Information
              </Text>
            </View>
            <View style={styles.beautyContentWrap}>
              <View style={styles.content}>
                 
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View>
                    <Text style={styles.leftEl}>
                      Account Owner:
                    </Text>
                  </View>
                  <View>
                    <Input
                      style={styles.rightEl}
                      placeholder="Account Owner"
                      defaultValue={this.state.name}
                      placeholderTextColor="#949494"
                      onChangeText={name => this.setState({ name })}
                    />
                  </View>
                 </Item>
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View>
                    <Text style={styles.leftEl}>
                      Address:
                    </Text>
                  </View>
                  <View>
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
                  <View>
                    <Text style={styles.leftEl}>
                      City:
                    </Text>
                  </View>
                  <View>
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
                  <View>
                    <Text style={styles.leftEl}>
                      Zip:
                    </Text>
                  </View>
                  <View>
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
                  <View>
                    <Text style={styles.leftEl}>
                      Phone:
                    </Text>
                  </View>
                  <View>
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
                  <View>
                    <Text style={styles.leftEl}>
                      Email:
                    </Text>
                  </View>
                  <View>
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
                  <View>
                    <Text style={styles.leftEl}>
                      Loyalty Card #:
                    </Text>
                  </View>
                  <View>
                    <Input
                      style={styles.rightEl}
                      placeholder="Loyalty Card"
                      defaultValue={this.state.loyaltyCard}
                      placeholderTextColor="#949494"
                      onChangeText={loyaltyCard => this.setState({ loyaltyCard })}
                    />
                  </View>
                 </Item>


              </View>

            </View>
          </View>
          <View style={styles.section}>
            <View style={{ borderTopColor: '#4a4a4a', borderTopWidth: 1, borderBottomColor: '#4a4a4a', borderBottomWidth: 1}}>
              <Text style={styles.header}>
                Favorite Products
              </Text>
            </View>
            <View style={styles.beautyContentWrap}>
              <View style={[styles.content, {marginBottom: 120}]}>
                {
                  this.state.favoriteProducts.map((item, index) => (
                    <Item key={index} style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                      <View style = {{width: '33.33%'}}>
                        <Text style = {styles.productText}>
                          {item.number}
                        </Text>
                      </View>
                      <View>
                        <Text style = {styles.productText}>
                          {item.type}
                        </Text>
                      </View>
                      <View style = {{width: '33.33%'}}>
                        <Text style ={[styles.productText, {textAlign: 'right'}]}>
                          {item.name}
                        </Text>
                      </View>
                    </Item>
                  ))
                }
                
              </View>

            </View>
          </View>
          </ScrollView>
          <View style={{ position: 'absolute',bottom: 0, width: '100%', height: 30, backgroundColor: '#c34097', alignItems:'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', height: 40, width: '80%', marginTop: -10, alignItems:'center', backgroundColor: '#4a4a4a', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
              <Item style={{borderBottomWidth:0}}>
                <Feather name="home" size={25} style={styles.footerIcon} onPress={() => Actions.home()} />
              </Item>
              <Item style={{borderBottomWidth:0}}>
                <MaterialCommunityIcons name="cart-outline" size={25} style={styles.footerIcon}/>
              </Item>
              <Item style={{borderBottomWidth:0}}>
                <Ionicons name="md-heart-outline" size={27} style={styles.footerIcon} />
              </Item>
              <Item style={{borderBottomWidth:0}}>
                <FontAwesome name="commenting-o" size={25} style={styles.footerIcon} />
              </Item>
              <Item style={{borderBottomWidth:0}}>
                <FontAwesome name="user-o" size={22} style={styles.footerIcon} />
              </Item>
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

export default connect(mapStateToProps, bindAction)(Account);