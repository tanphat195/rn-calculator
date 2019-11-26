import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  main: {
    height: '100%',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24
  },
  half: {
    width: '50%'
  },
  quarter: {
    width: '25%'
  },
  bgBlue: {
    backgroundColor: '#41BAEE',
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  whiteText: {
    color: 'white',
    fontSize: 28,
  }
})