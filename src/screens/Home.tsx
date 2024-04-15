import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native';

export function Home({navigation}: any) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go Details"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  );
}
