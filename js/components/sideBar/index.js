
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Modal } from 'react-native';
import { View, Text, Icon, List, ListItem, Content,Thumbnail, Button } from 'native-base';

import styles from './style';
import { closeDrawer } from '../../actions/drawer';
import { Feather, MaterialIcons, Entypo, Ionicons} from '@expo/vector-icons';
import { Actions, ActionConst } from 'react-native-router-flux';
import PropTypes from 'prop-types';
const cover = require('../../../images/cover-default.png');
const profile = require('../../../images/profile-default.png');

const mobilePotrait = styles.potrait;
const shirt = styles.shirt;
const cut = styles.cut;
const construct = styles.construct;
const car = styles.car;
const copy = styles.copy;


class SideBar extends Component {

  static propTypes = {
    closeDrawer: PropTypes.func,
     }
  componentDidMount(){
    console.log('mount')
  }
  render() {
    return (

      <View style={{ backgroundColor: '#fff' , flex:1}}>
        
        <Content foregroundColor={'#000'} style={{...styles.list, paddingTop: 20 }}>
          <ListItem button onPress={() => {Actions.admin(); this.props.closeDrawer();}} style={styles.links2} >
            <Text style={styles.linkText}>Admin Page</Text>
          </ListItem>
          
          <ListItem button onPress={() => {Actions.profile(); this.props.closeDrawer();}} style={styles.links2} >
            <Text style={styles.linkText}>Profile</Text>
          </ListItem>
         
          <ListItem button onPress={() => {Actions.account(); this.props.closeDrawer();}} style={styles.links2} >
            <Text style={styles.linkText}>Account</Text>
          </ListItem>
          <ListItem button onPress={() => {Actions.beautyProfile(); this.props.closeDrawer();}} style={styles.links2} >
            <Text style={styles.linkText}>Beauty Profile</Text>
          </ListItem>
          </Content>
        <ListItem button onPress={() => { Actions.landing(); this.props.closeDrawer(); }} iconLeft style={styles.links} >
            <View style={styles.sidebarList} onPress={this.props.closeDrawer}>
              <View style={{ ...styles.sidebarIconView, ...styles.log }} >
                <Icon active name="power" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.linkText}>Logout</Text>
            </View>
          </ListItem>

      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, bindAction)(SideBar);
