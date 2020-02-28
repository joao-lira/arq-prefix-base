import '~/reactotron/ReactotronConfig';
import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import createRootNavigator from '~/routes/Routes';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    await this.verifyUserLogged();
  }

  verifyUserLogged = async () => {
    const user = await AsyncStorage.getItem('@Medipreco:userLogged');
    this.setState({
      userChecked: true,
      userLogged: !!user,
    });
  };

  render() {
    if (!this.state.userChecked) {
      return null;
    }
    const Routes = createRootNavigator(this.state.userLogged);
    return <Routes />;
  }
}
