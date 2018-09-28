
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  View} from 'react-native';
import { Content,Thumbnail } from 'native-base';
import styles from './styles';

const sale = require('../../../images/sale.png');
const tie = require('../../../images/tie.png');
const necktie = require('../../../images/neckties.png');
const sportShoe = require('../../../images/sport-shoe.png');
const businessMan = require('../../../images/businessman.png');
const hanger = require('../../../images/hanger.png');
const handbag = require('../../../images/handbag.png');
const suitedMan = require('../../../images/suited-man.png');

class TabHome extends Component { // eslint-disable-line react/prefer-stateless-function

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Content>
          <View style={styles.Block1}>
            <Thumbnail square source={sale} style={styles.imgBlock1} />
          </View>
          <View style={styles.Block2}>
            <Thumbnail square source={tie} style={styles.imgBlock2} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.Block3}>
              <Thumbnail square source={necktie} style={styles.imgBlock3} />
            </View>
            <View style={styles.Block4}>
              <Thumbnail square source={sportShoe} style={styles.imgBlock4} />
            </View>
         </View>
          <View style={styles.Block1}>
            <Thumbnail square source={businessMan} style={styles.imgBlock1} />
          </View>
          <View style={styles.Block2}>
            <Thumbnail square source={hanger} style={styles.imgBlock2} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.Block3}>
              <Thumbnail square source={handbag} style={styles.imgBlock3} />
            </View>
            <View style={styles.Block4}>
              <Thumbnail square source={suitedMan} style={styles.imgBlock4} />
            </View>
            </View>
      </Content>
    );
  }
}

export default connect(null)(TabHome);
