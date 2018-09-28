
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Platform, ScrollView, Modal, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { Container, View, Text, Button,Content, Icon, Card, Item, Input, Thumbnail, Header, Left, Right, CardItem , Title} from 'native-base';
import styles from './styles';
import { Feather, FontAwesome, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Font } from 'expo';
import { openDrawer } from '../../actions/drawer';
import FooterTabs from '../footerTabs';
import Switch from 'react-native-customisable-switch';

const profile = require('../../../images/profile-default.png');

class Settings extends Component {
  state = {
    percent: 88,
    name: "Jane Smith",
    beModalShow: true,
    readyToPickUp: false
  };
  render() {
    // console.disableYellowBox = true;
      return (
        <Container>
          <Header style={{backgroundColor: 'white', borderBottomWidth: 0 }}>
            <Left>
              <Button style={{backgroundColor: 'white'}} onPress={() => Actions.pop()} >
                <Feather name="arrow-left" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Left>
            <Text style={[styles.topHeaderText, {top: (Platform.OS == 'android') ? 10: 30}]}>Settings</Text>
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
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]} onPress={() => Actions.purchaseProfile()}>
                  <View>
                    <Text style={styles.leftEl}>
                      Purchase Profile
                    </Text>
                  </View>
                  <View>
                    <MaterialIcons name="keyboard-arrow-right" style={{ color: '#c34097', fontSize: 20, lineHeight: 32, fontWeight: '900' }} />
                  </View>
                 </Item>
              </View>
              <View style={styles.content}>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]} onPress={() => Actions.notificationSettings()}>
                  <View>
                    <Text style={styles.leftEl} >
                      Notification
                    </Text>
                  </View>
                  <View>
                    <MaterialIcons name="keyboard-arrow-right" style={{ color: '#c34097', fontSize: 20, lineHeight: 32, fontWeight: '900' }} />
                  </View>
                 </Item>
              </View>
              <View style={styles.content}>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <View>
                    <Text style={styles.leftEl}>
                      Payment Methods
                    </Text>
                  </View>
                  <View>
                    <MaterialIcons name="keyboard-arrow-right" style={{ color: '#c34097', fontSize: 20, lineHeight: 32, fontWeight: '900' }} />
                  </View>
                 </Item>
              </View>
              <View style={styles.content}>
                <Item style={[styles.beautyContentItem, {borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between'}]}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 3}}>
                    <Text style={styles.leftEl}>
                      Notify Me When My Order is Ready To Pickup
                    </Text>
                  </View>
                  <View>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1}}>
                    <Switch
                      value={this.state.readyToPickUp}
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
                        this.setState({readyToPickUp: value})
                      }}
                    />
                  </View>
                 </Item>
              </View>
              {
                this.state.beModalShow?
                  <View style={styles.content} >
                    <Item style={[styles.beautyContentItem, {borderBottomWidth: 0}]}>
                      <View style={{borderWidth: 2, borderColor: '#ccc', flexDirection: 'column', flex: 1, alignItems: 'center', marginTop: 20, paddingBottom: 20, paddingTop: 20}}>
                        <MaterialCommunityIcons name="close-circle-outline" style={{ color: '#ccc', position: 'absolute', top: 5, right: 15, fontSize: 20, lineHeight: 32, fontWeight: '900' }} onPress={() => this.setState({beModalShow: false})} />
                      
                        <Text style={[styles.leftEl, {marginBottom: 0, paddingTop: 0, paddingBottom: 0, fontSize: 14}]}>
                          Welcome {this.state.name}!
                        </Text>
                        <Text style={{fontSize: 10, marginTop: 5, paddingTop: 0, color: '#4a4a4a', fontWeight: '700', textAlign: 'right'}}>Your beauty profile is {this.state.percent}% complete</Text>
                       
                        <View>
                          <Button style={{width: 200, borderRadius: 0, backgroundColor: '#c34097', marginTop: 10, height: 30, flexDirection: 'column', alignItems: 'center', paddingTop:5, paddingBottom: 5}}  onPress={() => Actions.profile()}>
                            <Text style={{fontSize: 11, fontWeight: '700', color: "white", textAlign: "center", fontWeight: "700"}}>
                              Complete Your Profile
                            </Text>
                          </Button>
                        </View>
                      </View>
                     </Item>
                  </View>: null 
              }

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

export default connect(mapStateToProps, bindAction)(Settings);