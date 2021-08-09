import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Screen1 from "../screens/Screen1";
import Store from "../store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={Store}>
      <Screen1 />
    </Provider>
  );
}

export default App;
