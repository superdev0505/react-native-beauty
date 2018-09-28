

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

const deviceWidth = Dimensions.get('window').width;

const landmarkSize = 4;
export default{
  topHeaderTextMenu: {
    color: '#4a4a4a',
    fontSize: 18,
    marginTop: 18,
    fontWeight: '700',
  },
  bottomHeaderText:{
    fontSize: 9,
    color: '#4a4a4a',
    maxWidth: deviceWidth - 100,
    fontFamily: 'Roboto',
    textAlign: 'center'
  },
  topHeaderText: {
    color: 'white',
    position: 'absolute',
    top: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '700'
  },
  modalView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%', 
    height: '100%', 
    alignItems: 'center'
  },
  popupButton: {
    borderRadius: 0,
    width: '44%',
    marginLeft: '3%',
    marginRight: '3%',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  modalInnerView: {
    position: 'absolute', 
    bottom: 30, 
    backgroundColor: '#fff', 
    width: '90%', 
    maxWidth: 400, 
    padding: 30, 
    borderWidth: 3, 
    borderColor: '#c34097'
  },
  facesContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  picButton: {
    backgroundColor: 'black',
  },
  flipButton: {
    height: 50,
    marginTop: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipText: {
    color: 'white',
    fontSize: 15,
  },
  landmark: {
    width: landmarkSize,
    height: landmarkSize,
    position: 'absolute',
    backgroundColor: 'red',
  },
  beautyContentItem: {
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomWidth: 0,
  },
};
