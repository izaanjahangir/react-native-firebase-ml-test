import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import style from './style';

function Button(props) {
  return (
    <TouchableOpacity style={[style.container, props.style]} onPress={props.onPress}>
      <Text style={style.label}>{props.children}</Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  onPress: function () {},
};

export default Button;
