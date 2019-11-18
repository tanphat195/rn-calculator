import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

interface Props {
  name: string
  title: string
  width: 'half' | 'quarter',
  handleOnPress: (name: string) => void
}

class OperaterButton extends React.Component<Props> {
  onPress = () => {
    const { handleOnPress, name } = this.props
    if (handleOnPress) {
      handleOnPress(name)
    }
  }

  render() {
    const { title, width } = this.props;

    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={[styles.main, styles[width]]}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

export default OperaterButton