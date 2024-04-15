import React from 'react';
import {styled} from 'styled-components/native';
import {TypeTheme} from '../types';

const btnStyles = {
  default: 'default',
  primary: 'primary',
} as const;

type Props = React.PropsWithChildren<{
  onPress?: () => void;
  styled?: keyof typeof btnStyles;
}>;

export const IconButton = ({children, onPress, styled = 'default'}: Props) => {
  return (
    <StyledButton onPress={onPress} $styled={styled}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity<
  TypeTheme & {
    $styled?: keyof typeof btnStyles;
  }
>`
  width: ${props => props.theme.dimensions.vw(7)};
  height: ${props => props.theme.dimensions.vw(7)};
  border-radius: ${props => props.theme.dimensions.vw(7)};
  background-color: ${props =>
    props.$styled === 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.white};
  align-items: center;
  justify-content: center;
`;
