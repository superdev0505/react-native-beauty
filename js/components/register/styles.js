

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
  register: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 0,
    paddingTop: 25,
    paddingBottom: 25,  
    backgroundColor: '#c34097',
  },
  termsText: {
    flexDirection:'column',
    fontSize: 14,
    fontWeight: '700',
    color: '#949494',
  },
  textWrap: {
    flexWrap: 'wrap',
    alignItems: 'flex-start', 
    flexDirection:'row', 
    justifyContent: 'center', 
    paddingTop: 20, 
    paddingBottom: 20
  },
  hyperText: {
    textDecorationLine: 'underline',
    color: '#949494',
    fontWeight: '700',
    fontSize: 14,
    flexDirection:'column',
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
}
