import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button, Text, Toggle, styled } from '@ui-kitten/components'

const PageA: FC = () => {
  const [checked, setChecked] = React.useState(false)

  const onCheckedChange = (isChecked: boolean) => {
    setChecked(isChecked)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ページA</Text>
      <Toggle
        style={styles.toggle}
        checked={checked}
        onChange={onCheckedChange}
      >
        ボタンを有効化
      </Toggle>
      <Button style={styles.button} onPress={Actions.pageB} disabled={!checked}>
        PageBへ
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
  toggle: {
    marginTop: 16,
  },
  button: {
    marginTop: 32,
  },
})

export default PageA
