import * as React from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { Images, Colors, Metrics } from './App/Themes'
import PickerScreen from './App/Screens/PickerScreen'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <PickerScreen />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
