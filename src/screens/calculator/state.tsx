import React from 'react'

export const CalculatorContext = React.createContext(0)

interface State {
  inputs: [],
  result: number,
  value: number,
  operater: string,
}

class CalculatorProvider extends React.Component<{}, State> {
  constructor(props) {
    super(props)
    this.state = {
      inputs: [],
      result: 0,
      value: 0,
      operater: '',
    }
  }

  handleOnPressNumber = (name) => {
    this.setState((prevState) => {
      if (prevState.operater) {
        return {
          value: name,
          operater: ''
        }
      } else {
        return {
          value: parseFloat(`${prevState.value}${name}`),
        }
      }
    })
  }

  handleOnPressOperater = (operater) => {
    if (['+', '-', 'x', '/'].includes(operater)) {
      this.setState((prevState) => {
        let inputs = []
        let result = prevState.result
        if (prevState.operater === '=') {
          inputs = [prevState.result, operater]
        } else if (prevState.operater) {
          inputs = [...prevState.inputs.slice(0, prevState.inputs.length - 1), operater]
        } else {
          inputs = [...prevState.inputs, prevState.value, operater]
          const finalOperater = prevState.inputs[prevState.inputs.length - 1] || operater
          result = this.handleOperater(prevState, finalOperater)
        }

        return {
          inputs,
          result,
          operater,
          value: result,
        }
      })
    }
    if (operater === '=') {
      this.setState((prevState) => {
        const finalOperater = prevState.inputs[prevState.inputs.length - 1] || operater
        const result = this.handleOperater(prevState, finalOperater)
        
        return {
          inputs: [],
          result,
          operater,
          value: result,
        }
      })
    }
    if (operater === 'c') {
      this.setState({
        inputs: [],
        result: 0,
        operater: '',
        value: 0,
      })
    }
  }

  handleOperater = (prevState, finalOperater) => {
    let result = prevState.value

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

  render() {

    return (
      <CalculatorContext.Provider
        value={{
          ...this.state,
          handleOnPressNumber: this.handleOnPressNumber,
          handleOnPressOperater: this.handleOnPressOperater
        }}
      >
        {this.props.children}
      </CalculatorContext.Provider>
    )
  }
}

export default CalculatorProvider