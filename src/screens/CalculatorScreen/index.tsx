import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation'
import ResultDisplay from '../../components/molecules/ResultDisplay';
import Keyboard from '../../components/molecules/Keyboard';
import styles from './styles';

type CalculatorType = {
  inputs: [],
  result: number,
  value: string,
  operater: string
}
interface Props {
  updateCalculator: (CalculatorType) => void;
  calculator: CalculatorType,
  navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}

class Calculator extends React.Component<Props> {
  static navigationOptions = () => ({
    header: null
  })

  showHistory = () => {
    this.props.navigation.navigate('History')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.showBtn}>
          <TouchableHighlight onPress={this.showHistory} >
            <Text>✉</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.display}>
          <ResultDisplay />
        </View>
        <View style={styles.keyboard}>
          <Keyboard />
        </View>
      </View>
    )
  }
}

export default Calculator;