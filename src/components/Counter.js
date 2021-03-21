import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
// imports inject and observer from 'mobx-react':
import { inject, observer } from "mobx-react";


class Counter extends React.Component{
    constructor(props){
        super(props)
    }
    novayaFunc = () => {
      
    }
    secondFunc = () => {
      
    }
    onIncrease = () => {
        this.props.store.inCreaseCount();
    }
    onDecrease = () => {
        this.props.store.decreaseCount();
    }
    render(){
        const { count, inCreaseCount, decreaseCount } = this.props.store;
        return (
            <View style={styles.container}>
              <View style={styles.marginElement}>
                <Button
                title="Increase" 
                testID="increaseBtn"
                onPress={this.onIncrease} 
                />
              </View>
              <View style={styles.marginElement}>
                <Button
                testID="decreaseBtn"
                title="Decrease"
                onPress={this.onDecrease} 
                />
              </View>
              <Text
              testID="countText" style={styles.marginElement}>{count}</Text>
            </View>
          );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  marginElement: {
    marginVertical: 10
  }
});
// inject Store as props to ImageList and make it observe changes in Store
export default inject("store")(observer(Counter));

//export default CounterWithMobx;
