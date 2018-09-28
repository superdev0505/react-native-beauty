

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
  header: {
  	backgroundColor: '#eeeeee',
  	paddingLeft: 30,
  	paddingTop: 12,
  	fontSize: 15,
  	fontWeight: '700',
  	textAlign: 'left',
  	paddingBottom: 12,
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
  	borderTopColor: '#4a4a4a',
  	borderTopWidth: 1,
  	paddingBottom: 15,
  },
  contentIcon: {
  	color: '#4a4a4a',
  	width: 30
  },
  headerTitle: {
    marginTop: 60,
    color: '#c34097', 
    fontSize: 24, 
    fontWeight:'700', 
    textAlign: 'center'
  },
  claimContent: {
    color: '#949494',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginTop: 5,
    textAlign: 'center'
  },
  claimWord: {
    marginTop: 15,
    color: '#4a4a4a',
    fontSize: 18,
    fontWeight: '700'
  },
  rewardName: {
    color: '#4a4a4a',
    fontSize: 14,
    fontWeight: '700'
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
  claimButton: {
    marginTop: 10,
    backgroundColor:'#c34097',
    width: 120,
    height: 50,
    alignItems: "center",
    borderRadius: 0,
    justifyContent: "center",
    flexDirection: "column"
  },
  claimButtonText: {
    color: '#fff',
    textAlign: "center",
    fontWeight: '700',
    fontSize: 14
  },
  beautyContentItem: {
    marginLeft: 0,
    marginRight: 0
  },
  basicContentItem: {
  	marginLeft: 40,
  	marginRight: 40,
  	borderBottomColor: '#949494',
  	paddingLeft: 15,
  	paddingRight: 15,
  },
  contentClaim: {
    marginLeft: 0,
    marginRight: 0,
    borderBottomColor: '#eee',
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
  },
};
