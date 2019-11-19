import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Caculator from './screens/CalculatorScreen'

class App extends React.Component {
  
  render() {
    return (
      <Caculator />
    )
  }
}

App.navigationOptions = {
  header: null,
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  }
})

export default createAppContainer(AppNavigator)