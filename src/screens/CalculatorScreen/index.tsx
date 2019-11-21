import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation'
import { connect } from 'react-redux';
import { getCalculatorHistory, setCalculatorHistory } from '../../utils';
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

  handleOnPressNumber = (name) => {
    const { updateCalculator, calculator } = this.props
    if (calculator.operater) {
      updateCalculator({
        value: name,
        operater: ''
      })
    } else {
      updateCalculator({
        value: parseFloat(`${calculator.value}${name}`),
      })
    }
  }

  handleOnPressOperater = (operater: string) => {
    const { updateCalculator, calculator } = this.props
    if (['+', '-', 'x', '/'].includes(operater)) {
      let inputs = []
      let result = calculator.result
      if (calculator.operater === '=') {
        inputs = [calculator.result, operater]
      } else if (calculator.operater) {
        inputs = [...calculator.inputs.slice(0, calculator.inputs.length - 1), operater]
      } else {
        inputs = [...calculator.inputs, calculator.value, operater]
        const finalOperater = calculator.inputs[calculator.inputs.length - 1] || operater
        result = this.handleOperater(calculator, finalOperater)
      }

      updateCalculator({
        inputs,
        result,
        operater,
        value: result,
      })
    }
    if (operater === '=') {
      this.handleGetFinalResult(operater)
    }
    if (operater === 'c') {
      updateCalculator({
        inputs: [],
        result: 0,
        operater: '',
        value: '0',
      })
    }
    if (operater === 'ce') {
      updateCalculator({
        value: '0',
      })
    }
    if (operater === 'del') {
      const valueString = calculator.value.toString()
      if (valueString.length === 1) {
        updateCalculator({ value: '0' })
      } else {
        updateCalculator({
          value: parseFloat(valueString.substring(0, valueString.length - 1))
        })
      }
    }
    if (operater === '.' && !calculator.value.toString().includes('.')) {
      updateCalculator({
        value: `${calculator.value}${operater}`
      })
    }
  }

  handleGetFinalResult = async (operater) => {
    const { updateCalculator, calculator } = this.props
    const finalOperater = calculator.inputs[calculator.inputs.length - 1] || operater
    const result = this.handleOperater(calculator, finalOperater)
    const record = `${calculator.inputs.join(' ')} ${calculator.value} = ${result}`

    const history = await getCalculatorHistory()
    await setCalculatorHistory([...history, record])

    updateCalculator({
      inputs: [],
      result,
      operater,
      value: result,
    })
  }

  handleOperater = (prevState, finalOperater) => {
    let result = parseFloat(prevState.value)

    if (prevState.inputs.length > 1) {
      switch(finalOperater) {
        case '+':
          result = parseFloat(prevState.result) + parseFloat(prevState.value)
          break
        case '-':
          result = parseFloat(prevState.result) - parseFloat(prevState.value)
          break
        case 'x':
          result = parseFloat(prevState.result) * parseFloat(prevState.value)
          break
        case '/':
          result = parseFloat(prevState.result) / parseFloat(prevState.value )
          break
      }
    }
    return result
  }

  showHistory = () => {
    this.props.navigation.navigate('History', {ha: 1})
  }

  render() {
    const { inputs, value } = this.props.calculator

    return (
      <View style={styles.container}>
        <View style={styles.showBtn}>
          <TouchableOpacity onPress={this.showHistory} >
            <Text>History</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.display}>
          <ResultDisplay value={value} inputs={inputs} />
        </View>
        <View style={styles.keyboard}>
          <Keyboard
            handleOnPressNumber={this.handleOnPressNumber}
            handleOnPressOperater={this.handleOnPressOperater}
          />
        </View>
      </View>
    )
  }
}

const mapState = state => ({
  calculator: state.calculator,
})

const mapDispatch = dispatch => ({
  updateCalculator: (calculator) => dispatch({
    type: 'INVOKE_CALCULATOR',
    payload: calculator,
  })
})

export default connect(mapState, mapDispatch)(Calculator)