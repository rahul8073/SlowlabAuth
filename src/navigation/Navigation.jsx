import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../components/Login';
import Forgot from '../components/Forgot';
import VerifyPass from '../components/VerifyPass';
import ResetPass from '../components/ResetPass';
import SignUp from '../components/Signup';

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
      <Stack.Screen
        name="login-forgot password"
        options={{headerShown: false}}
        component={Forgot}
      />
      <Stack.Screen
        name="login-otp"
        options={{headerShown: false}}
        component={VerifyPass}
      />
      <Stack.Screen
        name="login-reset password"
        options={{headerShown: false}}
        component={ResetPass}
      />
      <Stack.Screen
        name="SignUp"
        options={{headerShown: false}}
        component={SignUp}
      />
    </Stack.Navigator>
  );
}
