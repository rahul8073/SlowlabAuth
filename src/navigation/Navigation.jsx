import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../components/Login';

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
    </Stack.Navigator>
  );
}
