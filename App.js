import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoomList from './RoomList'
import CheckList from './CheckList'
import RoomMade from './RoomMade'

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
        <Stack.Screen
          name="RoomMade"
          component={RoomMade}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;
