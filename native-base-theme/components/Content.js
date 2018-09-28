import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const contentTheme = {
      '.padder': {
        padding: variables.contentPadding,
        backgroundColor: '#EBEBEB',
      },
      flex: 1,
      'NativeBase.Segment': {
        borderWidth: 0,
        backgroundColor: 'transparent'
      }
  };

  return contentTheme;
};
