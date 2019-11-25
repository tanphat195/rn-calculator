import React from 'react'

export const CalculatorContext = React.createContext({})

type IState = {
  inputs: [],
  result: string,
  value: string,
  operater: string,
}

class CalculatorProvider extends React.Component<{}, IState> {
  constructor(props) {
    super(props)
    this.state = {
      inputs: [],
      result: '0',
      value: '0',
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

  handleOnPressOperater = (operater: string) => {
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
        result: '0',
        operater: '',
        value: '0',
      })
    }
    if (operater === 'ce') {
      this.setState({
        value: '0',
      })
    }
    if (operater === 'del') {
      this.setState((prevState) => {
        const valueString = prevState.value.toString()
        if (valueString.length === 1) return { value: '0' }
        return {
          value: parseFloat(valueString.substring(0, valueString.length - 1))
        }
      })
    }
    if (operater === '.') {
      if (!this.state.value.toString().includes('.')) {
        this.setState({
          value: `${this.state.value}${operater}`
        })
      }
    }
  }

  handleOperater = (prevState: IState, finalOperater) => {
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
    return `${result}`
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