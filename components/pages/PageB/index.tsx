import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button, Text } from '@ui-kitten/components'

const PageB: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ページB</Text>
      <Button
        style={styles.button}
        onPress={Actions.pageC}
        appearance="outline"
        status="success"
      >
        PageCへ
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
  },
  button: {
    marginTop: 32,
  },
})

export default PageB
