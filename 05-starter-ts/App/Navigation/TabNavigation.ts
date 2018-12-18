import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import { Colors } from '../Themes'
import SampleContentScreen from '../Screens/SampleContentScreen'
import SampleSettingsScreen from '../Screens/SampleSettingsScreen'
import IDCardScreen from '../Screens/IDCardScreen'

const TabNav = createBottomTabNavigator(
  {
    First: { screen: SampleContentScreen },
    Second: IDCardScreen,
    Third: SampleSettingsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.ember,
      inactiveTintColor: Colors.snow,
      labelStyle: {
        fontSize: 15,
      },
      style: {
        backgroundColor: Colors.ember,
      },
    },
  }
)

export default createAppContainer(TabNav)
