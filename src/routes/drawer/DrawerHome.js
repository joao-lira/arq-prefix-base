import { createDrawerNavigator } from 'react-navigation-drawer';

import Profiles from '~/pages/home/Home';

const DrawerHome = createDrawerNavigator(
  {
    Profiles: { screen: Profiles },
  },
  {
    drawerPosition: 'left',
    drawerWidth: 200,
  },
);

export default DrawerHome;
