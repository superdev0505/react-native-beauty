

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

const deviceWidth = Dimensions.get('window').width;

export default{
  topHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -50,
    zIndex: 100,
  },
  name: {
    textAlign: 'center',
    marginTop: 15,
    color: '#4a4a4a', 
    fontSize: 18
  },
  title: {
    textAlign: 'center'
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
  startDate: {
    textAlign: 'center',
    color: '#949494',
    fontSize: 10,
    marginTop: 3,
    fontWeight: '900'
  },
  header: {
    backgroundColor: '#eeeeee',
    paddingLeft: 30,
    paddingTop: 12,
    paddingBottom: 12,
  },
  headerInnerText: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'left',
    color: '#4a4a4a'
  },
  topHeaderText: {
    color: '#4a4a4a',
    position: 'absolute',
    top: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '700'
  },
  beautyContentWrap: {
    backgroundColor: '#fff',
    borderTopColor: '#eee',
    borderTopWidth: 1,
    paddingBottom: 15,
  },
  contentWrap: {
    backgroundColor: '#fff',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    paddingBottom: 15,
  },
  contentIcon: {
    color: '#4a4a4a',
    width: 30
  },
  normalButton: {
    alignSelf: 'stretch',
    borderRadius: 0,
    paddingTop: 25,
    paddingBottom: 25,  
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
    marginLeft: 35,
    marginRight: 35
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
  basicContentItem: {
    marginLeft: 30,
    marginRight: 30,
    borderBottomColor: '#949494',
  },
  beautyContentItem: {
    marginLeft: 0,
    marginRight: 0,
    borderBottomColor: '#eee',
    paddingLeft: 30,
    paddingRight: 30
  },
  leftEl: {
    fontSize: 13, 
    fontWeight: '700',
    color: '#4a4a4a'
  },
  rightEl: {
    fontSize: 13, 
    fontWeight: '700', 
    color: '#949494', 
    textAlign: 'right',
    minWidth: 200,
  },
  beautyProfileRightEl: {
    borderWidth: 1,
    borderColor: '#949494',
    marginTop: 15,
    marginBottom: 15,
    paddingTop: 3,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 3,
    backgroundColor: 'white',
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};
