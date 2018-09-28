
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
    marginBottom: 15,
  },
  cardTop: {
    flexDirection: 'row',
    position: 'relative',
  },
  Iplaced: {
    position: 'absolute',
    top: -33,
    left: (Platform.OS === 'android') ? -45 : -40,
    width: 20,
  },
  Idelivered: {
    position: 'absolute',
    top: -33,
    right: (Platform.OS === 'android') ? -45 : -40,
    width: 20,

  },
  Idispatched: {
    position: 'absolute',
    top: -33,
    left: 35,
    width: 20,
  },
  descText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  cardHeader: {
    paddingLeft: null,
    paddingRight: null,
    backgroundColor: '#ebebeb',
    borderColor: 'transparent',
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 8,
    justifyContent: 'space-between',
    borderWidth: 0,
    marginLeft: (Platform.OS === 'ios') ? 1 : 1,
    marginRight: (Platform.OS === 'ios') ? -1 : -5,
  },
  delivered: {
    color: '#219f2e',
    fontSize: 12,
  },
  transit: {
    color: '#e0c50b',
    fontSize: 12,

  },
  sbar: {
    position: 'relative',
    margin: 30,
    marginBottom: 0,
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  refreshIcon: {
    color: '#000',
    fontSize: 24,
    alignSelf: 'center',
  },
  rowBetween: {
    flex: 1,
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
  statusContainer: {
    alignSelf: 'stretch',
    borderTopWidth: 2,
    margin: 25,
    marginBottom: 0,
  },
  statusBar: {
    borderWidth: 1,
    borderColor: '#7D5AC8',
    bottom: 4,
    left: 0,
    alignItems: 'stretch',
    flex: 1,
  },
  statusIcon: {
    color: '#7D5AC8',
    backgroundColor: '#fff',
    fontSize: 24,
    marginTop: 15,

  },
  statusText: {
    color: '#7D5AC8',
    fontSize: 13,
  },
  statusTextContainer: {
    marginHorizontal: 10,
  },
};
