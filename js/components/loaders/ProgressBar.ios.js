
import React, { Component } from 'react';
import { ProgressViewIOS } from 'react-native';
export default class ProgressBar extends Component {
  render() {

   return (
     <ProgressViewIOS
      {...this.props}
       style={{ flex: 1 }}
       progress={this.props.progress ? this.props.progress / 100 : 0.5}
       progressTintColor={this.props.color ? this.props.color  : "black"}
       trackTintColor="rgba(255,255,255,0.7)"
     />
   );
 }
}
