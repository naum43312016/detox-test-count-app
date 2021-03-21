import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
// imports inject and observer from 'mobx-react':
import { Provider } from 'mobx-react';
import store from '../stores/Store';
import Counter from '../components/Counter';

class CounterWithMobx extends React.Component{
    render(){
        return (
            <Counter />
          );
    }
};

export default CounterWithMobx;