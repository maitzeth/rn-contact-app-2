import React from 'react';
import {View} from 'react-native';
import {css, styled} from 'styled-components/native';
import {TypeTheme} from '../types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {theme} from '../lib/theme';

type Props = {
  imageUri: string | null;
  name: string;
};

export const ContactItem = ({imageUri, name}: Props) => {
  return (
    <Wrapper>
      <ContactInfo>
        {imageUri ? (
          <Avatar
            source={{
              uri: imageUri,
            }}
            onError={() => {
              console.log(name);
            }}
          />
        ) : (
          <NoAvatar>
            <AntDesign
              name="disconnect"
              size={28}
              color={theme.theme.colors.white}
            />
          </NoAvatar>
        )}
        <ContactName>{name}</ContactName>
      </ContactInfo>
      <View>
        <AntDesign name="right" size={20} color={theme.theme.colors.primary} />
      </View>
    </Wrapper>
  );
};

function avatarStyling() {
  return css<TypeTheme>`
    width: ${props => props.theme.dimensions.vw(15)};
    height: ${props => props.theme.dimensions.vw(15)};
    border-radius: ${props => props.theme.dimensions.vw(30)};
  `;
}

const Wrapper = styled.View<TypeTheme>`
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

const Avatar = styled.Image<TypeTheme>`
  ${avatarStyling()}
`;

const ContactName = styled.Text<TypeTheme>`
  font-size: ${props => props.theme.units.rem(0.85)};
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;

const NoAvatar = styled.View<TypeTheme>`
  ${avatarStyling()}
  background-color: ${props => props.theme.colors.gray};
  justify-content: center;
  align-items: center;
`;
