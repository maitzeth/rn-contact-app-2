import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Vademecum} from '../screens/Vademecum';
import {Muestras} from '../screens/Muestras';
import {Details} from '../screens/Details';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Octicons';
import {theme} from '../utils/theme';
import Color from 'color';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = (route: string, color: string) => {
  let iconName;

  switch (route) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Muestras':
      iconName = 'repo';
      break;
    case 'Vademecum':
      iconName = 'book';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({color}) => screenOptions(route.name, color),
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarActiveBackgroundColor: Color(theme.theme.colors.primary)
            .alpha(0.8)
            .rgb()
            .string(),
          tabBarInactiveBackgroundColor: theme.theme.colors.primary,
          headerShown: false,
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
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
