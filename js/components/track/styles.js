const React = require('react-native');

const { StyleSheet, Platform } = React;


export default{
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  leftBar: {
    borderLeftWidth: 3,
    paddingLeft: 20,
    position: 'relative',
    alignSelf: 'stretch',
    borderColor: '#7D59C8',
  },
  dot: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#7D59C8',
    left: -31,
    top: 0,
  },
  text: {
    fontSize: 13,
    lineHeight: (Platform.OS === 'ios') ? 15 : 22,
  },
};
