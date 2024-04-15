import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import {useUsers} from '../api';
import {ContactItem} from '../components';
import {theme} from '../lib/theme';
import {TypeTheme, StackScreens} from '../types';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
    navigation.navigate('Details', {
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
        <StyledErrorWrapper>
          <AntDesign name="meh" size={80} color={theme.theme.colors.primary} />
          <StyledMessage>Sucedio un error, intenta de nuevo</StyledMessage>
        </StyledErrorWrapper>
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

const StyledMessage = styled.Text<TypeTheme>`
  font-size: ${props => props.theme.units.rem(2)};
  color: ${props => props.theme.colors.primary};
  text-align: center;
`;

const StyledErrorWrapper = styled.View<TypeTheme>`
  padding-left: ${props => props.theme.dimensions.vw(1)};
  padding-right: ${props => props.theme.dimensions.vw(1)};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
