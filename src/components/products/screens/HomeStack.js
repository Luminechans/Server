import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './Home';
import Detail from './Detail';

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})
