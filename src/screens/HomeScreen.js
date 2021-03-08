import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

const HomeScreen = ({navigation}) => {

  onCounter = () => {
    navigation.navigate("Counter")
  }


  return (
    <View style={styles.container}>
      <View style={styles.marginElement}>
        <Button
        title="Counter" 
        testID="counterBtn"
        onPress={onCounter} 
        />
      </View>
      <Text
      style={styles.marginElement}>Home Screen</Text>
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

export default HomeScreen;