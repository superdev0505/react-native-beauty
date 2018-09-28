import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image,Platform } from 'react-native';
import { Icon, View, Button, InputGroup, Input,Item,Thumbnail } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import PropTypes from 'prop-types';
import { Feather, FontAwesome, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
const logo = require('../../../images/strapsale-logo.png');

class FooterTabs extends Component {

  static propTypes = {
    openDrawer: PropTypes.func,
  }
  render() {
    return (
      <View style={{ position: 'absolute',bottom: 0, width: '100%', height: 30, zIndex: 1000000, backgroundColor: '#c34097', alignItems:'center'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 40, width: '80%', paddingLeft: 25, paddingRight:25, marginTop: -10, alignItems:'center', backgroundColor: '#4a4a4a', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
          <Item style={{borderBottomWidth:0}} onPress={()=>Actions.home()}>
            <Image style={{width: 25, resizeMode:'contain'}} source={require("../../../assets/iconPNG/white/Icon-01.png")}/>
          </Item>
          <Item style={{borderBottomWidth:0}} onPress={()=>Actions.shoppingList()}>
            <Image style={{width: 25, resizeMode:'contain'}} source={require("../../../assets/iconPNG/white/Icon-02.png")}/>
          </Item>
          <Item style={{borderBottomWidth:0}}>
            <Image style={{width: 25, resizeMode:'contain'}} source={require("../../../assets/iconPNG/white/Icon-04.png")}/>
          </Item>
          <Item style={{borderBottomWidth:0}}>
            <Image style={{width: 25, resizeMode:'contain'}} source={require("../../../assets/iconPNG/white/Icon-03.png")}/>
          </Item>
          <Item style={{borderBottomWidth:0}}>
            <Image style={{width: 25, resizeMode:'contain'}} source={require("../../../assets/iconPNG/white/Icon-06.png")}/>
          </Item>
        </View>
      </View>
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

export default connect(mapStateToProps, bindAction)(FooterTabs);
