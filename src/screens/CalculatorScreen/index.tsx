import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import ResultDisplay from '../../components/molecules/ResultDisplay';
import Keyboard from '../../components/molecules/Keyboard';
import styles from './styles';

const Calculator: NavigationStackScreenComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <ResultDisplay />
      </View>
      <View style={styles.keyboard}>
        <Keyboard />
      </View>
    </View>
  )
}

Calculator.navigationOptions = (props) => ({
  title: 'Calculator',
  headerRight: () => (
    <TouchableOpacity
      style={styles.showBtn}
      onPress={() => props.navigation.navigate('History')}
    >
      <Text>History</Text>
    </TouchableOpacity>
  )
})

export default Calculator;