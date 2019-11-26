import React from 'react'
import { connect } from 'react-redux';
import { TouchableHighlight, Text } from 'react-native'
import styles from './styles'

interface Props {
  name: string
  title: string
  width: 'half' | 'quarter',
  handleOnPress: (name: string) => void,
  bgColor?: 'bgBlue' |'bgWhite',
  textColor?: 'whiteText',
}

const Button: React.FC<Props> = (props) => {
  const onPress = () => {
    const { handleOnPress, name } = props
    handleOnPress(name)
  }

  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.main, styles[props.width], styles[props.bgColor]]}
    >
      <Text style={[styles.text, styles[props.textColor]]}>{props.title}</Text>
    </TouchableHighlight>
  )
}

const mapDispatch = dispatch => ({
  handleOnPress: name => dispatch({
    type: 'WATCH_PRESS_KEY',
    payload: name,
  }),
});

export default connect(null, mapDispatch)(Button);