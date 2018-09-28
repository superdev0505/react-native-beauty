
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Platform, ScrollView, Modal, TouchableHighlight, TouchableWithoutFeedback, Switch } from 'react-native';
import { Container, View, Text, Button,Content, Icon, Card, Item, Input, Thumbnail, Header, Left, Right, CardItem , Title} from 'native-base';
import styles from './styles';
import { Feather, FontAwesome, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Font } from 'expo';
import { openDrawer } from '../../actions/drawer';
import FooterTabs from '../footerTabs';


const rewardImageUri = require('../../../images/reward.png');
class ClaimReward extends Component {
  render() {
    // console.disableYellowBox = true;
      return (
        <Container style={{backgroundColor: 'white'}}>
          <Header style={{backgroundColor: 'white', borderBottomWidth: 0 }}>
            <Left>
              <Button style={{backgroundColor: 'white'}} onPress={() => Actions.pop()} >
                <Feather name="arrow-left" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Left>
            <Text style={[styles.topHeaderText, {top: (Platform.OS == 'android') ? 10: 30}]}>Claim Reward</Text>
            <Right>
              <Button style={{backgroundColor: 'white'}} onPress={this.props.openDrawer} >
                <MaterialIcons name="menu" style={{ color: '#c34097', fontSize: 30, lineHeight: 32, fontWeight: '900' }} />
              </Button>
            </Right>
          </Header>
          <ScrollView style={{marginTop: 20}}>
          <View style={styles.section}>
            <View style={styles.beautyContentWrap}>
              <View style={styles.contentClaim}>
                <View>
                  <Text style={styles.headerTitle}>Your beauty profile is now complete.</Text>
                </View>
                <View>
                  <Text style={styles.claimContent}>Congratulations! You have earned a Reward for completing your beauty profile.</Text>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                  <Text style={styles.claimWord}>Claim Your Reward</Text>
                  <View style={{marginTop: 15, marginBottom: 10, alignItems: 'center', flexDirection: 'column', justifyContent: 'center', alignSelf: 'center', width: 150, height: 120, borderColor: '#949494', borderWidth: 1}}>
                    <Image source={rewardImageUri} style={{flex: 1}} />
                  </View>
                  <Text style={styles.rewardName}>Reward Name</Text>
                  <Item style={{flexDirection:'row', alignItems: 'center'}}>
                    <Button style={styles.claimButton}>
                      <Text style={styles.claimButtonText}>Claim</Text>
                    </Button>
                  </Item>
                
                 <Item style={[styles.beautyContentItem, {borderBottomWidth: 0, marginTop: 30, marginBottom:60, flexDirection: 'row', justifyContent:'space-between'}]}>
                  <Button style={{width: "45%", backgroundColor: "#c34097", borderRadius: 0, marginRight: "10%", justifyContent: "center", alignSelf: "center"}} onPress={() => Actions.home()} >
                    <Text style={{fontSize: 13, color: "white", textAlign: "center", fontWeight: "700"}}>
                      Done
                    </Text>
                  </Button>
                  <Button style={{width: "45%", backgroundColor: "#fff", borderWidth: 1, borderRadius: 0, borderColor: "#949494", justifyContent: "center", alignSelf: "center"}}  onPress={() => Actions.beautyProfileNext()} >
                    <Text style={{fontWeight: "700", fontSize: 13, textAlign: "center", color: "#949494"}}>
                      Cancel
                    </Text>
                  </Button>
                 </Item>
                </View>
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

export default connect(mapStateToProps, bindAction)(ClaimReward);