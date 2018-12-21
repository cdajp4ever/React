import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const style = StyleSheet.create({
  row: {
    padding: 20,
  },
})

const Row = props => (
  <View style={style.row}>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </View>
)
export default Row
