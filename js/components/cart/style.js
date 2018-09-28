const React = require('react-native');

const { StyleSheet, Platform } = React;

export default {
  container: {
    width: null,
    height: null,
    flex: 1,
  },
  card: {
    borderWidth: 0,
    marginBottom: 14,
  },
  cardTop: {
    flexDirection: 'row',
    position: 'relative',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  thumbnail:{
    width:100,
    height:100,
    resizeMode: 'contain',
  },
  descText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 5,
  },
  rateText: {
    color: '#000',
    alignSelf: 'flex-end',
  },
  closeIcon: {
    color: '#000',
    fontSize: 24,
    right:-10,
    top: -12,
    position: 'absolute',
    paddingLeft:(Platform.OS === 'ios') ? 25 :15 ,
  },
  bottomDesc: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 5,
    justifyContent: 'space-between',
  },
  counterContainer: {
    flexDirection: 'row',
  },
  counterIcon: {
    color: '#000',
    fontSize: 16,
    lineHeight: 15,
    width:15,
    backgroundColor: 'transparent',
  },
  counterText: {
    color: '#000',
    fontSize: 14,
    lineHeight: (Platform.OS === 'ios') ? 15 : 20,
    marginTop: (Platform.OS === 'android') ? -3 : 0,
    marginHorizontal: 4,
  },
};
