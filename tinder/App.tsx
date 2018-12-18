import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import metrics from './App/Themes/Metrics'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <Image
            style={styles.settingsIcon}
            source={require('./App/Images/config.png')}
          />
          <Image
            style={styles.tinderIcon}
            source={require('./App/Images/tinderlogo.png')}
          />
          <Image
            style={styles.chatIcon}
            source={require('./App/Images/chatting.png')}
          />
        </View>
        <View style={styles.centerView}>
          <Image
            style={styles.profImage}
            source={require('./App/Images/Profiles/harold.jpg')}
            // resizeMode="cover"
          />
          <View style={styles.textView}>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Harold,</Text>
            <Text style={{ fontWeight: '200', fontSize: 30 }}>60</Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              color: 'gray',
              marginBottom: 10,
              marginLeft: -metrics.screenWidth / 2,
              marginTop: -10,
            }}
          >
            Internet Meme
          </Text>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.iconViewSmall}>
            <Image
              style={styles.bottomIcons1}
              source={require('./App/Images/rewind.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.iconViewBig}>
            <Image
              style={styles.bottomIcons2}
              source={require('./App/Images/nope.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.iconViewSmall}>
            <Image
              style={styles.bottomIcons1}
              source={require('./App/Images/boost.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.iconViewBig}>
            <Image
              style={styles.bottomIcons2}
              source={require('./App/Images/like.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.iconViewSmall}>
            <Image
              style={styles.bottomIcons1}
              source={require('./App/Images/superlike.png')}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
  },
  topView: {
    flex: 2,
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
    maxHeight: 40,
    maxWidth: metrics.screenWidth,
    justifyContent: 'space-evenly',
  },
  centerView: {
    flex: 3,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 80,
    marginBottom: 80,
    marginLeft: 15,
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    maxHeight: 380,
    maxWidth: metrics.screenWidth - 30,
    alignItems: 'center',
  },
  textView: {
    flex: 4,
    flexDirection: 'row',
    marginLeft: -metrics.screenWidth / 2,
    marginBottom: 10,
  },
  settingsIcon: {
    width: metrics.icons.medium,
    height: metrics.icons.medium,
  },
  tinderIcon: {
    width: 80,
    height: metrics.icons.medium,
    marginLeft: 100,
  },
  chatIcon: {
    width: metrics.icons.medium,
    height: metrics.icons.medium,
    marginLeft: 100,
  },
  profImage: {
    width: metrics.screenWidth - 32,
    height: 300,
  },
  bottomView: {
    flex: 5,
    flexDirection: 'row',
    maxHeight: 60,
    maxWidth: metrics.screenWidth - 100,
    marginTop: -10,
    marginLeft: metrics.screenWidth * 0.14,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: metrics.screenWidth,
  },
  bottomIcons1: {
    height: metrics.images.small,
    width: metrics.images.small,
  },
  bottomIcons2: {
    height: 25,
    width: 25,
  },
  iconViewSmall: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconViewBig: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
