import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SmartReplies from './src/screens/SmartReplies';

const App = () => {
  console.disableYellowBox = true;

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <SmartReplies />
      </SafeAreaView>
    </>
  );
};

export default App;
