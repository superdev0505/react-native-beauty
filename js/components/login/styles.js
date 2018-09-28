

const React = require('react-native');

const { StyleSheet, Platform } = React;

export default{
  shadow: {
    flex: 1,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderRadius: 0
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerText: {
    color: '#4a4a4a',
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: '700'
  },
  divide: {
    fontSize: 13,
    alignSelf: 'center',
    paddingTop: 15,
    paddingBottom: 15,  
    color: '#c34097',
    fontWeight: '700'
  },
  registerButton: {
    alignSelf: 'stretch',
    borderRadius: 0,
    borderColor: '#c34097',
    paddingTop: 25,
    paddingBottom: 25,  
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  forgot: {
    alignSelf: 'flex-start',
    paddingLeft: 7,
    marginBottom: (Platform.OS === 'ios') ? 10 : 0,
    marginTop: (Platform.OS === 'ios') ? -10 : 0,
  },
  forgotText: {
    color: '#949494',
    fontSize: 12,
    fontWeight: '700'
  },
  login: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 0,
    paddingTop: 25,
    paddingBottom: 25,  
    backgroundColor: '#c34097',
  },
  normalButton: {
    alignSelf: 'stretch',
    borderRadius: 0,
    borderColor: '#4a4a4a',
    paddingTop: 25,
    paddingBottom: 25,  
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  facebookIcon: {
    color: "#4a4a4a"
  },
  twitterIcon: {
    color: "#4a4a4a"
  },
  transparentButton: {
    padding: 0,
    alignItems: 'flex-start',
  },
}
