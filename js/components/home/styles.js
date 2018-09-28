const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexWrap: 'wrap', 
    flexDirection: 'row', 
    flex: 1,
    width: '100%'
  },
  slideImage: {
    flexDirection: 'row', 
    flex: 1,
    width: '100%'
  },
  footerIcon: {
    marginTop: 0,
    color: '#ccc',
    lineHeight: 30,
    height: 30,
    marginLeft: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginRight: 10
  },
};
