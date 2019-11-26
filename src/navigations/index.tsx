import { createAppContainer } from 'react-navigation';
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