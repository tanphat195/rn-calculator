import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import styles from './styles'

interface Props {
  name: string
  title: string
  width: 'half' | 'quarter',
  handleOnPress: (name: string) => void
}

class NumberButton extends React.Component<Props> {
  onPress = () => {
    const { handleOnPress, name } = this.props
    if (handleOnPress) {
      handleOnPress(name)
    }
  }

  render() {
    const { title, width } = this.props

    return (
      <TouchableHighlight
        onPress={this.onPress}
        style={[styles.main, styles[width]]}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
    )
  }
}

export default NumberButton