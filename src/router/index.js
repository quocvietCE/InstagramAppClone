import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './bottomHomeNavigation.routes';
import StoryScreen from '../screens/StoryScreen';

const RootStack = createStackNavigator();

const RootRouter = () => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen
        name={'Home'}
        component={BottomNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="StoryScreen"
        component={StoryScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);
export default RootRouter;
