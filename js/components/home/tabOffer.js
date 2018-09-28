
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Content, H3 } from 'native-base';

const noOffer = require('../../../images/no-offers.png');

class TabOffer extends Component { // eslint-disable-line react/prefer-stateless-function

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Content style={{ backgroundColor: 'transparent' }}>
        <Image source={noOffer} style={{ resizeMode: 'cover' }} />
        <H3 style={{ color:'#7D59C8', alignSelf: 'center', marginVertical: 15 }}>
            No offers...
        </H3>
      </Content>
    );
  }
}

export default connect(null)(TabOffer);
