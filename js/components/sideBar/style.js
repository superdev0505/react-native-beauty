

const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;

export default{
  links: {
    paddingTop: 7,
    paddingBottom: 7,
    borderBottomColor: 'transparent',
  },
  links2: {
    borderBottomColor: 'transparent',
    paddingLeft: 25,
  },
  image: {
    alignSelf: 'stretch',
        // resizeMode: 'cover',
    height: deviceHeight / 3,
    width: null,
    position: 'relative',
    flexDirection:'column',
  },
  thumbnail: {
    position: 'absolute',
    left: 20,
    top:60,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    borderRadius: 33,
    width: 65,
    height: 65,
  },
  sidebarIconView: {
    width: 30,
    height: 30,
    borderRadius: 15,
    paddingTop: (Platform.OS === 'android') ? 4 : 0,
    marginRight: 17,
    alignItems:'center',
  },
  potrait:{
    backgroundColor:'#00afc1',
  },
  shirt:{
    backgroundColor:'#ab6aed',
  },
  cut:{
    backgroundColor:'#eb6b23',
  },
  construct:{
    backgroundColor:'#29783b',
  },
  car:{
    backgroundColor:'#4dcae0',
  },
  copy:{
    backgroundColor:'#f5bf35',
  },
  log:{
    backgroundColor:'red',
  },
  sidebarList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sidebarIcon: {
    fontSize: 21,
    top: (Platform.OS === 'ios') ? 4 : 0,
    backgroundColor: 'transparent',
  },
  sidebarIconLog: {
    fontSize: 15,
    top: (Platform.OS === 'ios') ? 2 : 0,
    backgroundColor: 'transparent',
  },
  sidebarIconViewLog: {
    width: 20,
    height: 20,
    borderRadius: 15,
    paddingTop: (Platform.OS === 'android') ? 4 : 0,
    marginRight: 17,
    alignItems:'center',
  },
  linkTextLog: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    marginLeft: -10,
    marginTop:-3,
  },
  list: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: 'rgba(218, 218, 218, 0.91)',
  },
  linkText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
  name: {
    position:'absolute',
    top:140,
    color: '#fff',
    position: 'absolute',
    backgroundColor: 'transparent',
    left: 20,
    fontSize: 14,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  credit: {
    position:'absolute',
    top:160,
    color: '#fff',
    position: 'absolute',
    backgroundColor: 'transparent',
    left: 20,
    fontSize: 14,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },

};
