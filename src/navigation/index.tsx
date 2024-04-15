import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Vademecum} from '../screens/Vademecum';
import {Muestras} from '../screens/Muestras';
import {Contacto} from '../screens/Contacto';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Octicons';
import {theme} from '../lib/theme';
import Color from 'color';
import {TypeTheme} from '../types';
import {styled} from 'styled-components/native';
import {tabHeaderTitles} from '../lib/constants';
import {IconButton} from '../components';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StyledHeaderWrapper = styled.View<TypeTheme>`
  display: flex;
  flex-direction: row;
  gap: ${props => props.theme.dimensions.vw(3)};
  align-items: center;
`;

const StyledHeaderText = styled.Text<TypeTheme>`
  font-weight: bold;
  color: ${props => props.theme.colors.white};
`;

const StyledRightWrapper = styled.View<TypeTheme>`
  margin-right: ${props => props.theme.dimensions.vh(1)};
`;

const iconResolver = (route: string, color: string) => {
  let iconName: string = 'circle';

  switch (route) {
    case 'Home': {
      iconName = 'home';
      break;
    }
    case 'Muestras': {
      iconName = 'repo';
      break;
    }
    case 'Vademecum': {
      iconName = 'book';
      break;
    }
    default: {
      break;
    }
  }

  return <Icon name={iconName} color={color} size={24} />;
};

function HeaderTitle(props: {children: string}) {
  const title = props.children;
  const icon = iconResolver(title, 'white');

  return (
    <StyledHeaderWrapper>
      {icon}
      <StyledHeaderText>
        {tabHeaderTitles[title as keyof typeof tabHeaderTitles]}
      </StyledHeaderText>
    </StyledHeaderWrapper>
  );
}

const HeaderRight = () => {
  return (
    <StyledRightWrapper>
      <IconButton>
        <Icon name="bell" size={14} color={theme.theme.colors.primary} />
      </IconButton>
    </StyledRightWrapper>
  );
};

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({color}) => iconResolver(route.name, color),
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarActiveBackgroundColor: Color(theme.theme.colors.primary)
            .alpha(0.8)
            .rgb()
            .string(),
          tabBarInactiveBackgroundColor: theme.theme.colors.primary,
          headerStyle: {
            backgroundColor: theme.theme.colors.primary,
          },
          headerTitle: HeaderTitle,
          headerRight: HeaderRight,
        };
      }}>
      <Tab.Screen name="Muestras" component={Muestras} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Vademecum" component={Vademecum} />
    </Tab.Navigator>
  );
}

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: theme.theme.colors.primary,
          },
        }}>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Contacto" component={Contacto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
