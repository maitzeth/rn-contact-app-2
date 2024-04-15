import React from 'react';
import {View, Button, ActivityIndicator} from 'react-native';
import {styled} from 'styled-components/native';
import {TypeTheme, StackScreens} from '../types';
import {Avatar, BasicError} from '../components';
import {useUser} from '../api';
import {theme} from '../lib/theme';
import {useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';

type ContactScreenProps = RouteProp<StackScreens, 'Contacto'>;

export function Contacto() {
  const route = useRoute<ContactScreenProps>();
  const {data, isLoading} = useUser(route.params.contactId);

  if (isLoading) {
    return (
      <StyledContainer>
        <ActivityIndicator size="large" color={theme.theme.colors.primary} />
      </StyledContainer>
    );
  }

  return (
    <StyledWrapper>
      {data ? (
        <>
          <View>
            <StyledHeaderShape />
            <StyledContent>
              <StyledHeader>
                <Avatar context="contact" imageUri={data?.photo} />
              </StyledHeader>
            </StyledContent>
          </View>
          <StyledFooter>
            <Button title="Totono" />
          </StyledFooter>
        </>
      ) : (
        <BasicError />
      )}
    </StyledWrapper>
  );
}

const StyledContainer = styled.View<TypeTheme>`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.View<TypeTheme>`
  flex: 1;
  justify-content: space-between;
  padding-bottom: ${props => props.theme.dimensions.vh(3)};
`;

const StyledFooter = styled.View<TypeTheme>`
  padding-left: ${props => props.theme.dimensions.vw(8)};
  padding-right: ${props => props.theme.dimensions.vw(8)};
`;

const StyledHeaderShape = styled.View<TypeTheme>`
  background-color: ${props => props.theme.colors.primary};
  height: ${props => props.theme.dimensions.vh(12)};
  border-bottom-left-radius: ${props => props.theme.dimensions.vh(9)};
  border-bottom-right-radius: ${props => props.theme.dimensions.vh(9)};
`;

const StyledContent = styled.View<TypeTheme>`
  margin-top: -${props => props.theme.dimensions.vh(8)};
`;

const StyledHeader = styled.View<TypeTheme>`
  align-items: center;
  justify-content: center;
`;
