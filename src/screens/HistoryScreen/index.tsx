import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { getCalculatorHistory } from '../../utils'
import styles from './styles'

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

interface State {
  list: []
}

class HistoryScreen extends React.Component<{}, State> {
  static navigationOptions = () => ({
    title: 'History'
  })

  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.getHistory()
  }

  getHistory = async () => {
    const list = await getCalculatorHistory()
    this.setState({ list })
  }
  
  render() {
    const { list } = this.state

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
}

export default HistoryScreen