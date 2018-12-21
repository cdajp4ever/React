import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  SectionList,
} from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import SectionListContacts from '../Components/SectionListContacts'

interface IProps {
  screenProps: {
    contacts: []
  }
}

export default class ContactListScreen extends React.Component<IProps, {}> {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Contacts',
      headerRight: (
        <Button title="Add" onPress={() => navigation.push('AddContact')} />
      ),
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.screenProps.contacts && (
          <SectionListContacts contacts={this.props.screenProps.contacts} />
        )}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
