
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Platform } from 'react-native';
import { Container, Header, Content, Text, Button, Icon, Card, CardItem, Thumbnail,Left, Right, Body, Title } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';

import styles from './styles';

const cartItem1 = require('../../../images/cart-item1.png');
const cartItem2 = require('../../../images/cart-item2.png');
const delivered = styles.delivered;
const transit = styles.transit;
const sb = styles.sbar;
const Idel=styles.Idelivered;
const Idis=styles.Idispatched;
const Iplaced=styles.Iplaced;



class MyOrder extends Component {
  render() {
    return (
      <Container>
        <Header >
        <Left >
          <Button transparent onPress={() => Actions.pop()}>
            <Icon name="arrow-round-back" style={{ fontSize: 30, lineHeight: 32, paddingRight: 10 }} />
          </Button>
          </Left>
          <Body>
            <Title> My Order</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
        <CardItem style={{ ...styles.cardHeader }}>
        <View style={styles.rowBetween}>
        <View>
        <Text style={styles.orderID}>OrderID: 9809608703 </Text>
        <Text style={styles.placedON}>Placed On: 23 August 2016</Text>
        </View>

        </View>
        <Button small onPress={() => Actions.shipping()} style={{ padding: 30,backgroundColor: '#cdcdcd' }}><Text style={{ color:'#000', }}>DETAILS</Text></Button>
        </CardItem>
          <Card foregroundColor="#000" style={styles.card}>
            <CardItem style={{ flexDirection:'column' }}>
              <View style={styles.cardTop}>
                <Thumbnail source={cartItem1} style={ styles.thumbnail } square />
                <View style={{ flex: 1, paddingLeft: 15 }}>
                  <Text style={styles.descText}>
                    Wool Blend Coat {'\n'}Long Cashmere Trench
                  </Text>
                  <View style={[styles.rowBetween, { paddingTop: 15 }]}>
                    <View>
                      <Text style={styles.fadeDesc}>Status:</Text>
                      <Text style={{ ...styles.fadeDesc, ...delivered }}>Delivered Successfully</Text>
                      <Text style={styles.fadeDesc}>Last update: 24 August 2016</Text>
                      <Text style={styles.fadeDesc}>Delivered on: 25 August 2016</Text>
                    </View>
                    <Icon name="refresh" style={styles.refreshIcon} />
                  </View>
                </View>
              </View>
               <View style={{...styles.rowBetween, ...sb }}>
                  <View style={styles.statusBar} />
                 </View>
              <View style={{ ...styles.rowBetween, ...styles.statusTextContainer }}>
                <View >

                  <Icon active name="checkmark-circle" style={{...styles.statusIcon, ...Iplaced }} />
                  <Text style={{ color: '#7D5AC8', fontSize: 13,left:-60,top:15 }}>PLACED</Text>
                </View>
                <View>
                  <Icon active name="checkmark-circle" style={{...styles.statusIcon, ...Idis }} />
                  <Text style={{ color: '#7D5AC8', fontSize: 13,top:15 }}>DISPATCHED</Text>
                </View>
                <View>
                  <Icon active name="checkmark-circle" style={{...styles.statusIcon, ...Idel }} />
                  <Text style={{ color: '#7D5AC8', fontSize: 13,top:15,right:-60}}>DELIVERED</Text>
                </View>
              </View>
              <Button small  onPress={() => Actions.track()} style={{ alignSelf: 'flex-end', backgroundColor:'#825FCA', marginTop: 25 }} textStyle={{ color: '#fff' }}><Text>TRACK</Text></Button>
            </CardItem>
          </Card>
          <CardItem style={{...styles.cardHeader }}>
            <View style={styles.rowBetween}>
              <View>
                <Text style={styles.orderID}>OrderID: 9809608704 </Text>
                <Text style={styles.placedON}>Placed On: 22 August 2016</Text>
              </View>

            </View>
            <Button small onPress={() => Actions.shipping()} style={{ backgroundColor: '#cdcdcd' }}><Text style={{ color:'#000', }}>DETAILS</Text></Button>
          </CardItem>
          <Card foregroundColor="#000" style={styles.card}>
            <CardItem style={{ flexDirection:'column' }}>
              <View style={styles.cardTop}>
                <Thumbnail source={cartItem2} style={ styles.thumbnail } square />
                <View style={{ flex: 1, paddingLeft: 15 }}>
                  <Text style={styles.descText}>
                    Party wear Gown {'\n'}Smooth Satin Material
                  </Text>
                  <View style={[styles.rowBetween, { paddingTop: 15 }]}>
                    <View>
                      <Text style={styles.fadeDesc}>Status:</Text>
                      <Text style={{ ...styles.fadeDesc, ...transit }}>In Transit</Text>
                      <Text style={styles.fadeDesc}>Last update: 24 August 2016</Text>
                      <Text style={styles.fadeDesc}>Expected date: 25 August 2016</Text>
                    </View>
                    <Icon name="refresh" style={styles.refreshIcon} />
                  </View>
                </View>
              </View>
              <View style={{...styles.rowBetween, ...sb }}>
                <View style={styles.statusBar} />
              </View>
              <View style={{ ...styles.rowBetween, ...styles.statusTextContainer }}>
                <View >
                  <Icon active circle name="checkmark-circle" style={{...styles.statusIcon, ...Iplaced }} />
                  <Text style={{ color: '#7D5AC8', fontSize: 13,left:-60,top:15 }}>PLACED</Text>
                </View>
                <View>
                  <Icon active name="checkmark-circle" style={{...styles.statusIcon, ...Idis }}  />
                  <Text style={{ color: '#7D5AC8', fontSize: 13,top:15 }}>DISPATCHED</Text>
                </View>
                <View>
                  <Icon active name="clock" style={{...styles.statusIcon, ...Idel, color: '#E0C50B' }} />
                  <Text style={{ color: '#7D5AC8', fontSize: 13,top:15,right:-60}}>IN TRANSIT</Text>
                </View>
              </View>
              <Button small primary onPress={() => Actions.track()} style={{ alignSelf: 'flex-end', marginTop: 15,backgroundColor:'#825FCA', justifyContent: 'center',marginTop:25, }} textStyle={{ color: '#fff' }}><Text>TRACK</Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default connect()(MyOrder);
