import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import { Colors } from '../Themes'
import SampleDrawerScreen from '../Screens/SampleDrawerScreen'
import SampleSettingsScreen from '../Screens/SampleSettingsScreen'
import IDCardScreen from '../Screens/IDCardScreen'

const DrawerNav = createDrawerNavigator({
  Sample: SampleDrawerScreen,
  Settings: SampleSettingsScreen,
  IDCard: IDCardScreen,
})

export default createAppContainer(DrawerNav)
