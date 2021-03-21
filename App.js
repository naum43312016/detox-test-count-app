import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CounterScreen from './src/screens/CounterScreen';
import CounterWithMobx from './src/screens/CounterWithMobx';
const Stack = createStackNavigator();
import { Provider } from 'mobx-react';
import store from './src/stores/Store';
import Counter from './src/components/Counter';

function App() {
  return (
    <Provider store={store}>
    <Counter />
  </Provider>
  );
}

export default App;
