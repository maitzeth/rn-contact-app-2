import React, {useState} from 'react';
import {css, styled} from 'styled-components/native';
import {TypeTheme} from '../types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {theme} from '../lib/theme';

type Props = {
  imageUri: string | null;
};

export const Avatar = ({imageUri}: Props) => {
  const [isError, setIsError] = useState(false);

  return (
    <>
      {imageUri && imageUri.length > 0 && !isError ? (
        <StyledAvatar
          source={{
            uri: imageUri,
          }}
          onError={() => {
            setIsError(true);
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
    </>
  );
};

function avatarStyling() {
  return css<TypeTheme>`
    width: ${props => props.theme.dimensions.vw(15)};
    height: ${props => props.theme.dimensions.vw(15)};
    border-radius: ${props => props.theme.dimensions.vw(30)};
  `;
}

const StyledAvatar = styled.Image<TypeTheme>`
  ${avatarStyling()}
`;

const NoAvatar = styled.View<TypeTheme>`
  ${avatarStyling()}
  background-color: ${props => props.theme.colors.gray};
  justify-content: center;
  align-items: center;
`;
