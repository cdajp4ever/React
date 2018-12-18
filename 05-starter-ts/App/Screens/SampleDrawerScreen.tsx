import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'

export default class SampleDrawerScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={styles.text}>{'Hello There'}</Text>
        <Text style={styles.text}>{'This is a sample :)'}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.charcoal,
  },
})
