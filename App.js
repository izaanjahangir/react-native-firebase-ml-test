import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import FaceDetection from './src/screens/FaceDetection';

const App = () => {
  console.disableYellowBox = true;

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <FaceDetection />
      </SafeAreaView>
    </>
  );
};

export default App;
