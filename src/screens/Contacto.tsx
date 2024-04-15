import React from 'react';
import {View, Button} from 'react-native';
import {styled} from 'styled-components/native';
import {TypeTheme} from '../types';
import {Avatar} from '../components';

export function Contacto() {
  return (
    <StyledWrapper>
      <View>
        <StyledHeaderShape />
        <StyledContent>
          <StyledHeader>
            <Avatar
              context="contact"
              imageUri="https://www.clarin.com/img/2022/05/02/es-de-las-pocas-divas___jaXKnyR7D_340x340__1.jpg"
            />
          </StyledHeader>
        </StyledContent>
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
