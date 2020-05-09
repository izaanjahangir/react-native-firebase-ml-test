import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './src/screens/Home';

const App = () => {
  console.disableYellowBox = true;

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
