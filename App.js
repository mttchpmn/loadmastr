import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home/Home";

export default class App extends Component {
  render() {
    return <Home />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
