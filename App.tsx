import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello! React Native!</Text>
      <Image
        style={{ width: 300, height: 300 }}
        source={require('./assets/logo.png')}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
