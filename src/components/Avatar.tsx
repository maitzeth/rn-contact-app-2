import React, {useState} from 'react';
import {css, styled} from 'styled-components/native';
import {TypeTheme} from '../types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {theme} from '../lib/theme';

const contexts = {
  default: 'default',
  contact: 'contact',
} as const;

type Props = {
  imageUri: string | null;
  context?: keyof typeof contexts;
};

export const Avatar = ({imageUri, context = 'default'}: Props) => {
  const [isError, setIsError] = useState(false);

  return (
    <>
      {imageUri && imageUri.length > 0 && !isError ? (
        <StyledAvatar
          $context={context}
          source={{
            uri: imageUri,
          }}
          onError={() => {
            setIsError(true);
          }}
        />
      ) : (
        <NoAvatar $context={context}>
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

type StylingProps = TypeTheme & {
  $context: keyof typeof contexts;
};

function contextSizeStyles(context: keyof typeof contexts) {
  if (context === contexts.default) {
    return css<TypeTheme>`
      width: ${props => props.theme.dimensions.vw(15)};
      height: ${props => props.theme.dimensions.vw(15)};
      border-radius: ${props => props.theme.dimensions.vw(30)};
    `;
  }

  if (context === contexts.contact) {
    return css<TypeTheme>`
      width: ${props => props.theme.dimensions.vw(30)};
      height: ${props => props.theme.dimensions.vw(30)};
      border-radius: ${props => props.theme.dimensions.vw(60)};
      border-width: 4px;
      border-color: white;
    `;
  }

  return css``;
}

const StyledAvatar = styled.Image<StylingProps>`
  ${props => contextSizeStyles(props.$context)}
`;

const NoAvatar = styled.View<StylingProps>`
  ${props => contextSizeStyles(props.$context)}
  background-color: ${props => props.theme.colors.gray};
  justify-content: center;
  align-items: center;
`;
