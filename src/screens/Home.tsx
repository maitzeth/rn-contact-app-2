import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {useUsers} from '../api';
import {ContactItem, BasicError} from '../components';
import {StackScreens} from '../types';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  StackScreens,
  'Tabs'
>;

export function Home() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const {data, isLoading, error} = useUsers();

  if (isLoading) {
    return (
      <StyledActivity>
        <ActivityIndicator />
      </StyledActivity>
    );
  }

  const handlePressContact = (id: number) => {
    navigation.navigate('Contacto', {
      contactId: id,
    });
  };

  return (
    <StyledContainer $isCentered={Boolean(error)}>
      {data ? (
        <FlatList
          data={data.users}
          renderItem={({item}) => {
            return (
              <ContactItem
                imageUri={item.photo}
                name={`${item.name} ${item.surnames}`}
                onPress={() => handlePressContact(item.contactId)}
              />
            );
          }}
          keyExtractor={item => `${item.contactId}`}
        />
      ) : (
        <BasicError />
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled.View<{$isCentered: boolean}>`
  flex: 1;
  ${props =>
    props.$isCentered &&
    `
    justify-content: center;
    align-items: center;
  `}
`;

const StyledActivity = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
