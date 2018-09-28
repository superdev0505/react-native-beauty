import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Icon, View, Button } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
import PropTypes from 'prop-types';
const logo = require('../../../images/strapsale-logo.png');

class Header extends Component {

  static propTypes = {
    openDrawer: PropTypes.func,
  }

  render() {
    return (
      <View style={styles.header} >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="menu" />
          </Button>
          <Image
            source={logo}
            style={{ height: 30, width: 95, resizeMode: 'contain' }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button transparent style={{ paddingHorizontal: 10 }}>
            <Icon name="heart" />
          </Button>
          <Button transparent style={{ paddingHorizontal: 10 }}>
            <Icon active name="cart" />
          </Button>
          <Button transparent style={{ paddingLeft: 10 }}>
            <Icon name="md-more" />
          </Button>
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

export default connect(mapStateToProps, bindAction)(Header);
