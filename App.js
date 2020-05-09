import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import ImageLabelling from './src/screens/ImageLabelling';

const App = () => {
  console.disableYellowBox = true;

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ImageLabelling />
      </SafeAreaView>
    </>
  );
};

export default App;
