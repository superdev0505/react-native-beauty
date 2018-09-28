
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

class Admin extends Component {
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
          
          <ScrollView style={{marginTop: 20}}>
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

export default connect(mapStateToProps, bindAction)(Admin);