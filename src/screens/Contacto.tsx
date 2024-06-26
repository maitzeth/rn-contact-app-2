import React from 'react';
import {View, ActivityIndicator, Linking, Alert} from 'react-native';
import {styled} from 'styled-components/native';
import {TypeTheme, StackScreens} from '../types';
import {
  Avatar,
  BasicError,
  IconButton,
  TwoSidedInfoDisplayer,
  Button,
} from '../components';
import {useUser} from '../api';
import {theme} from '../lib/theme';
import {useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicos from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatDefaultReadableDate} from '../lib/dates';
import {GenderTranslationMap, DEFAULT_ERROR_MSG} from '../lib/constants';

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

  const handleOpenLink = async (source: string) => {
    try {
      const response = await Linking.openURL(source);

      if (!response) {
        Alert.alert(DEFAULT_ERROR_MSG);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      } else {
        Alert.alert(DEFAULT_ERROR_MSG);
      }
    }
  };

  return (
    <StyledWrapper>
      {data ? (
        <>
          <View>
            <StyledHeaderShape />
            <StyledContent>
              <StyledHeader>
                <Avatar context="contact" imageUri={data?.photo} />
                <StyledTitle>{`${data.name} ${data.surnames}`}</StyledTitle>
                <StyledIconsWrapper>
                  <IconButton styled="primary">
                    <Feather
                      onPress={() => handleOpenLink(`tel:${data.phone}`)}
                      size={15}
                      name="phone"
                      color={theme.theme.colors.white}
                    />
                  </IconButton>
                  <IconButton
                    styled="primary"
                    onPress={() => handleOpenLink(`mailto:${data.email}`)}>
                    <FontAwesome
                      size={15}
                      name="envelope-o"
                      color={theme.theme.colors.white}
                    />
                  </IconButton>
                  <IconButton styled="primary">
                    <FontAwesome
                      size={15}
                      name="whatsapp"
                      color={theme.theme.colors.white}
                      onPress={() => {
                        const helloMsg = encodeURIComponent('Hello there');
                        handleOpenLink(
                          `whatsapp://send?text=${helloMsg}&phone=${data.phone}`,
                        );
                      }}
                    />
                  </IconButton>
                </StyledIconsWrapper>
              </StyledHeader>
            </StyledContent>
            <View>
              <TwoSidedInfoDisplayer
                icon={
                  <Ionicos
                    name="calendar-clear-outline"
                    size={18}
                    color={theme.theme.colors.black}
                  />
                }
                title="Fecha de Nacimiento"
                content={formatDefaultReadableDate(data.birthDate)}
              />
              <TwoSidedInfoDisplayer
                icon={
                  <MaterialCommunityIcons
                    name="gender-male-female"
                    size={18}
                    color={theme.theme.colors.black}
                  />
                }
                title="Género"
                content={
                  GenderTranslationMap[
                    data.gender as keyof typeof GenderTranslationMap
                  ]
                }
              />
              <TwoSidedInfoDisplayer
                icon={
                  <MaterialCommunityIcons
                    name="briefcase-variant"
                    size={18}
                    color={theme.theme.colors.black}
                  />
                }
                title="Profesión"
                content={data.profesion}
              />
            </View>
          </View>
          <StyledFooter>
            <Button text="Eliminar de mi lista" />
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
  padding-bottom: ${props => props.theme.dimensions.vh(10)};
  border-bottom-width: 0.8px;
  border-color: ${props => props.theme.colors.gray};
`;

const StyledHeader = styled.View<TypeTheme>`
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.Text<TypeTheme>`
  font-size: ${props => props.theme.units.rem(1.5)};
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;

const StyledIconsWrapper = styled.View<TypeTheme>`
  flex-direction: row;
  gap: ${props => props.theme.dimensions.vw(2)};
  margin-top: ${props => props.theme.dimensions.vh(2)};
`;
