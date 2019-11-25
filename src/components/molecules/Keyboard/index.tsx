import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import Button from '../../atoms/Button'

const Keyboard = () => (
  <View style={styles.main}>
    <View style={styles.row}>
      <Button width={'quarter'} name="c" title="C" />
      <Button width={'quarter'} name="ce" title="CE" />
      <Button width={'quarter'} name="del" title="⌫" />
      <Button bgColor="bgOrange" width={'quarter'} name="/" title={'÷'} />
    </View>

    <View style={styles.row}>
      <Button width={'quarter'} name="7" title="7" />
      <Button width={'quarter'} name="8" title="8" />
      <Button width={'quarter'} name="9" title="9" />
      <Button bgColor="bgOrange" width={'quarter'} name="x" title="×" />
    </View>

    <View style={styles.row}>
      <Button width={'quarter'} name="4" title="4" />
      <Button width={'quarter'} name="5" title="5" />
      <Button width={'quarter'} name="6" title="6" />
      <Button bgColor="bgOrange" width={'quarter'} name="-" title="-" />
    </View>

    <View style={styles.row}>
      <Button width={'quarter'} name="1" title="1" />
      <Button width={'quarter'} name="2" title="2" />
      <Button width={'quarter'} name="3" title="3" />
      <Button bgColor="bgOrange" width={'quarter'} name="+" title="+" />
    </View>

    <View style={styles.row}>
      <Button width={'half'} name="0" title="0" />
      <Button width={'quarter'} name="." title="•" />
      <Button bgColor="bgOrange" width={'quarter'} name="=" title="＝" />
    </View>
  </View>
)

export default Keyboard