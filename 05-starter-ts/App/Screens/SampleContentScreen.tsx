import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  StatusBar,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'

export default class SampleContentScreen extends React.Component {
  static navigationOptions = {
    title: 'Sample content screen',
    tabBarLabel: 'Content',
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons name="mood" color={tintColor} size={Metrics.icons.small} />
    ),
  }
  componentDidMount() {
    console.log(JSON.stringify(this.props.navigation))
  }

  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.text}>{'Simple screen'}</Text>
        {this.props.navigation.state.routeName !== 'First' && (
          <Button
            title={'Show me your ID Card'}
            onPress={() => this.props.navigation.navigate('IDCard')}
          />
        )}
      </SafeAreaView>
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
    fontSize: 50,
    color: Colors.bloodOrange,
  },
})
