import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/HomeComponents/Header'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})