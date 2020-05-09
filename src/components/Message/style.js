import {StyleSheet} from 'react-native';

import constants from '../../config/constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f6fa',
    padding: 10,
    width: "100%"
  },
  icon: {
    width: constants.WINDOW_WIDTH * 0.07,
    height: constants.WINDOW_WIDTH * 0.07,
    marginRight: 10,
  },
  label: {
    fontSize: constants.FONT_SMALL,
  },
});
