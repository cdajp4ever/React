import * as React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { Images, Colors, Metrics } from '../Themes'
import { IPerson } from '../../App'
import { RowItem } from './RowItem'

export default class IDCard extends React.Component<IPerson, {}> {
  constructor(props: IPerson) {
    super(props)
  }
  render() {
    const firstRow = {
      col1: 'Birth Year',
      col2: 'Height',
      col3: 'Weight',
      data1: this.props.birthYear,
      data2: this.props.height,
      data3: this.props.weight,
    }
    const secondRow = {
      col1: 'Hair Color',
      col2: 'Eye Color',
      col3: 'Skin Color',
      data1: this.props.hairColor,
      data2: this.props.eyeColor,
      data3: this.props.skinColor,
    }
    return (
      <View style={styles.card}>
        <View style={styles.mainInfoView}>
          <Image style={styles.picture} source={Images.jedi1} />
          <View style={styles.mainInfo}>
            <Text style={{ fontWeight: 'bold' }}>{this.props.name}</Text>
            <Text style={{ fontWeight: '500' }}>{this.props.gender}</Text>
          </View>
        </View>
        <RowItem {...firstRow} />
        <RowItem {...secondRow} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  card: {
    marginVertical: Metrics.marginVertical,
    padding: Metrics.doubleBaseMargin,
    width: Metrics.screenWidth * 0.9,
    borderWidth: Metrics.borderWidth,
    borderRadius: Metrics.buttonRadius,
  },
  mainInfoView: {
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  picture: {
    height: Metrics.images.large,
    width: Metrics.images.large,
    borderRadius: Metrics.images.large * 0.5,
  },
  mainInfo: {
    flexDirection: 'column',
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
  },
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: Metrics.marginVertical,
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
  },
})
