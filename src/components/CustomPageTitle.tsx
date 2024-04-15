import {styled} from 'styled-components/native';
import {TypeTheme} from '../types';

export const PageTitle = styled.Text<TypeTheme>`
  font-weight: bold;
  font-size: ${props => props.theme.units.rem(4)};
  text-align: center;
  margin-top: ${props => props.theme.dimensions.vh(4)};
  color: ${props => props.theme.colors.black};
`;
