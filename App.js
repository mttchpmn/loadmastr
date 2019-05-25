import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home/Home";

// COULD ABSTRACT THIS INTO SEPARATE FILE
export const LoadDataContext = React.createContext();

export default class App extends Component {
  constructor(props) {
    super(props);

    this.updateProp = (prop, value) => {
      this.setState({ [prop]: value });
    };

    this.state = {
      config_aircraftRego: "FOO BAR BAZ",
      updateProp: this.updateProp
    };
  }

  render() {
    return (
      <LoadDataContext.Provider value={this.state}>
        <Text>{this.state.config_aircraftRego}</Text>
        <Home />
      </LoadDataContext.Provider>
    );
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
