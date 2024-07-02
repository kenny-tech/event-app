import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTab from './BottomTab';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          headerShown: true,
          headerTitle: '',
          headerShadowVisible: false,
          headerTitleStyle: {
            color: '#101010',
            fontSize: 20,
          },
          headerTitleAlign: 'center',
          contentStyle: {backgroundColor: 'white'},
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: true,
          headerTitle: '',
          headerTitleStyle: {
            color: '#101010',
            fontSize: 20,
          },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          contentStyle: {backgroundColor: 'white'},
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={BottomTab}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Nav;
