import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import LandmarkRecognition from './src/screens/LandmarkRecognition';

const App = () => {
  console.disableYellowBox = true;

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <LandmarkRecognition />
      </SafeAreaView>
    </>
  );
};

export default App;
