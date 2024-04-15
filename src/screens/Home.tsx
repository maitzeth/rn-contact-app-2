import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useUsers} from '../api';
import styled from 'styled-components/native';
import {TypeTheme} from '../types';

// function TabLayout({ children }: any) {

// }

// const Container = styled.View<TypeTheme>`
//   background-color: ${}
// `;

export function Home({navigation}: any) {
  const { data, isLoading } = useUsers();
  console.log(data?.users.length);
  return (
    <View>
      <Text>Home</Text>
      {/* <AntDesign name="customerservice" style={{
        color: 'red',
        fontSize: 50,
      }} />
      <AntDesign name="windows" style={{
        color: 'red',
        fontSize: 50,
      }} /> */}
      <Button
        title="Go Details"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  );
}
