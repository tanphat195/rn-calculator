import React from 'react';
import { View, Text} from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CalculatorScreen from '../screens/CalculatorScreen';

const RootStack = createStackNavigator(
  {
    Calculator: CalculatorScreen,
  },
);



export default createAppContainer(RootStack);