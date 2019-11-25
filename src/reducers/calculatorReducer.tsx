import { getCalculatorHistory, setCalculatorHistory } from '../utils';
export const ON_PRESS_KEY = 'ON_PRESS_KEY';

interface IState {
  inputs: [],
  value: string,
  result: number,
  operater: string,
}

const initialState: IState = {
  inputs: [],
  value: '0',
  result: 0,
  operater: '',
};

const actionMap = {
  [ON_PRESS_KEY]: (state, payload) => {
    const saveHistory = async (record) => {
      const history = await getCalculatorHistory()
      await setCalculatorHistory([record, ...history])
    }
  
    const handleOperater = (prevState, finalOperater) => {
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
            result = parseFloat(prevState.result) / parseFloat(prevState.value)
            break
        }
      }
      return result
    }

    if (['0','1','2','3','4','5','6','7','8','9'].includes(payload)) {
      if (state.operater) {
        return {
          ...state,
          value: payload,
          operater: ''
        }
      } else {
        return {
          ...state,
          value: parseFloat(`${state.value}${payload}`),
        }
      }
    }

    if (['+', '-', 'x', '/'].includes(payload)) {
      let inputs = []
      let result = state.result
      if (state.operater === '=') {
        inputs = [state.result, payload]
      } else if (state.operater) {
        inputs = [...state.inputs.slice(0, state.inputs.length - 1), payload]
      } else {
        inputs = [...state.inputs, state.value, payload]
        const finalOperater = state.inputs[state.inputs.length - 1] || payload
        result = handleOperater(state, finalOperater)
      }

      return {
        ...state,
        inputs,
        result,
        operater: payload,
        value: result,
      }
    }
    if (payload === '=') {
      const finalOperater = state.inputs[state.inputs.length - 1] || payload
      const result = handleOperater(state, finalOperater)
      const record = `${state.inputs.join(' ')} ${state.value} = ${result}`

      saveHistory(record);
  
      return {
        ...state,
        inputs: [],
        result,
        operater: payload,
        value: result,
      }
    }
    if (payload === 'c') {
      return {
        ...state,
        inputs: [],
        result: 0,
        operater: '',
        value: '0',
      }
    }
    if (payload === 'ce') {
      return {
        ...state,
        value: '0',
      }
    }
    if (payload === 'del') {
      const valueString = state.value.toString()
      if (valueString.length === 1) {
        return {
          ...state,
          value: '0'
        }
      } else {
        return {
          ...state,
          value: parseFloat(valueString.substring(0, valueString.length - 1))
        }
      }
    }
    if (payload === '.' && !state.value.toString().includes('.')) {
      return {
        ...state,
        value: `${state.value}${payload}`
      }
    }
  },
};

export default (state: IState = initialState, action) => {
  const fn = actionMap[action.type];
  return fn ? fn(state, action.payload) : state;
}