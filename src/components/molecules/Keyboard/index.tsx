import React from 'react'
import { View, TouchableOpacity , Text } from 'react-native'
import styles from './styles'
import NumberButton from '../../atoms/NumberButton'
import OperaterButton from '../../atoms/OperaterButton'

const Keyboard = ({ handleOnPressNumber, handleOnPressOperater }) => (
  <View style={styles.main}>
    <View style={styles.row}>
      <NumberButton handleOnPress={handleOnPressOperater} width={'quarter'} name="c" title="c" />
      <NumberButton handleOnPress={handleOnPressOperater} width={'quarter'} name="d" title="d" />
      <NumberButton handleOnPress={handleOnPressOperater} width={'quarter'} name="%" title="%" />
      <OperaterButton handleOnPress={handleOnPressOperater} width={'quarter'} name="/" title={'/'} />
    </View>

    <View style={styles.row}>
      <NumberButton handleOnPress={handleOnPressNumber} width={'quarter'} name="7" title="7" />
      <NumberButton handleOnPress={handleOnPressNumber} width={'quarter'} name="8" title="8" />
      <NumberButton handleOnPress={handleOnPressNumber} width={'quarter'} name="9" title="9" />
      <OperaterButton handleOnPress={handleOnPressOperater} width={'quarter'} name="x" title="x" />
    </View>

    <View style={styles.row}>
      <NumberButton handleOnPress={handleOnPressNumber} width={'quarter'} name="4" title="4" />
      <NumberButton handleOnPress={handleOnPressNumber} width={'quarter'} name="5" title="5" />
      <NumberButton handleOnPress={handleOnPressNumber} width={'quarter'} name="6" title="6" />
      <OperaterButton handleOnPress={handleOnPressOperater} width={'quarter'} name="-" title="-" />
    </View>

    <View style={styles.row}>
      <NumberButton handleOnPress={handleOnPressNumber} width={'quarter'} name="1" title="1" />
      <NumberButton handleOnPress={handleOnPressNumber} width={'quarter'} name="2" title="2" />
      <NumberButton handleOnPress={handleOnPressNumber} width={'quarter'} name="3" title="3" />
      <OperaterButton handleOnPress={handleOnPressOperater} width={'quarter'} name="+" title="+" />
    </View>

    <View style={styles.row}>
      <NumberButton handleOnPress={handleOnPressNumber} width={'half'} name="0" title="0" />
      <NumberButton handleOnPress={handleOnPressNumber} width={'quarter'} name="." title="." />
      <OperaterButton handleOnPress={handleOnPressOperater} width={'quarter'} name="=" title="=" />
    </View>
  </View>
)

export default Keyboard