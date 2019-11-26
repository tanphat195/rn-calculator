import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    backgroundColor: '#41BAEE',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 20,
    color: 'white'
  },
});