import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import styles from './styles'

interface Props {
  calculator: {
    inputs: [],
    value: string,
  }
}

class ResultDisplay extends React.Component<Props> {
  render() {
    const { inputs, value } = this.props.calculator 

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

const mapState = state => ({
  calculator: state.calculator,
});

export default connect(mapState)(ResultDisplay)