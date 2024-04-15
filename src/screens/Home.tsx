import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export function Home({navigation}: any) {
  return (
    <View>
      <Text>Home</Text>
      <AntDesign name="customerservice" style={{
        color: 'red',
        fontSize: 50,
      }} />
      <AntDesign name="windows" style={{
        color: 'red',
        fontSize: 50,
      }} />
      <Button
        title="Go Details"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  );
}
