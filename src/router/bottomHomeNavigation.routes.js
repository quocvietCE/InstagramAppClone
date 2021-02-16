import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

Ionicons.loadFont();
Foundation.loadFont();
Feather.loadFont();
AntDesign.loadFont();

import HomeRoutes from './home.routes';

import DiscoveryScreen from '../screens/DiscoveryScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: 'gray',
      style: {
        justifyContent: 'center',
        backgroundColor: '#FFF',
        elevation: 2,
      },
      showLabel: false,
    }}>
    <Tab.Screen
      name="HomeScreen"
      component={HomeRoutes}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <Foundation name="home" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="DiscoveryScreen"
      component={DiscoveryScreen}
      options={{
        tabBarLabel: 'Discovery',
        tabBarIcon: ({color, size}) => (
          <Feather name="search" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="PostScreen"
      component={CreatePostScreen}
      options={{
        tabBarLabel: 'Post',
        tabBarIcon: ({color, size}) => (
          <Feather name="plus-square" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="NotificationsScreen"
      component={NotificationsScreen}
      options={{
        tabBarLabel: 'Notifications',
        tabBarIcon: ({color, size}) => (
          <AntDesign name="hearto" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="person-outline" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomNavigator;
