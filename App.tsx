import React, { FC } from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { Router, Actions } from 'react-native-router-flux'
import { StatusBar } from 'expo-status-bar'

const App: FC = () => (
  <View style={styles.container}>
    <Text style={styles.h1}>App.tsx</Text>
    <Button
      onPress={this.onPressLearnMore}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
    <StatusBar style="auto" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 30,
  },
})

export default App
