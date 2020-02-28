import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from '~/pages/login/Login'
import ShowCase from '~/pages/showcase/ShowCase'

// ROUTES
import TabsHome from '~/routes/tabs/TabsHome'

const createRootNavigator = (userLogged = false) =>
  createAppContainer(
    createStackNavigator(
      {
        Login,
        ShowCase,
        Home: TabsHome
      },
      {
        initialRouteName: !userLogged ? 'Home' : 'Login',
        defaultNavigationOptions: {
          gesturesEnabled: true
        },
        headerMode: 'none'
      }
    )
  )

export default createRootNavigator
