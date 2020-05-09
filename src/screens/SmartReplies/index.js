import React, {useEffect} from 'react';
import {View} from 'react-native';
import firebase from '@react-native-firebase/ml-natural-language';

function SmartReplies() {
  useEffect(handleMount, []);

  async function suggestReplies() {
    try {
      const replies = await firebase().suggestReplies([
        {text: 'Hey, long time no speak!'},
        {
          text: 'I know right, it has been a while..',
          userId: '123',
          isLocalUser: false,
        },
        {text: 'We should catchup some time!'},
        {
          text: 'Definitely, how about we go for lunch this week?',
          userId: '123',
          isLocalUser: false,
        },
      ]);

      console.log('replies =>', replies);
    } catch (e) {
      console.log('e =>', e);
    }
  }

  function handleMount() {
    suggestReplies();
  }

  return <View></View>;
}

export default SmartReplies;
