import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SighUp from '..screens/SighUp';
import HomePage from '..screens/HomePage'; // Import your screen components
import LogIn from '../screens/LogIn';
import seller from '../screens/Seller';
import Transport from '../screens/Transpot';

const Stack = createStackNavigator();

const homeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="LogInPage" component={LogIn} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SighUp" component={SighUp} />
        <Stack.Screen name="seller" component={seller} />
        <Stack.Screen name="Transport" component={Transport} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default homeStack;
