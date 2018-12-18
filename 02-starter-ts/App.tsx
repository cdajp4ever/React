import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import { Images, Colors, Metrics } from './App/Themes'
import IDCard from './App/Components/IDCard'
import { IPerson } from './App/Types/Person'
import { people, generatePeople, createPerson } from './App/pojo/people';

interface IState {
  people: IPerson[]
  buttonText: string
  refreshing: boolean
}
export default class App extends React.Component<{}, IState> {
  state = {
   buttonText: 'Show me your ID Card!',
   people: [...people],
   refreshing: false,
  }

  constructor(props: {}) {
    super(props)
  }
  showCard = () => {
    // update state ==> triggers re-render
    this.getPerson()
    console.log('Later networking')
  }

  render() {
    if (this.state.refreshing) {
      return (
        <SafeAreaView style={styles.container}>
          <ActivityIndicator />
        </SafeAreaView>
      )
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <IDCard {...this.state.person} />
            <IDCard {...this.state.person} />
            <IDCard {...this.state.person} />
            <IDCard {...this.state.person} />
            <IDCard {...this.state.person} />
            <IDCard {...this.state.person} />
          </ScrollView>
          <Button title={this.state.buttonText} onPress={this.showCard} />
        </SafeAreaView>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
