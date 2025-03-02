import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import Home from './screens/Home'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{padding: 40}}>Hello</Text>
      <Home />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes it take the full screen
    backgroundColor: "white",
  },
})
