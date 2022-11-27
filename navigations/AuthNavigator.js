import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
// Navigator,screen,group

export default function AuthNavigator() {
    console.log(Stack);
  return (
      <Stack.Navigator>
          <Stack.Screen name="Register" options={{headerShown:false}} component={Register} />
          <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
          <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
      </Stack.Navigator>
  )
}
