import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
const Screen1 = (props) => {
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>
      <Text style={styles.counterText}>{counter}</Text>
      <Button title="+" onPress={() => console.log("hello")} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  counterText: {
    textAlign: "center",
    fontSize: 50
  }
});
export default Screen1;
