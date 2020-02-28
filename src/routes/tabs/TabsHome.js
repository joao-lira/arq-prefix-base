import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from '~/pages/home/Home'
import Search from '~/pages/search/Search'
import Purchases from '~/pages/purchases/Purchases'
import Profile from '~/pages/profile/Profile'
import { Colors } from '~/styles'

const TabsHome = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Search: { screen: Search },
    Purchases: { screen: Purchases },
    Profile: { screen: Profile }
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      keyboardHidesTabBar: true,
      activeTintColor: Colors.PRIMARY,
      inactiveTintColor: Colors.GREY,
      style: {
        backgroundColor: Colors.WHITE,
        paddingBottom: 5
      }
    }
  }
)

export default TabsHome
