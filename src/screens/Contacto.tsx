import React from 'react';
import {View, Text, Button} from 'react-native';
import {styled} from 'styled-components/native';
import {TypeTheme} from '../types';

export function Contacto() {
  return (
    <StyledWrapper>
      <View>
        <StyledHeaderShape />
        <Text>Contacto</Text>
      </View>
      <StyledFooter>
        <Button title="Totono" />
      </StyledFooter>
    </StyledWrapper>
  );
}

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
  height: 100px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
`;
