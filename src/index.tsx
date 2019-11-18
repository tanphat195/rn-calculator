import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Caculator from './screens/calculator'

class App extends React.Component {
  
  render() {
    return (
      <Caculator />
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  }
})

export default createAppContainer(AppNavigator)