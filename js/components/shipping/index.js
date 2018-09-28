import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Platform } from 'react-native';
import { Container, Header, Content, Text, Button, Icon, Card, CardItem,Title,Left, Right, Body } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';

import styles from './styles';

const rowBetween = styles.rowBetween;
const statusContainer =styles.statusContainer;
const statusTextContainer=styles.statusTextContainer;


class Shipping extends Component {

  render() {
    return (
      <Container padder >
        <Header >
        <Left >
          <Button transparent onPress={() => Actions.pop()} >
            <Icon active name="arrow-round-back" style={{ fontSize: 30, lineHeight: 32, paddingRight: 10 }} />

          </Button>
          </Left>
          <Body>
          <Title>
          Shipping
          </Title>
          </Body>
          <Right />
        </Header>
        <Content padder >
        <CardItem style={{...styles.cardHeader }}>
          <View style={{...styles.rowBetween, ...styles.statusContainer, ...styles.sb}} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:15, }}>
            <View style={{ flex: 1, alignItems: 'flex-start' }}  >
              <View style={{...styles.statusIconView,...styles.login}}>
                <Icon name="log-in" style={{...styles.statusIcon, ...styles.Ilogin}} />
              </View>
              <Text style={styles.statusText}>Login</Text>
            </View>
            <View style={{ flex: 1,alignItems:'center' }}>
              <View style={{ ...styles.statusIconView,...styles.car}}>
                <Icon active name="car" style={styles.statusIcon} />
              </View>
              <Text style={styles.statusText}>Shipping</Text>
            </View>
            <View style={{ flex: 1,alignItems:'flex-end' }}>
              <View style={{ ...styles.statusIconView ,...styles.dollar }}>
                <Icon name="logo-usd" style={styles.statusIcon} />
              </View>
              <Text style={styles.statusText}>Payment</Text>
            </View>
          </View>
        </CardItem>
            <Card  foregroundColor="#000" style={{ flex: 1.4, shadowColor: '#ebebeb',marginHorizontal:15,marginTop:-10, }} >
            </Card>
            <Card foregroundColor="#000" style={styles.card}>
              <CardItem style={{ flex:1,marginLeft: 5, marginRight: -5 ,flexDirection:'column',alignItems:'flex-start'}}>
                <View style={{...styles.rowBetween , ...styles.position}}>
                  <Text style={styles.descText}>
                      Your shipping address
                  </Text>
                  <Icon name="remove-circle" style={{color:'#000',fontSize:18,alignSelf:'flex-end', paddingLeft:15,}} />
                </View>
                <View style={{ borderBottomWidth: 0.5, paddingBottom: 10,alignSelf:'stretch', }}>
                  <Text style={{ color: '#d0d0d0', fontWeight: '500', marginVertical: 7, fontSize: 14 }}>Primary Address
                  </Text>
                  <Text style={[styles.address, { fontSize: 15 }]}>John Doe
                  </Text>
                  <Text style={[styles.address]}>#48, BBMP Office Road, Near
                  </Text>
                  <Text style={[styles.address]}>St. Joseph School, Virat Nagar,
                  </Text>
                  <Text style={[styles.address]}>Bomanahalli
                  </Text>
                  <Text style={[styles.address]}>Bangalore - 68
                  </Text>
                  <Text style={[styles.address]}>Karnataka, India
                  </Text>
                </View>
                <Button
                  small
                  style={styles.addressButton}
                  textStyle={{ color: '#7D59C8' }}
                ><Text style={{ color:'#7D59C8'}}> +2 More Addresses</Text>
                </Button>
              </CardItem>
            </Card>
            <Card style={styles.card}>
              <CardItem style={{ flex: 1,}}>
                <View style={styles.rowBetween}>
                  <Text style={styles.descText}>
                      Add new address
                  </Text>
                  <Icon name="add-circle" style={styles.closeIcon} />
                </View>
              </CardItem>
            </Card>
            <Button primary block textStyle={{ color: '#fff' }} onPress={() => Actions.payment()}><Text>Proceed Payment</Text></Button>
        </Content>
      </Container>
    );
  }
}

export default connect()(Shipping);
