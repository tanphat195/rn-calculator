import React from 'react';
import { View } from 'react-native';
import ResultDisplay from '../../components/molecules/ResultDisplay';
import Keyboard from '../../components/molecules/Keyboard';
import CalculatorProvider, { CalculatorContext } from './context';
import styles from './styles';

class Calculator extends React.Component {
  static navigationOptions = () => ({
    header: null
  })

  render() {
    return (
      <CalculatorProvider>
        <CalculatorContext.Consumer>
          {(ctx: any) => (
            <View style={styles.main}>
              <View style={styles.display}>
                <ResultDisplay value={ctx.value} inputs={ctx.inputs} />
              </View>
      
              <View style={styles.keyboard}>
                <Keyboard
                  handleOnPressNumber={ctx.handleOnPressNumber}
                  handleOnPressOperater={ctx.handleOnPressOperater}
                />
              </View>
            </View>
          )}
        </CalculatorContext.Consumer>
      </CalculatorProvider>
    );
  }
}

export default Calculator;