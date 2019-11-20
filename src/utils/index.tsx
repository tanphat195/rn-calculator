import { AsyncStorage } from 'react-native'

export const getCalculatorHistory = async () => {
  const history = await AsyncStorage.getItem('calculator_history')
  return JSON.parse(history) || []
}

export const setCalculatorHistory = async (data) => {
  await AsyncStorage.setItem('calculator_history', JSON.stringify(data))
}