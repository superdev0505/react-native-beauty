
import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Drawer } from 'native-base';
import { Router, Scene, Actions } from 'react-native-router-flux';

import { closeDrawer } from './actions/drawer';
import Login from './components/login/';
import Landing from './components/landing/';
import Register from './components/register/';
import Home from './components/home/';
import Product from './components/product/';
import ClaimReward from './components/claimReward/';
import Account from './components/account/';
import Cart from './components/cart/';
import Admin from './components/admin/';
import MyOrder from './components/myOrder/';
import Compare from './components/compare';
import Nail from './components/nail';
import Shipping from './components/shipping/';
import Community from './components/community';
import Consultant from './components/consultant';
import Settings from './components/settings/';
import ReviewMyFavorite from './components/reviewMyFavorite';
import VirtualMakeOver from './components/virtualMakeOver/';
import ReadyToApply from './components/readyToApply';
import ShoppingList from './components/shoppingList';
import NotificationSettings from './components/notificationSettings/';
import Track from './components/track/';
import Profile from './components/profile/';
import BeautyProfile from './components/beautyProfile';
import BeautyProfileNext from './components/beautyProfileNext';
import PurchaseProfile from './components/purchaseProfile';
import Notification from './components/notification/';
import Payment from './components/payment/';
import SideBar from './components/sideBar';
import PropTypes from 'prop-types';
import LookDetails from './components/lookDetails';
import { statusBarColor } from './themes/base-theme';

const RouterWithRedux = connect()(Router);



class AppNavigator extends Component {
  static propTypes = {
    drawerState: PropTypes.string,
    closeDrawer: PropTypes.func,
  }

  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer._root.close();
    }
  }
  openDrawer() {
    this._drawer._root.open();
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }


  render() { // eslint-disable-line class-methods-use-this
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        type="overlay"
        tweenDuration={150}
        content={<SideBar  navigator={this._navigator} />}
        tapToClose
        acceptPan={false}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },
        }}
        tweenHandler={(ratio) => {  //eslint-disable-line
          return {
            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
          };
        }}
        negotiatePan
        tweenHandler={ratio => ({
          main: { opacity: (2 - ratio) / 2 },
        })}
      >
        <StatusBar
          backgroundColor={statusBarColor}
          barStyle="light-content"
        />
        <RouterWithRedux>
          <Scene key="root">
            <Scene
              key="landing" component={Landing} hideNavBar  
              initial={(Platform.OS == 'android') ? false : true}
            />
            <Scene key="login" component={Login} hideNavBar/>
            <Scene key="admin" component={Admin} hideNavBar/>
            <Scene
              key="register" component={Register} hideNavBar />
            <Scene key="cart" component={Cart} hideNavBar />
            <Scene key="claimReward" component={ClaimReward} hideNavBar />
            <Scene key="shipping" component={Shipping} />
            <Scene key="virtualMakeOver" component={VirtualMakeOver}  hideNavBar />
            <Scene key="home" component={Home} hideNavBar />
            <Scene key="community" component={Community} hideNavBar  />
            <Scene key="compare" component={Compare} hideNavBar />
            <Scene key="lookDetails" component={LookDetails} hideNavBar />
            <Scene key="product" component={Product} hideNavBar />
            <Scene key="shoppingList" component={ShoppingList} hideNavBar />
            <Scene key="consultant" component={Consultant} hideNavBar />
            <Scene key="myOrder" component={MyOrder} hideNavBar />
            <Scene key="purchaseProfile"  component={PurchaseProfile} hideNavBar />
            <Scene key="notificationSettings" component={NotificationSettings} hideNavBar />
            <Scene key="settings" component={Settings} hideNavBar />
            <Scene key="nail" component={Nail} hideNavBar />
            <Scene key="readyToApply" component={ReadyToApply} hideNavBar  />
            <Scene key="account" component={Account} hideNavBar />
            <Scene key="reviewMyFavorite" component={ReviewMyFavorite} hideNavBar />
            <Scene key="profile" component={Profile} hideNavBar />
            <Scene key="beautyProfile" component={BeautyProfile} hideNavBar />
            <Scene key="beautyProfileNext" component={BeautyProfileNext} hideNavBar />
            <Scene key="track" component={Track} hideNavBar />
            <Scene key="notification" component={Notification} hideNavBar />
            <Scene key="payment" component={Payment} />
          </Scene>
        </RouterWithRedux>
      </Drawer>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
});


export default connect(mapStateToProps, bindAction)(AppNavigator);
