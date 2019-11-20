import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'

interface Props {
  inputs: [],
  value: string,
}

class ResultDisplay extends React.Component<Props> {
  render() {
    const { inputs, value } = this.props

    return (
      <View style={styles.main}>
        <View style={styles.description}>
          {inputs.map((item, index) => (
            <Text key={index} style={styles.cell}>{item}</Text>
          ))}
        </View>
        <Text style={styles.value}>{value}</Text>
      </View>
    )
  }
}

export default ResultDisplay