import React from 'react';
import {SafeAreaView, ScrollView, View, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
