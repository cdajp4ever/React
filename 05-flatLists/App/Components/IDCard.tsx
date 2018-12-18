import * as React from 'react'
import { StyleSheet, Button, Text, View, Image } from 'react-native'
import { Images, Colors, Metrics } from '../Themes'
import { RowItem } from './RowItem'
import { IPerson } from '../Types'

export default class IDCard extends React.Component<IPerson, {}> {
  constructor(props: IPerson) {
    super(props)
  }

  _generateRowData = (
    col1: string,
    col2: string,
    col3: string,
    data1: string,
    data2: string,
    data3: string
  ) => ({
    col1,
    col2,
    col3,
    data1,
    data2,
    data3,
  })

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.mainInfoView}>
          <Image style={styles.picture} source={Images.jedi1} />
          <View style={styles.mainInfo}>
            <Text style={{ fontWeight: 'bold' }}>{this.props.name}</Text>
            <Text style={{ fontWeight: '500' }}>{this.props.gender}</Text>
          </View>
        </View>
        <RowItem
          {...this._generateRowData(
            'Birth Year',
            'Height',
            'Weight',
            this.props.birthYear,
            this.props.height,
            this.props.weight
          )}
        />
        <RowItem
          {...this._generateRowData(
            'Hair Color',
            'Eye Color',
            'Skin Color',
            this.props.hairColor,
            this.props.eyeColor,
            this.props.skinColor
          )}
        />
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
})
