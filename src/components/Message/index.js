import React from 'react';
import {View, Text, Image} from 'react-native';

import style from './style';

function Message(props) {
  return (
    <View style={style.container}>
      <Image
        style={style.icon}
        source={require('../../assets/icons/button.png')}
      />
      <Text style={style.label}>{props.children}</Text>
    </View>
  );
}

export default Message;
