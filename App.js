import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoomList from './RoomList'
import CheckList from './CheckList'

const Stack = createNativeStackNavigator();

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="RoomList"
          component={RoomList}
        />
        <Stack.Screen
          name="CheckList"
          component={CheckList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;
