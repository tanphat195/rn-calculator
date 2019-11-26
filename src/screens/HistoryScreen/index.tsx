import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import { getCalculatorHistory } from '../../utils'
import styles from './styles'

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

const HistoryScreen: NavigationStackScreenComponent = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    getHistory()
  }, [])

  const getHistory = async () => {
    const list = await getCalculatorHistory()
    setList(list)
  }
  
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  )
}

HistoryScreen.navigationOptions = () => ({
  title: 'History'
})

export default HistoryScreen;