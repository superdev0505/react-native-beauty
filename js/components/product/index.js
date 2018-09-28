import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, ActionSheetIOS, Picker, Platform, Dimensions, ListView } from 'react-native';
import { Container, Header, Content, Text, Button, Icon, Card, CardItem, Title, Body, Left, Right } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';

import theme from '../../themes/base-theme';
import styles from './style';

const widthD = Dimensions.get('window').width;
const heightD = Dimensions.get('window').height;

const ItemPic = Picker.Item;
const BUTTONS = [
  'Women',
  'Men',
  'Kids',
  'Cancel',
];
const CANCEL_INDEX = 3;
const product1 = require('../../../images/product1.png');
const product2 = require('../../../images/product2.png');
const product3 = require('../../../images/product3.png');
const product4 = require('../../../images/product4.png');

class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: true,
      selected1: 'key1',
      clicked: BUTTONS[0],
    };
  }

  onValueChange(key: string, value: string) {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  }

  toggleView() {
    this.setState({
      list: !this.state.list,
    });
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
    const items = [
      {
        image: product1,
        name: 'Leather Shoes',
        price: 'INR 5200',
        exPrice: 'INR 7700',
        discount: '25% off',
      },
      {
        image: product2,
        name: 'Tie and Cufflinks',
        price: 'INR 768',
        exPrice: 'INR 1700',
        discount: '60% off',
      },
      {
        image: product3,
        name: 'Ladies Handbag',
        price: 'INR 1200',
        exPrice: 'INR 1700',
        discount: '5% off',
      },
      {
        image: product4,
        name: 'Leather Belt',
        price: 'INR 800',
        exPrice: 'INR 1600',
        discount: '50% off',
      },
    ];
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
          Products
          </Title>
           </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: '#EBEBEB' }}>
          <View style={styles.buttonContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Button onPress={() => this.toggleView()} style={{ backgroundColor: '#fff' }} >
                <Icon style={{ color:'#000' }} name={(this.state.list) ? 'grid' : 'list'} />
              </Button>
              <Button style={{ backgroundColor: '#fff', marginLeft: 10 }}>
                <Icon style={{ color:'#000' }} name="podium" />
              </Button>
            </View>
            {
              (Platform.OS === 'ios') ?
                <Button iconRight onPress={() => this.showActionSheet()} style={{ backgroundColor: '#fff' }}>
                <Text style={{ color:'#000' }}>
                  {this.state.clicked}
                </Text>
                  <Icon name="arrow-down" style={{ color:'#000', fontSize: 20, lineHeight: 26 }} />
                </Button>
                :
                  <View style={styles.pickerContainer}>
                    <Picker
                      mode="dropdown"
                      style={{ height: 45, padding: 5 }}
                      selectedValue={this.state.selected1}
                      onValueChange={(key) => this.setState({ selected1: key })}
                    >
                      <ItemPic label="Men" value="key0" />
                      <ItemPic label="Women" value="key1" />
                      <ItemPic label="Kids" value="key3" />
                    </Picker>
                  </View>
            }
          </View>
          <Card
            transparent
            dataArray={items}
            style={{ backgroundColor: 'transparent' }}
            foregroundColor="#000"
            contentContainerStyle={this.state.list ? styles.card1 : styles.card}
            renderRow={item =>
              <View style={this.state.list ? { ...styles.gridCards } : { padding: 10, marginBottom: 10, backgroundColor: '#fff' }} >
                <Image source={item.image} style={styles.productItem} />
                <View style={{ marginTop: 10 }}>
                  <Text style={styles.counterText}>{item.name}</Text>
                  <Text style={{ alignSelf: 'center', color: '#7D59C8' }}>{item.price}</Text>
                  <View style={styles.descContainer}>
                    <Text style={{ color: '#999999', textDecorationLine: 'line-through' }}>{item.exPrice}</Text>
                    <Text style={styles.fadedText}>{item.discount}</Text>
                  </View>
                </View>
              </View>
              }
          />
        </Content>
      </Container>
    );
  }
}

export default connect()(Product);
