import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Header from "../../components/Header";
import Theme from "../../Theme";

class FlightConfig extends Component {
  static navigationOptions = {
    headerTitle: <Header />,
    headerStyle: {
      backgroundColor: Theme.primary
    },
    headerTintColor: Theme.white
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>FlightConfig component is working okay!</Text>
      </View>
    );
  }
}

export default FlightConfig;
