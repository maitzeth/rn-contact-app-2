import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import {theme} from '../lib/theme';
import {TypeTheme} from '../types';

export const BasicError = () => {
  return (
    <StyledErrorWrapper>
      <AntDesign name="meh" size={80} color={theme.theme.colors.primary} />
      <StyledMessage>Sucedio un error, intenta de nuevo</StyledMessage>
    </StyledErrorWrapper>
  );
};

const StyledErrorWrapper = styled.View<TypeTheme>`
  padding-left: ${props => props.theme.dimensions.vw(1)};
  padding-right: ${props => props.theme.dimensions.vw(1)};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const StyledMessage = styled.Text<TypeTheme>`
  font-size: ${props => props.theme.units.rem(2)};
  color: ${props => props.theme.colors.primary};
  text-align: center;
`;
