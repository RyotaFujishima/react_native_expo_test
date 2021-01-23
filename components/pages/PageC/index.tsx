import React, { FC } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'

const PageC: FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>PageC</Text>
    <Button
      onPress={() => {
        Actions.pageA({ type: ActionConst.RESET })
      }}
      title="PageAへ"
      color="#841584"
    />
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

export default PageC
