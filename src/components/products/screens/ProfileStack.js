import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Profile from './Profile';
import CartHistory from './CartHistory';
import EditProfile from './EditProfile';

export default function ProfileStack  ()  {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="CartHistory" component={CartHistory} />
      </Stack.Navigator>
    )
}

