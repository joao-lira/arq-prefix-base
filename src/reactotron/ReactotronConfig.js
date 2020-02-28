import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({
    // iLevel
    // host: "192.168.25.172"
    // JP
    // host: '192.168.1.8',
  })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
