import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

const CounterScreen = () => {
  const [count,setCount] = useState(0);


  onIncrease = () => {
    setCount(count+1);
  }

  onDecrease = () => {
    if(count>0){
      setCount(count-1);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.marginElement}>
        <Button
        title="Increase" 
        testID="increaseBtn"
        onPress={onIncrease} 
        />
      </View>
      <View style={styles.marginElement}>
        <Button
        testID="decreaseBtn"
        title="Decrease"
        onPress={onDecrease} 
        />
      </View>
      <Text
      testID="countText" style={styles.marginElement}>{count}</Text>
    </View>
  );
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

export default CounterScreen;
