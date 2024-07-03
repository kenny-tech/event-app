import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"; 

import Home from '../screens/Home';
import Company from '../screens/Company';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontFamily: 'Montserrat_600SemiBold',
            fontSize: 12,
            lineHeight: 18,
          },
          headerTitle: 'Home',
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
              <Ionicons name="home" size={20} color={tabInfo.focused ? "#0000ff" : "#8e8e93"}  />
            ); 
          }, 
          tabBarActiveTintColor: '#0000FF',
          tabBarInactiveTintColor: '#9199AB',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Company"
        component={Company}
        options={{
          tabBarLabel: 'Company',
          tabBarLabelStyle: {
            fontFamily: 'Montserrat_600SemiBold',
            fontSize: 12,
            lineHeight: 18,
          },
          headerTitle: 'Company',
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
              <Ionicons name="add-circle" size={20} color={tabInfo.focused ? "#0000ff" : "#8e8e93"} />
            ); 
          }, 
          tabBarActiveTintColor: '#0000FF',
          tabBarInactiveTintColor: '#9199AB',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
