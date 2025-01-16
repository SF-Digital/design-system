import { StyleSheet } from 'react-native'

export const pageContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    padding: 10,
  },
})

export const exampleContainerStyle = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
})

export const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    padding: 10,
  },
  componentExampleContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
})
