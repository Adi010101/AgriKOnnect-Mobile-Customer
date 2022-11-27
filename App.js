/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component}  from 'react';
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Button} from 'react-native';
import BottomNavigation from './components/BottomNavigation';
import Login from './screens/Login';
import Register from './screens/Register';
import Vegetables from './screens/Categories/Vegetables';
import Fruits from './screens/Categories/Fruits';
import Sale from './screens/Categories/Sale';
import FreeDelivery from './screens/Categories/FreeDelivery';
import ProductDetails from './screens/ProductDetails';
import ProductReviews from './screens/ProductReviews';
import CheckoutForm from './screens/CheckoutForm';
import ShippingAddress from './screens/ShippingAddress';
import EditAddress from './screens/EditAddress';
import AddAddress from './screens/AddAddress';
import EditCustomerProfile from './screens/EditCustomerProfile';
import ToPay from './screens/ToPay';
import ToReceive from './screens/ToReceive';
import ToReview from './screens/ToReview';
import WriteReview from './screens/WriteReview';
import RecentTransactions from './screens/RecentTransactions';
import Discount from './screens/Discounts';
import OrderReviews from './screens/OrderReviews';
import SearchScreen from './screens/SearchScreen';

const Stack = createNativeStackNavigator();

export default class AgriKOnnectApp extends Component {
  render(){ 
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen name="Login" component={ Login } options = {{
                headerShown: false }} />
          <Stack.Screen name="Register" component={ Register } options = {{
                headerShown: false }} />
          <Stack.Screen name="BottomNavigation" component={ BottomNavigation } options = {{ 
            headerShown: false,
          }} />
          <Stack.Screen name="Vegetables" component={ Vegetables } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="Fruits" component={ Fruits } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="Sale" component={ Sale } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="Free Delivery" component={ FreeDelivery } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="Product Details" component={ ProductDetails } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="ProductReviews" component={ ProductReviews } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="CheckoutForm" component={ CheckoutForm } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="ShippingAddress" component={ ShippingAddress } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="EditAddress" component={ EditAddress} options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="AddAddress" component={ AddAddress} options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="EditCustomerProfile" component={ EditCustomerProfile } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="ToPay" component={ ToPay } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="ToReceive" component={ ToReceive } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="ToReview" component={ ToReview } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="WriteReview" component={ WriteReview } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="RecentTransactions" component={ RecentTransactions } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="Discounts" component={ Discount } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="OrderReviews" component={ OrderReviews } options = {{ 
            headerShown: false
          }} />
          <Stack.Screen name="SearchScreen" component={ SearchScreen } options = {{ 
            headerShown: false
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
