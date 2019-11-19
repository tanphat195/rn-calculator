import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft: 12,
    marginRight: 12,
  },
  description: {
    display: 'flex',
    flexDirection: 'row',
  },
  cell: {
    fontSize: 24,
    marginLeft: 4,
  },
  value: {
    fontSize: 54,
    color: 'rgba(0,0,0,0.6)'
  }
})