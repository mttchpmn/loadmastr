import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";

import Header from "../../components/Header";
import Theme from "../../Theme";
import { LoadDataContext } from "../../App";

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
        <LoadDataContext.Consumer>
          {data => (
            <View>
              <Text>Rego:</Text>
              <TextInput
                value={data.config_aircraftRego}
                onChangeText={text =>
                  data.updateProp("config_aircraftRego", text)
                }
              />
            </View>
          )}
        </LoadDataContext.Consumer>
      </View>
    );
  }
}

export default FlightConfig;
