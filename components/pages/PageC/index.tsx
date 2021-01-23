import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import { Button, Text } from '@ui-kitten/components'

const PageC: FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>ページC</Text>
    <Button
      style={styles.button}
      onPress={() => {
        Actions.pageA({ type: ActionConst.RESET })
      }}
      appearance="ghost"
      status="warning"
    >
      PageAへ
    </Button>
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
  button: {
    marginTop: 32,
  },
})

export default PageC
