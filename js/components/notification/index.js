import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import { Container, Header, Content, Text, Button, Icon, Card, CardItem, Left, Body, Right,Title } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';

class Notification extends Component {

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
          Notifications
          </Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={{ backgroundColor: 'transparent' }}>
          <Card style={{ marginBottom: 10 }}>
            <CardItem >
              <Left>
                <Icon active name="notifications" style={{ color: '#7D59C8', alignSelf: 'flex-start' }} />
                <Body>
                  <Text style={{ color: '#7D59C8', fontWeight: '400' }}>
                  Flat 50% off on Puma FootWear
              </Text>
                  <Text note style={{ fontSize: 12, fontWeight: '400', color: '#7D59C8', paddingTop: 5 }}>
                  You can tell me his pass is amazing but my pass is amazing too without pressure
              </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card style={{ marginBottom: 10 }}>
            <CardItem >
              <Left>
                <Icon active name="notifications" style={{ color: '#7D59C8', alignSelf: 'flex-start' }} />
                <Body>
                  <Text style={{ color: '#7D59C8', fontWeight: '400' }}>
                  Flat 50% off on Puma FootWear
              </Text>
                  <Text note style={{ fontSize: 12, fontWeight: '400', color: '#7D59C8', paddingTop: 5 }}>
                  You can tell me his pass is amazing but my pass is amazing too without pressure
              </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card style={{ marginBottom: 10 }} foregroundColor="#000">
            <CardItem >
              <Left>
                <Icon active name="notifications" style={{ color: '#000', alignSelf: 'flex-start' }} />
                <Body>
                  <Text style={{ fontWeight: '400' }}>Flat 50% off on Puma FootWear</Text>
                  <Text note style={{ fontSize: 12, color: '#000', paddingTop: 5, fontWeight: '400' }}>
                  Perhaps the best line of all came at the very end
                  hen asked about Wayne Rooney’s role in the team
              </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card style={{ marginBottom: 10 }} foregroundColor="#000">
            <CardItem >
              <Left>
                <Icon active name="notifications" style={{ color: '#000', alignSelf: 'flex-start' }} />
                <Body>
                  <Text style={{ fontWeight: '400' }}>Flat 50% off on Puma FootWear</Text>
                  <Text note style={{ fontSize: 12, color: '#000', paddingTop: 5, fontWeight: '400' }}>
                  Perhaps the best line of all came at the very end
                  when asked about Wayne Rooney’s role in the team
              </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card style={{ marginBottom: 10 }} foregroundColor="#000">
            <CardItem >
              <Left>
                <Icon active name="notifications" style={{ color: '#000', alignSelf: 'flex-start' }} />
                <Body>
                  <Text style={{ fontWeight: '400' }}>Flat 50% off on Puma FootWear</Text>
                  <Text note style={{ fontSize: 12, color: '#000', paddingTop: 5, fontWeight: '400' }}>
                  Perhaps the best line of all came at the very end
                  when asked about Wayne Rooney’s role in the team
              </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


export default connect()(Notification);
