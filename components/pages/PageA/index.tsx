import React, { FC } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

const PageA: FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>PageA</Text>
    <Button onPress={Actions.pageB} title="PageBへ" color="#841584" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
  },
})

export default PageA
