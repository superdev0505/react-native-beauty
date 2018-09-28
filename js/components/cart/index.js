import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Platform } from 'react-native';
import { Container, Header, Content, Text, Button, Icon, Card, CardItem, Thumbnail,Left, Body, Right, Title } from 'native-base';

import styles from './style';

const cartItem1 = require('../../../images/cart-item1.png');
const cartItem2 = require('../../../images/cart-item2.png');
import { Actions, ActionConst } from 'react-native-router-flux';

class Cart extends Component {

  render() {
    return (
      <Container  >
        <Header>
        <Left >
          <Button transparent onPress={() => Actions.pop()} >
            <Icon name="arrow-round-back" style={{ fontSize: 30, lineHeight: 32 }} />
          </Button>
          </Left>
          <Body >
            <Title>Shopping Cart</Title>
           </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: 'transparent' }}>
          <Card foregroundColor="#000" style={styles.card} >
            <CardItem style={{ flexDirection: 'column', alignItems: 'stretch' }} >
              <View style={styles.cardTop}>
                <Thumbnail source={cartItem1} style={styles.thumbnail} square />
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                  <Text style={styles.descText}>
                    Wool Blend Coat {'\n'}Long Cashmere Trench
                  </Text>
                  <Text style={styles.rateText}>INR 400</Text>
                </View>
                <Icon name="close" style={styles.closeIcon} />
              </View>
              <View style={styles.bottomDesc}>
                <View style={styles.counterContainer}>
                  <Icon name="add-circle" style={styles.counterIcon} />
                  <Text style={styles.counterText}>1</Text>
                  <Icon name="remove-circle" style={ styles.counterIcon } />
                </View>
                <Text style={{color:'#7D59C8'}}>Show Details</Text>
              </View>
            </CardItem>
          </Card>
          <Card foregroundColor="#000" style={styles.card}>
            <CardItem style={{ flexDirection:'column',alignItems:'stretch', }}>
              <View style={styles.cardTop}>
                <Thumbnail source={cartItem2} style={ styles.thumbnail } square />
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                  <Text style={styles.descText}>
                    Party wear Gown {'\n'}Smooth Satin Material
                  </Text>
                  <Text style={styles.rateText}>INR 610</Text>
                </View>
                <Icon name="close" style={styles.closeIcon} />
              </View>
              <View style={styles.bottomDesc}>
                <View style={styles.counterContainer}>
                  <Icon name="add-circle" style={styles.counterIcon} />
                  <Text style={styles.counterText}>1</Text>
                  <Icon name="remove-circle" style={styles.counterIcon} />
                </View>
                <Text style={{color:'#7D59C8'}}>Show Details</Text>
              </View>
            </CardItem>
          </Card>
          <Card foregroundColor="#000" style={styles.card}>
            <CardItem style={{ flexDirection:'column',alignItems:'stretch', }}>
              <View style={styles.cardTop}>
                <Thumbnail source={cartItem1} style={ styles.thumbnail } square />
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                  <Text style={styles.descText}>
                    Wool Blend Coat {'\n'}Long Cashmere Trench
                  </Text>
                  <Text style={styles.rateText}>INR 700</Text>
                </View>
                <Icon name="close" style={ styles.closeIcon } />
              </View>
              <View style={styles.bottomDesc}>
                <View style={styles.counterContainer}>
                  <Icon name="add-circle" style={styles.counterIcon} />
                  <Text style={styles.counterText}>1</Text>
                  <Icon name="remove-circle" style={styles.counterIcon} />
                </View>
                <Text style={{color:'#7D59C8'}}>Show Details</Text>
              </View>
            </CardItem>
          </Card>

          <Button
            block
            textStyle={{ color:'#fff' }}
            onPress={() => Actions.myOrder()}
          >
              <Text>Order Details</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default connect()(Cart);
