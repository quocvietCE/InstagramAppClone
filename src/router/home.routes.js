import React from 'react';
import {Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

Ionicons.loadFont();
Feather.loadFont();

const HomeStack = createStackNavigator();

import logo from '../assets/images/logo.png';

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerLeft: () => <Feather name="camera" size={25} color="#000" />,
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRight: () => (
            <Ionicons name="paper-plane-outline" size={25} color="#545454" />
          ),
          headerTitle: () => (
            <Image
              source={logo}
              resizeMode="contain"
              style={{width: 135, height: 50}}
            />
          ),
          headerRightContainerStyle: {
            marginRight: 15,
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
