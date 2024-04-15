import React from 'react';
import {styled} from 'styled-components/native';
import {TypeTheme} from '../types';

type Props = {
  title: string;
  icon: React.ReactNode;
  content: string;
};

export const TwoSidedInfoDisplayer = ({title, icon, content}: Props) => {
  return (
    <StyledTwoSidedInfoDisplayer>
      <StyledLeftSide>
        {icon}
        <StyledTitle>{title}</StyledTitle>
      </StyledLeftSide>
      <StyledContentText>{content}</StyledContentText>
    </StyledTwoSidedInfoDisplayer>
  );
};

const StyledTwoSidedInfoDisplayer = styled.View<TypeTheme>`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 0.9px;
  border-color: ${props => props.theme.colors.gray};
  padding-top: ${props => props.theme.dimensions.vh(2)};
  padding-bottom: ${props => props.theme.dimensions.vh(2)};
  padding-left: ${props => props.theme.dimensions.vh(2)};
  padding-right: ${props => props.theme.dimensions.vh(2)};
  align-items: center;
`;

const StyledLeftSide = styled.View<TypeTheme>`
  flex-direction: row;
  gap: ${props => props.theme.dimensions.vw(2)};
  align-items: center;
`;

const StyledTitle = styled.Text<TypeTheme>`
  font-weight: bold;
  font-size: ${props => props.theme.units.rem(0.85)};
  color: ${props => props.theme.colors.black};
`;

const StyledContentText = styled.Text<TypeTheme>`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.units.rem(0.75)};
  text-transform: uppercase;
`;
