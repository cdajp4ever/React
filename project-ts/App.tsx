import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  constructor(props: {}) {
    super(props)
    // prints different props
    console.log(`constructor ${JSON.stringify(props)}`)
  }
  componentWillMount() {
    // nothing has been rendered, changes will occur soon
    console.log('ComponentWIllMount')
  }

  _logSomething() {
    console.log('This is actually working!!')
  }

  render() {
    const message = 'Hello World!'
    const myName = 'Juan Aguas'
    return (
      <View style={styles.container}>
        <Text style={styles.defaultText}>{message}</Text>
        <Text style={styles.defaultText}>
          Open up App.js to start working on your app!
        </Text>
        <Text style={styles.redText}>{myName}</Text>
        <Text onPress={this._logSomething} style={styles.defaultText}>
          Click this test!
        </Text>
      </View>
    )
  }
  componentDidMount() {
    // we rendered.
    console.log('componentDidMount')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultText: {
    color: 'blue',
  },
  redText: {
    color: 'red',
  },
})
