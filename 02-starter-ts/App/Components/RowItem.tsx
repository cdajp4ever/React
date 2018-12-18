import * as React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { Images, Colors, Metrics } from '../Themes'
import { IPerson } from '../../App'

interface IRowProps {
  col1: string
  col2: string
  col3: string
  data1: string
  data2: string
  data3: string
}

// Stateless Functional Component
const RowItem: React.SFC<IRowProps> = props => {
  return (
    <View>
      <View style={styles.rowItem}>
        <Text style={{ fontWeight: 'bold' }}>{props.col1}</Text>
        <Text style={{ fontWeight: 'bold' }}>{props.col2}</Text>
        <Text style={{ fontWeight: 'bold' }}>{props.col3}</Text>
      </View>
      <View style={[styles.rowItem, { marginTop: 0 }]}>
        <Text>{props.data1}</Text>
        <Text>{props.data2}</Text>
        <Text>{props.data3}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: Metrics.marginVertical,
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
  },
})

export { RowItem }
