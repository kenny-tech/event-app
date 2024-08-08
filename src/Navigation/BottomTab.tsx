import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"; 

import Feed from '../screens/Feed';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarLabelStyle: {
            fontFamily: 'Montserrat_600SemiBold',
            fontSize: 12,
            lineHeight: 18,
          },
          headerTitle: 'Feed',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#101010',
            fontSize: 20,
          },
          tabBarIcon: (tabInfo) => { 
            return ( 
              <Ionicons name="home" size={20} color={tabInfo.focused ? "#c4302b" : "#8e8e93"}  />
            ); 
          }, 
          tabBarActiveTintColor: '#c4302b',
          tabBarInactiveTintColor: '#9199AB',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            fontFamily: 'Montserrat_600SemiBold',
            fontSize: 12,
            lineHeight: 18,
          },
          headerTitle: 'Profile',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#101010',
            fontSize: 20,
          },
          tabBarIcon: (tabInfo) => { 
            return ( 
              <Ionicons name="person" size={20} color={tabInfo.focused ? "#c4302b" : "#8e8e93"} />
            ); 
          }, 
          tabBarActiveTintColor: '#c4302b',
          tabBarInactiveTintColor: '#9199AB',
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
