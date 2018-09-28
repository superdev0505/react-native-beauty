import theme from '../../themes/base-theme';


const React = require('react-native');

const { StyleSheet, Platform } = React;


export default{
  container: {
    width: null,
    height: null,
    flex: 1,
  },
  card: {
    borderWidth: 0,
    marginBottom: 15,
    flex: 0,
  },
  descText: {
    color: '#000',
    fontSize: 14,
    width: 150
  },
  cardHeader: {
    backgroundColor: '#eaeaea',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 8,
    borderColor: 'transparent',
    marginTop: -10,
    marginBottom: 20
  },
  login:{
    backgroundColor:'#54C760',
  },
  car:{
    backgroundColor:'#7D59C8',
  },
  dollar:{
    backgroundColor:'#348AD7',
  },
  closeIcon: {
    color: '#000',
    fontSize: 18,
    alignSelf: 'center',
    paddingLeft: 80
  },
  rowBetween: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderID: {
    color: '#000',
    fontWeight: '500',
    fontSize: 14,
  },
  placedON: {
    color: '#000',
    fontSize: 12,
    lineHeight: 15,
  },
  fadeDesc: {
    fontSize: 11,
    lineHeight: 15,
    color: '#b0b0b0',
  },
  bankImage: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  sb:{
    top:17,
  },
  statusContainer: {
    alignSelf: 'stretch',
    borderTopWidth: 3,
    borderColor: '#dbdbdb',
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: 15,
    marginHorizontal: 15,
  },
  statusIconView: {
    borderRadius: 20,
    height: 40,
    width: 40,
    paddingLeft: 3,
    paddingRight: 9,
    paddingTop: (Platform.OS === 'ios') ? 5 : 8,
    top: -21,
  },
  statusIcon: {
    fontSize: 24,
    lineHeight: (Platform.OS === 'ios') ? 27 : 24,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  statusText: {
    color: '#7D59C8',
    fontSize: 12,
    textAlign: 'center',
    marginTop: -15,
  },
  statusTextContainer: {
    marginHorizontal: 10,
    marginTop: -15,
    marginBottom: 10,
  },
  address: {
    color: '#000',
    fontWeight: '500',
    lineHeight: 16,
    fontSize: 12,
  },
  addressButton: {
    alignSelf: 'center',
    marginTop: 15,
    paddingHorizontal: 40,
    backgroundColor: '#dfdfdf',
  },
  labelText: {
    color: '#474747',
    paddingBottom: 0,
  },
};
