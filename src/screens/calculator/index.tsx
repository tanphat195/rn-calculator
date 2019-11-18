import React from 'react'
import { View } from 'react-native'
import ResultDisplay from '../../components/molecules/ResultDisplay'
import Keyboard from '../../components/molecules/Keyboard'
import CalculatorProvider, { CalculatorContext } from './state'
import styles from './styles'

class Calculator extends React.Component {

  render() {
    return (
      <View style={styles.main}>
        <CalculatorProvider>
          <View style={styles.display}>
            <CalculatorContext.Consumer>
              {(ctx) => (
                <ResultDisplay value={ctx.value} inputs={ctx.inputs} />
              )}
            </CalculatorContext.Consumer>
          </View>

          <View style={styles.keyboard}>
            <CalculatorContext.Consumer>
              {(ctx) => (
                <Keyboard
                  handleOnPressNumber={ctx.handleOnPressNumber}
                  handleOnPressOperater={ctx.handleOnPressOperater}
                />
              )}
            </CalculatorContext.Consumer>
          </View>
        </CalculatorProvider>
      </View>
    )
  }
}

export default Calculator