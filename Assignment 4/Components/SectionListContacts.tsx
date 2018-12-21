import React from 'react'
import { StyleSheet, Text, View, SectionList } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Row from './Row'

const styles = StyleSheet.create({
  sectionText: {
    fontSize: 25,
    marginLeft: 10,
  },
})

const renderItem = ({ item }) => <Row {...item} />
const renderSectionHeader = ({ section }) => (
  <Text style={styles.sectionText}>{section.title}</Text>
)
const SectionListContacts = props => {
  const contactByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    }
  }, {})
  // sections => [{data: [...], title: "A"}, {data: [...], title: "B"}, ...]
  const sections = Object.keys(contactByLetter)
    .sort()
    .map(letter => ({
      data: contactByLetter[letter],
      title: letter,
    }))

  return (
    <SectionList
      sections={sections}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

export default SectionListContacts
