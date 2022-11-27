import React from 'react';
import {StyleSheet,Image,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from '../screens/HomeScreen';
import BasketScreen from '../screens/BasketScreen';
import CustomerProfile from '../screens/CustomerProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = ({navigation}) => {
  return (
  <Tab.Navigator 
  screenOptions={{ headerShown: false}}
  >
      <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        tabBarLabel: ({focused, color}) => (
          <Text style={{color: focused ? '#388E3C' : color, fontSize: 12}}>Home</Text>
        ),
        tabBarIcon: ({ focused}) => (
          <Image
              source={
                focused
                  ? require ('../assets/homegreen.png')
                  : require('../assets/home.png')
              }
              style={{
                width: 30,
                height: 30,
              }}
            />
        )
      }}
    />
    <Tab.Screen 
      name="Basket" 
      component={BasketScreen} 
      options={{
        tabBarLabel: ({focused, color}) => (
          <Text style={{color: focused ? '#388E3C' : color, fontSize: 12}}>Basket</Text>
        ),
        tabBarIcon: ({ focused}) => (
          <Image
              source={
                focused
                  ? require ('../assets/basketgreen.png')
                  : require('../assets/basket.png')
              }
              style={{
                width: 30,
                height: 30,
              }}
            />
        )
      }}
    />
    <Tab.Screen 
      name="Profile" 
      component={CustomerProfile} 
      options={{
        tabBarLabel: ({focused, color}) => (
          <Text style={{color: focused ? '#388E3C' : color, fontSize: 12}}>Account</Text>
        ),
        tabBarIcon: ({ focused}) => (
          <Image
              source={
                focused
                  ? require ('../assets/accountgreen.png')
                  : require('../assets/account.png')
              }
              style={{
                width: 30,
                height: 30,
              }}
            />
        )
      }}
    />
  </Tab.Navigator>
  
  );
}

export default BottomNavigation;
