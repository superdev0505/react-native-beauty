
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
  },
  descText: {
    color: '#000',
    fontSize: 14,
  },
  cardHeader: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#ececec',
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 8,
    borderColor:'transparent',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10
  },
  mt:{
    marginTop:15,

  },
  closeIcon: {
    color: '#000',
    fontSize: 18,
    paddingLeft:15,
  },
  rowBetween: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusContainer: {
    alignSelf: 'stretch',
    borderTopWidth: 3,
    borderColor: '#dbdbdb',
    marginHorizontal: 15,
    marginBottom: 0,
    marginTop: 25,
  },
  position:{
    alignSelf:'stretch',
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
  statusIconView: {
    borderRadius: 20,
    height: 40,
    width: 40,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: (Platform.OS === 'ios') ? 5 : 7,
    top: -21,
    alignItems:'center',
  },
  sb:{
    top:17,
  },
  statusIcon: {
    fontSize: 24,
    lineHeight: (Platform.OS === 'ios') ? 27 : 25,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
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
  statusText: {
    color: '#7D59C8',
    fontSize: 12,
    textAlign: 'center',
    marginTop: -17,
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
    marginBottom: 15,
    paddingHorizontal: 40,
    backgroundColor: '#dfdfdf',
  },
};
