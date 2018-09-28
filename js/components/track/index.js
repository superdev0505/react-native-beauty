import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Platform } from 'react-native';
import { Container, Header, Content, Text, Button, Icon, Card, CardItem,Title, Left, Right, Body } from 'native-base';
import styles from './styles';
import { Actions, ActionConst } from 'react-native-router-flux';



class Track extends Component {
  render() {
    return (
      <Container >
        <Header >
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => Actions.pop()}>
            <Icon name="arrow-round-back" />
          </Button>
          </Left>
          <Body style={{ flex: 0 }}>
          <Title>Order_number: 9809608703</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={{ marginBottom: 10 }} foregroundColor="#000">
            <CardItem style={{ padding: 27 }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.leftBar]} />
                <View>
                  <View>
                    <View style={styles.dot} />
                    <Text style={{ color: '#000', marginBottom: 7, marginTop: 1, backgroundColor: 'transparent' }}>DELIVERED
                    </Text>
                  </View>
                  <Text note style={{ ...styles.text, color: '#000' }}>Industry : My pass is amazing too with.</Text>
                  <Text note style={{ ...styles.text, color: '#909090' }}>24 October 2016</Text>
                  <Text note style={{ ...styles.text, color: '#000', marginTop: 6 }}>Industry: My pass is amazing too with.</Text>
                  <Text note style={{ ...styles.text, color: '#909090' }}>24 October 2016</Text>
                  <Text note style={{ ...styles.text, color: '#000', marginTop: 6 }}>Industry: My pass is amazing too with.</Text>
                  <Text note style={{ ...styles.text, color: '#909090' }}>24 October 2016</Text>
                  <View>
                    <View style={[styles.dot, { top: 8 }]} />
                    <Text style={{ color: '#000', marginVertical: 7 }}>DISPATCHED</Text>
                  </View>
                  <Text note style={{ ...styles.text, color: '#000' }}>Industry: My pass is amazing too with.</Text>
                  <Text note style={{ ...styles.text, color: '#909090' }}>25 October 2016</Text>
                  <Text note style={{ ...styles.text, color: '#000', marginTop: 6 }}>Industry: My pass is amazing too with.</Text>
                  <Text note style={{ ...styles.text, color: '#909090' }}>25 October 2016</Text>
                  <Text note style={{ ...styles.text, color: '#000', marginTop: 6 }}>Industry: My pass is amazing too with.</Text>
                  <Text note style={{ ...styles.text, color: '#909090' }}>25 October 2016</Text>
                  <View>
                    <View style={[styles.dot, { top: 10 }]} />
                    <Text style={{ color: '#000', marginTop: 7 }}>PLACED</Text>
                  </View>
                </View>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default connect()(Track);
