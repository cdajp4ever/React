import { createStackNavigator, createAppContainer } from 'react-navigation'

import SampleContentScreen from '../Screens/SampleContentScreen'
import IDCardScreen from '../Screens/IDCardScreen'
import { Colors } from '../Themes'

const StackNavigation = createStackNavigator(
  {
    SampleContent: {
      screen: SampleContentScreen,
    },
    IDCard: {
      screen: IDCardScreen,
    },
  },
  {
    initialRouteName: 'SampleContent',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.panther,
      },
      headerTintColor: Colors.ricePaper,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

export default createAppContainer(StackNavigation)
