import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default {
  WINDOW_WIDTH: width,
  WINDOW_HEIGHT: height,
  FONT_SMALL: width * 0.043,
};
