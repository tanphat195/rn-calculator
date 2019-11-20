import React from 'react';
import { View, Text} from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CalculatorScreen from '../screens/CalculatorScreen';
import HistoryScreen from '../screens/HistoryScreen';

const RootStack = createStackNavigator(
  {
    Calculator: CalculatorScreen,
    History: HistoryScreen,
  },
);



export default createAppContainer(RootStack);