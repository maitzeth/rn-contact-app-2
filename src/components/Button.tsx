import React from 'react';
import {styled} from 'styled-components/native';
import {TypeTheme} from '../types';

type Props = {
  text: string;
  onPress?: () => void;
};

export const Button = ({text, onPress}: Props) => {
  return (
    <ButtonWrapper onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.TouchableOpacity<TypeTheme>`
  background-color: ${props => props.theme.colors.primary};
  width: 100%;
  padding: ${props => props.theme.units.rem(0.65)};
  border-radius: ${props => props.theme.units.rem(4)};
`;

const ButtonText = styled.Text<TypeTheme>`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.units.rem(0.95)};
  font-weight: bold;
  text-align: center;
`;
