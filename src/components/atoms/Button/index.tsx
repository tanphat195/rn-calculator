import React from 'react'
import { connect } from 'react-redux';
import { TouchableHighlight, Text } from 'react-native'
import styles from './styles'

interface Props {
  name: string
  title: string
  width: 'half' | 'quarter',
  handleOnPress: (name: string) => void,
  bgColor?: 'bgOrange' |'bgWhite',
}

class Button extends React.Component<Props> {
  onPress = () => {
    const { handleOnPress, name } = this.props
    handleOnPress(name)
  }

  render() {
    const { title, width, bgColor } = this.props

    return (
      <TouchableHighlight
        onPress={this.onPress}
        style={[styles.main, styles[width], styles[bgColor]]}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
    )
  }
}

const mapDispatch = dispatch => ({
  handleOnPress: name => dispatch({
    type: 'WATCH_PRESS_KEY',
    payload: name,
  }),
});

export default connect(null, mapDispatch)(Button);