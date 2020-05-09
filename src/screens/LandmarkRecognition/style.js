import {StyleSheet} from 'react-native';
import constants from '../../config/constants';

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
    position: 'relative',
  },
  overlapContainer: {
    position: 'absolute',
    top: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingBottom: 20,
  },
  image: {
    height: constants.WINDOW_HEIGHT,
  },
});
