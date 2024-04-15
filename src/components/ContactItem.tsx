import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {styled} from 'styled-components/native';
import {TypeTheme} from '../types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {theme} from '../lib/theme';
import {Avatar} from '../components';

type Props = {
  imageUri: string | null;
  name: string;
  onPress: () => void;
};

export const ContactItem = ({imageUri, name, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Inner>
        <ContactInfo>
          <Avatar imageUri={imageUri} />
          <ContactName>{name}</ContactName>
        </ContactInfo>
        <View>
          <AntDesign
            name="right"
            size={20}
            color={theme.theme.colors.primary}
          />
        </View>
      </Inner>
    </TouchableOpacity>
  );
};

const Inner = styled.View<TypeTheme>`
  border-width: 0.5px;
  border-style: solid;
  border-color: ${props => props.theme.colors.gray};
  padding-top: ${props => props.theme.dimensions.vh(1.5)};
  padding-bottom: ${props => props.theme.dimensions.vh(1.5)};
  padding-left: ${props => props.theme.dimensions.vw(2)};
  padding-right: ${props => props.theme.dimensions.vw(2)};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const ContactInfo = styled.View<TypeTheme>`
  flex-direction: row;
  align-items: center;
  gap: ${props => props.theme.dimensions.vw(3)};
`;

const ContactName = styled.Text<TypeTheme>`
  font-size: ${props => props.theme.units.rem(0.85)};
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;
