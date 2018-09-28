import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Picker, ActionSheetIOS, Platform, Dimensions } from 'react-native';
import { Container, Header, Content, Text,Title, Button, Icon, Card, CardItem, Item, Input, Left, Right, Body, Grid, Col } from 'native-base';
import styles from './styles';
import { Actions, ActionConst } from 'react-native-router-flux';

const deviceWidth = Dimensions.get('window').width;

const ItemPic = Picker.Item;
const BUTTONS = [
  'Net Banking',
  'Debit/Credit card',
  'Cash on Delivery',
  'Cancel',
];
const CANCEL_INDEX = 3;
const icici = require('../../../images/icici.png');
const sbi = require('../../../images/sbi.png');
const axis = require('../../../images/axis.png');

class Payment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected1: 'key1',
      selected2: 'pay1',
      clicked: BUTTONS[0],
    };
  }

  onValueChange(key: string, value: string) {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  }


  showActionSheet() {
    const that = this;
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
    },
        (buttonIndex) => {
          const selected = BUTTONS[buttonIndex];
          if (selected !== 'Cancel') {
            that.setState({ clicked: BUTTONS[buttonIndex] });
          }
        }
    );
  }

  render() {
    return (
      <Container>
        <Header >
        <Left >
          <Button transparent onPress={() => Actions.pop()} >
            <Icon name="arrow-round-back" style={{ fontSize: 30, lineHeight: 32, paddingRight: 10 }} />
          </Button>
          </Left>
          <Body >
          <Title>
          Payment
          </Title>
          </Body>
          <Right />
        </Header>
        <Content padder >
          <View >
          <CardItem style={styles.cardHeader}>
            <View style={{ ...styles.rowBetween, ...styles.statusContainer, ...styles.sb }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              <View style={{ flex: 1, alignItems: 'flex-start' }} >
                <View style={{ ...styles.statusIconView, ...styles.login }}>
                  <Icon name="log-in" style={{ ...styles.statusIcon, ...styles.Ilogin }} />
                </View>
                <Text style={styles.statusText}>Login</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ ...styles.statusIconView, ...styles.car }}>
                  <Icon active name="car" style={styles.statusIcon} />
                </View>
                <Text style={styles.statusText}>Shipping</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <View style={{ ...styles.statusIconView, ...styles.dollar }}>
                  <Icon name="logo-usd" style={styles.statusIcon} />
                </View>
                <Text style={styles.statusText}>Payment</Text>
              </View>
            </View>
          </CardItem>
          <Card foregroundColor="#000" style={{ flex: 1.4, shadowColor: '#ebebeb', marginHorizontal: 15, marginTop: -10 }} >

          </Card>
            <Card style={[styles.card]}>
              {
                (Platform.OS === 'ios') ?
                  <CardItem button onPress={() => this.showActionSheet()}>
                    <View style={styles.rowBetween}>
                      <Left>
                      <Text style={styles.descText}>
                        {this.state.clicked}
                      </Text>
                      </Left>
                      <Body />
                      <Right>
                      <Icon name="arrow-down" style={styles.closeIcon} />
                      </Right>
                    </View>
                  </CardItem>
                  :
                    <View style={{ backgroundColor: '#fff', paddingHorizontal: 7 }}>
                      <Picker
                        mode="dropdown"
                        selectedValue={this.state.selected2}
                        onValueChange={(key) => this.setState({ selected2: key })}
                      >
                        <ItemPic label="Net Banking" value="pay0" />
                        <ItemPic label="Debit/Credit Card" value="pay1" />
                        <ItemPic label="Cash on Delivery" value="pay3" />
                      </Picker>
                    </View>
              }
            </Card>
            <Card style={[styles.card]}>
              <CardItem>
                <Left>
                  <Body>
                    <Text style={{ color: '#787878', fontSize: 14 }}>Tap to select bank</Text>
                    <View
                      style={{ ...styles.rowBetween,
                        paddingHorizontal: 30,
                        paddingVertical: 15 }}
                    >
                      <Image style={styles.bankImage} source={icici} />
                      <Image style={styles.bankImage} source={sbi} />
                      <Image style={styles.bankImage} source={axis} />
                    </View>
                    <Picker
                      selectedValue={this.state.selected1}
                      onValueChange={(key) => this.setState({ selected1: key })}
                    >
                      <ItemPic label="ICICI Bank" value="key0" />
                      <ItemPic label="State Bank of India" value="key1" />
                      <ItemPic label="Axis Bank" value="key3" />
                    </Picker>
                  </Body>
                </Left>
              </CardItem>
            </Card>
            <Card style={[styles.card]} foregroundColor="#000">
              <CardItem>
                <Left>
                  <Body>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={styles.labelText}>Card Number *</Text>
                      <Item regular style={{ height: 50, marginTop: 5 }} >
                        <Input placeholder="0000-0000-0000-0000" placeholderTextColor="#b6b6b6" />
                      </Item>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={styles.labelText}>Card Name *</Text>
                      <Item regular style={{ height: 50, marginTop: 5 }}>
                        <Input placeholder="Name written on card" placeholderTextColor="#b6b6b6" />
                      </Item>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 3 }}>
                      <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{ marginBottom: 10 }}>
                          <Text style={styles.labelText}>MM</Text>
                          <Item
                            regular
                            style={{ width: 70, marginRight: 10, height: 50, marginTop: 5 }}
                          >
                            <Input placeholder="MM" placeholderTextColor="#b6b6b6" />
                          </Item>
                        </View>
                        <View style={{ marginBottom: 10 }}>
                      <Text style={styles.labelText}>YY</Text>
                      <Item regular style={{ width: 70, marginTop: 5 }} >
                        <Input placeholder="YY" placeholderTextColor="#b6b6b6" />
                      </Item>
                    </View>
                  </View>
                  <View style={{ marginBottom: 10, flex: 1 }}>
                    <View style={{ alignSelf: 'flex-end' }}>
                      <Text style={{ ...styles.labelText, textAlign: 'left' }}>CVV</Text>
                      <Item regular style={{ width: 70, marginTop: 5 }}>
                        <Input placeholder="CVV" placeholderTextColor="#b6b6b6" />
                      </Item>
                    </View>
                  </View>
                </View>
              </Body>
              </Left>
              </CardItem>
            </Card>
            <Card style={[styles.card]}>
              <CardItem>
              <Left>
              <Body>
                <View style={styles.rowBetween}>
                  <Text style={styles.descText}>
                      Apply Promo/Wallet
                  </Text>
                  <Icon name="remove-circle" style={styles.closeIcon} />
                </View>
                <Text style={{ color: '#b3b3b3', fontSize: 13, lineHeight: 15, paddingBottom: 5 }}>Available wallet Cash INR 0</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                  <Item regular style={{ marginRight: 10, flex: 1, height: 50 }} >
                    <Input placeholder="Promo code" placeholderTextColor="#b6b6b6" />
                  </Item>
                  <Button primary style={{ height: 50, alignSelf: 'flex-end', backgroundColor: '#7D59C8' }} textStyle={{ color: '#fff' }}><Text> Apply </Text></Button>
                </View>
                </Body>
                </Left>
              </CardItem>
            </Card>
            <Button primary block style={{ backgroundColor: '#7D59C8' }} textStyle={{ color: '#fff' }}><Text>Make Payment</Text></Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default connect()(Payment);
