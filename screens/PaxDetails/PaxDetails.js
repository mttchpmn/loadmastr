import React, { Component } from "react";
import { StyleSheet, Button, Text, View, ScrollView } from "react-native";

import Header from "../../components/Header";
import Theme from "../../theme";

class PaxDetails extends Component {
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
        <Text>PaxDetails component is working okay!</Text>
      </View>
    );
  }
}

export default PaxDetails;
