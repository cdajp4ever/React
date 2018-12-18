import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'

export default class SampleSettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons
        name="settings"
        color={tintColor}
        size={Metrics.icons.small}
      />
    ),
  }
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={styles.text}>{'Hello this is settings'}</Text>
        <Text style={styles.text}>{'Maybe we want count?'}</Text>
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
    color: Colors.black,
  },
})
