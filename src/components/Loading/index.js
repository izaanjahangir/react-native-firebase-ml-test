import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import style from './style';

function Loading(props) {
  return (
    <View style={style.container}>
      <View style={style.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text style={style.label}>{props.children}</Text>
      </View>
    </View>
  );
}

export default Loading;
