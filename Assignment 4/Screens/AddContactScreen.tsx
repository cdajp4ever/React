import React from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native'
interface IState {
  name: string
  phone: string
  isFormValid: boolean
}
interface IProps {
  navigation: {
    navigate: (route: string) => void
  }

  screenProps: {
    addContact: (c: {}) => void
  }
}

export default class AddContactScreen extends React.Component<IProps, IState> {
  state = {
    name: '',
    phone: '',
    isFormValid: false,
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Add Contact',
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.name !== prevState.name ||
      this.state.phone !== prevState.phone
    ) {
      this.validateForm()
    }
  }

  validateForm = () => {
    const names = this.state.name.split(' ')
    // phone has to be number and length of 10
    // names.length >= 2 (['First', 'Last', ...])
    // names[0] and names[1] are not null or ''
    if (
      +this.state.phone >= 0 &&
      this.state.phone.length === 10 &&
      names.length >= 2 &&
      names[0] &&
      names[1]
    ) {
      this.setState({ isFormValid: true })
    } else {
      this.setState({ isFormValid: false })
    }
  }

  handleNameChange = name => {
    this.setState({ name })
  }

  handlePhoneChange = phone => {
    this.setState({ phone })
  }

  handleSubmit = () => {
    this.props.screenProps.addContact(this.state)
    this.props.navigation.navigate('ContactList')
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhoneChange}
          placeholder="Phone"
        />
        <Button
          title="Submit"
          disabled={!this.state.isFormValid}
          onPress={this.handleSubmit}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})
