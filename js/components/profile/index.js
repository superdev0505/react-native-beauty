
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Platform, ScrollView, Modal, TouchableHighlight, TouchableWithoutFeedback, Alert } from 'react-native';
import { Container, View, Text, Button,  List, ListItem, Content, Icon, Card, Item, Input, Thumbnail, Header, Left, Right, CardItem , Title} from 'native-base';
import styles from './styles';
import { Feather, FontAwesome, SimpleLineIcons, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Font, ImagePicker } from 'expo';
import { openDrawer } from '../../actions/drawer';
import FooterTabs from '../footerTabs';
import SideBar from '../sideBar';
import Switch from 'react-native-customisable-switch';

const profile = require('../../../images/profile-default.png');
const camera = require('../../../images/camera.png');

class Profile extends Component {
  state = {
    fontLoaded: false,
    name: 'Jane Smith',
    uri: '',
    info: '',
    email: 'janesmith@gmail.com',
    phone: '',
    gender: '',
    oldPassword: '',
    newPassword: '',
    reTypeNewPassword: '',
    colorBlindMode: false,
    modalVisible: false,
    prfileImageUri: null,
    photoModalVisible: false,
    sidebar: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'JosefinSans': require('../../../assets/josefin-sans/JosefinSans-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  async pickCamera() {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ prfileImageUri: result.uri });
    }
  }
  checkAndMove() {
    if(this.state.name=='')
    {
      Alert.alert(
         "Please input name"
      )
      console.log("Please input name");
      return false;
    }
    if(this.state.uri=='')
    {
      Alert.alert(
         "Please input website url"
      )
      console.log("Please input website url");
      return false;
    }
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(this.state.email=='')
    {
      Alert.alert(
         "Please input email"
      )
      console.log("Please input email");
      return false;
    }
    if(reg.test(this.state.email.toLowerCase()) === false)
    {
      Alert.alert(
         "Incorrect email format"
      )
      console.log("Incorrect email format");
      return false;
    }
    if(this.state.phone.toString()=='')
    {
      Alert.alert(
         "Please input phone number"
      )
      console.log("Please input phone number");
      return false;
    }
    if(this.state.phone.toString().length!=10)
    {
      console.log(this.state.phone.length)
      Alert.alert(
         "Phone numbers must be 10 numbers"
      )
      console.log("Phone numbers must be 10 numbers");
      return false;
    }
    if(this.state.gender=='')
    {
      Alert.alert(
         "Please input your gender"
      )
      console.log("Please input gender");
      return false;
    }
    if((this.state.newPassword!='')&&(this.state.oldPassword=='')){
      Alert.alert(
         "Please input your old password"
      )
      console.log("Please input old password");
      return false;

    }
    if(this.state.newPassword!=this.state.reTypeNewPassword)
    {
      Alert.alert(
         "Password doesn't match"
      )
      console.log("Password doesn't match");
      return false;
    }
    this.setState({modalVisible: true})
  }
  async pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ prfileImageUri: result.uri });
    }
  }
  render() {
    // console.disableYellowBox = true;
      return (
        <Container  style={{backgroundColor:'white'}}>
          <View style={{height:'100%', width: 300, display:this.state.sidebar?'flex':'none', shadowOffset:{  width: 2,  height: 0,  }, shadowColor: '#949494', shadowOpacity: 1.0, position:'absolute', zIndex:10000000}}>
            <SideBar/>
          </View>
          <Modal animationType="slide" transparent={true} style={styles.modal} backdrop={false}  position={"bottom"} visible={this.state.photoModalVisible && (Actions.currentScene=='profile')}>
            <TouchableHighlight   onPress={() => this.setState({photoModalVisible: false})}>
              <View style={styles.modalView }>
                <TouchableWithoutFeedback  onPress={() => {return false;}} >
                  <View style={styles.modalInnerView}>
                    <Button onPress={this.pickCamera.bind(this)} style={{backgroundColor: '#c34097', borderRadius:0, justifyContent: 'center', alignSelf: 'stretch', borderWidth: 1, borderColor: 'transparent', width: '100%', marginBottom: 30}}><Text style={{color: 'white'}}>Take Photo</Text></Button>
                    <Button onPress={this.pickImage.bind(this)} style={{backgroundColor: '#4a4a4a', borderRadius:0, justifyContent: 'center', alignSelf: 'stretch', borderWidth: 1, borderColor: 'transparent', width: '100%', marginBottom: 20}}><Text style={{color: 'white'}}>Upload Photo</Text></Button>
                    <View style={{ borderBottomColor: '#949494', borderBottomWidth: 1, marginBottom: 20, width: '30%', marginLeft: '35%'}}></View>
                    <Button onPress={() => this.setState({photoModalVisible: false})} style={{backgroundColor: 'white', borderRadius:0, justifyContent: 'center', alignSelf: 'stretch', borderWidth: 1, borderColor: '#4a4a4a', width: '100%'}}><Text style={{color: '#4a4a4a'}}>Cancel</Text></Button>

                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableHighlight>
          </Modal>
      
          <Modal animationType="fade" transparent={true} visible={this.state.modalVisible && (Actions.currentScene=='profile')} >
            <TouchableHighlight   onPress={() => this.setState({modalVisible: false})}>
              <View style={styles.modalView }>
                <TouchableWithoutFeedback  onPress={() => {return false;}} >
                  <View style={styles.modalInnerView}>
                    <Text style={{textAlign: 'center', color: '#4a4a4a', fontSize: 16, fontWeight: '500', lineHeight: 25}}>Do you want to fill in your beauty profile..?</Text>
                    <View style={{flexDirection:'row', marginTop: 20}}>
                      <Button onPress={() => {this.setState({modalVisible: false}); Actions.beautyProfile()}}
                        style={[styles.popupButton, {backgroundColor: '#c34097'}]}
                      >
                        <Text style={{ color:'#fff', textAlign: 'center', fontSize: 16, fontWeight: '500' }}>Yes</Text>
                      </Button>
                      <Button onPress={() => {this.setState({modalVisible: false}); Actions.home()}}
                        style={[styles.popupButton, {backgroundColor: '#fff', borderWidth: 1, borderColor: '#4a4a4a'}]}
                      
                      >
                        <Text style={{ color:'#4a4a4a', textAlign: 'center', fontSize: 16, fontWeight: '500' }}>No</Text>
                      </Button>
                    </View>
                    
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableHighlight>
          </Modal>
          <Header style={{backgroundColor: 'white', borderBottomWidth: 0 }}>
            <Left >
              <Button style={{backgroundColor: 'white'}} onPress={() => Actions.pop()} >
                <Feather name="arrow-left" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Left>
            <Right >
              <Button style={{backgroundColor: 'white'}} onPress={()=> this.setState({sidebar: !this.state.sidebar})} >
                <MaterialIcons name="menu" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>
          <View style={styles.topHeader}>
            {
              this.state.prfileImageUri ?

                <Item style={styles.thumbnail} onPress={()=>this.setState({photoModalVisible:true})}>
                  <Image source={{ uri: this.state.prfileImageUri }} style={styles.thumbnail} />
                </Item>
                :
                <Item style={styles.thumbnail} onPress={()=>this.setState({photoModalVisible:true})}>
                  <Image source={camera} style={styles.thumbnail} />
                </Item>

            }
            {
              this.state.fontLoaded ? 
                (<Text style={[{fontFamily: 'JosefinSans'}, styles.name]}>{this.state.name}</Text>)
                  :
                (<Text style={styles.name}>{this.state.name}</Text>)
            }
          </View>
          <ScrollView style={{marginTop: 20}}>
          <View style={styles.section}>
            <Text style={styles.header}>
              Basic Profile
            </Text>
            <View style={styles.contentWrap}>
              <View style={[styles.content]}>
                <Item style={[styles.basicContentItem, {borderBottomWidth: 1}]}>

                    
                    <Input
                      style={{ fontSize: 14, fontWeight: '700', color: '#4a4a4a'}}
                      placeholder="Full Name"
                      value={this.state.name}
                      placeholderTextColor="#949494"
                      onChangeText={name => this.setState({ name })}
                    />
                 </Item>
              </View>
              
              <View style={styles.content}>   
                <Item style={[styles.basicContentItem, {borderBottomWidth: 1}]}>
                    <Input
                      style={{ fontSize: 14, fontWeight: '700', color: '#4a4a4a'}}
                      placeholder="http://www.helloworld.com"
                      value={this.state.uri}
                      placeholderTextColor="#949494"
                      onChangeText={uri => this.setState({ uri })}
                    />

                </Item>
              </View>

              <View style={styles.content}>
                <Item style={[styles.basicContentItem, {borderBottomWidth: 0}]}>
                    <Input
                      style={{ fontSize: 14, fontWeight: '700', color: '#4a4a4a'}}
                      placeholder="Here goes little bit about me. And so it goes on and on and on"
                      value={this.state.info}
                      placeholderTextColor="#949494"
                      onChangeText={info => this.setState({ info })}
                    />

                </Item>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>
              Private Information
            </Text>
            <View style={styles.contentWrap}>
              <View style={styles.content}>
                <Item style={[styles.basicContentItem, {borderBottomWidth: 1}]}>
                    <Input
                      style={{ fontSize: 14, fontWeight: '700', color: '#4a4a4a'}}
                      placeholder="Email"
                      value={this.state.email}
                      placeholderTextColor="#949494"
                      onChangeText={email => this.setState({ email })}
                    />
                 </Item>
              </View>
              
              <View style={styles.content}>   
                <Item style={[styles.basicContentItem, {borderBottomWidth: 1}]}>
                    <Input
                      style={{ fontSize: 14, fontWeight: '700', color: '#4a4a4a'}}
                      placeholder="Phone"
                      value={this.state.phone?this.state.phone.toString():''}
                      placeholderTextColor="#949494"
                      onChangeText={phone => this.setState({phone: parseInt(phone)})}
                    />

                </Item>
              </View>

              <View style={styles.content}>
                <Item style={[styles.basicContentItem, {borderBottomWidth: 0}]}>
                    <Input
                      style={{ fontSize: 14, fontWeight: '700', color: '#4a4a4a'}}
                      placeholder="Gender"
                      value={this.state.gender}
                      placeholderTextColor="#949494"
                      onChangeText={gender => this.setState({ gender })}
                    />

                </Item>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>
              Change Password
            </Text>
            <View style={styles.contentWrap}>
              <View style={styles.content}>
                <Item style={[styles.basicContentItem, {borderBottomWidth: 1}]}>

                    <Input
                      style={{ fontSize: 14, fontWeight: '700', color: '#4a4a4a'}}
                      value={this.state.oldPassword}
                      secureTextEntry
                      placeholder="Old Password"
                      placeholderTextColor="#949494"
                      onChangeText={oldPassword => this.setState({ oldPassword })}
                    />
                 </Item>
              </View>
              
              <View style={styles.content}>   
                <Item style={[styles.basicContentItem, {borderBottomWidth: 1}]}>
                    <Input
                      style={{ fontSize: 14, fontWeight: '700', color: '#4a4a4a'}}
                      placeholder="New Password"
                      value={this.state.newPassword}
                      secureTextEntry
                      placeholderTextColor="#949494"
                      onChangeText={newPassword => this.setState({ newPassword })}
                    />

                </Item>
              </View>

              <View style={styles.content}>
                <Item style={[styles.basicContentItem, {borderBottomWidth: 0}]}>
                    <Input
                      style={{ fontSize: 14, fontWeight: '700', color: '#4a4a4a'}}
                      value={this.state.reTypeNewPassword}
                      placeholder="Re-type New Password"
                      secureTextEntry
                      placeholderTextColor="#949494"
                      onChangeText={reTypeNewPassword => this.setState({ reTypeNewPassword })}
                    />

                </Item>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.header}>
              Accessibility
            </Text>
            <View style={styles.contentWrap}>
              <View style={styles.content}>
                <Item style={[styles.basicContentItem, {borderBottomWidth: 0}]}>

                    <Left style={{flex: 3, flexWrap: 'wrap'}}>
                      <Text style={[styles.header, {textAlign: 'left', paddingLeft: 0, paddingBottom: 0, backgroundColor: '#fff'}]}>Color Blind Mode</Text>
                      <Text style={{width: '100%', fontSize: 13, color: '#949494', fontWeight: '700'}}>Change the day mode to night mode which is a dark default pattern</Text>
                    </Left>
                    <Right style={{flex: 1}}>
                      <Switch
                        value={this.state.colorBlindMode}
                        activeText={''}
                        inactiveText={''}
                        fontSize={0}
                        activeTextColor={'rgba(255, 255, 255, 1)'}
                        inactiveTextColor={'rgba(255, 255, 255, 1)'}
                        activeBackgroundColor={'#c34097'}
                        inactiveBackgroundColor={'#222'}
                        activeButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                        inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                        switchWidth={50}
                        switchHeight={26}
                        switchBorderRadius={0}
                        switchBorderColor={'rgba(0, 0, 0, 1)'}
                        switchBorderWidth={0}
                        buttonWidth={20}
                        buttonHeight={20}
                        buttonBorderRadius={0}
                        buttonBorderColor={'rgba(0, 0, 0, 1)'}
                        buttonBorderWidth={0}
                        animationTime={150}
                        padding={true}
                        style={{borderWidth:1}}
                        onChangeValue={(value) => {
                          this.setState({colorBlindMode: value})
                        }}
                      />
                    </Right>
                </Item>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>
              About
            </Text>
            <View style={styles.contentWrap}>
              <View style={styles.content}>
                <Item style={[styles.basicContentItem, {borderBottomWidth: 1}]}>
                    <Entypo name="info" size={20} style={styles.contentIcon} />
                    <Text style={{ fontSize: 14, fontWeight: '700', color: '#949494', lineHeight: 50}}>Help</Text>
                 </Item>
              </View>
              
              <View style={styles.content}>   
                <Item style={[styles.basicContentItem, {borderBottomWidth: 1}]}>
                    <MaterialIcons name="lock" size={20} style={styles.contentIcon} />
                    <Text style={{ fontSize: 14, fontWeight: '700', color: '#949494', lineHeight: 50}}>Privacy</Text>
                </Item>
              </View>

              <View style={styles.content}>
                <Item style={[styles.basicContentItem, {borderBottomWidth: 0}]}>
                    <MaterialCommunityIcons name="file-multiple" size={20} style={styles.contentIcon} />
                    <Text style={{ fontSize: 14, fontWeight: '700', color: '#949494', lineHeight: 50}}>Terms of Service</Text>
                </Item>
              </View>
            </View>
          </View>
          <Button style={[styles.normalButton, {backgroundColor: '#c34097'}]} onPress={this.checkAndMove.bind(this)}>
              <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 20, color: '#fff' }}>Done</Text>
          </Button>
          <Button style={[styles.normalButton, {backgroundColor: '#4a4a4a'}]} onPress={() => Actions.pop()}>
              <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 20, color: '#fff' }}>Cancel</Text>
          </Button>
          <Button style={[styles.normalButton, {borderWidth: 1, borderColor: '#4a4a4a', backgroundColor: '#fff', marginBottom: 120 }]} onPress={() => Actions.login()}>
              <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 20, color: '#4a4a4a'}}>Log out</Text>
          </Button>
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

export default connect(mapStateToProps, bindAction)(Profile);