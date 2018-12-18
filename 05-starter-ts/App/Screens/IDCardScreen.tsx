import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  Button,
  ActivityIndicator,
} from 'react-native'

import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { Images, Metrics, Colors } from '../Themes'
import IDCard from '../Components/IDCard'
import { IPerson } from '../Types/Person'

interface IState {
  person: IPerson
  buttonText: string
  loading: boolean
}
export default class IDCardScreen extends React.Component<{}, IState> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'ID Card',
      headerRight: (
        <Button title={'Next'} onPress={() => navigation.push('IDCard')} />
      ),
      tabBarLabel: 'ID Card',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name="perm-identity"
          color={tintColor}
          size={Metrics.icons.small}
        />
      ),
    }
  }
  state = {
    person: {
      name: 'Unknown',
      gender: 'Unknown',
      birthYear: 'N/A',
      height: 'N/A',
      weight: 'N/A',
      hairColor: 'N/A',
      eyeColor: 'N/A',
      skinColor: 'N/A',
    },
    buttonText: 'Show me your ID Card!',
    loading: false,
  }
  constructor(props: {}) {
    super(props)
  }

  showCard = () => {
    this.getPerson()
  }

  async getPerson() {
    try {
      this.setState({ loading: true })

      const randomNumber = Math.floor(Math.random() * 88) + 1

      const response = await fetch(
        `https://swapi.co/api/people/${randomNumber}`
      )
      const responseJson = await response.json()
      const newPerson: IPerson = {
        name: responseJson.name,
        gender: responseJson.gender,
        birthYear: responseJson.birth_year,
        height: responseJson.height,
        weight: responseJson.mass,
        hairColor: responseJson.hair_color,
        eyeColor: responseJson.eye_color,
        skinColor: responseJson.skin_color,
      }
      this.setState({ loading: false, person: newPerson })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    // conditional rendering
    if (this.state.loading) {
      return (
        <SafeAreaView style={styles.container}>
          <ActivityIndicator />
        </SafeAreaView>
      )
    }
    return (
      <SafeAreaView style={styles.container}>
        <IDCard {...this.state.person} />
        <Button title={this.state.buttonText} onPress={this.showCard} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
