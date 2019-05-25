import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

import Header from "../../components/Header";
import Theme from "../../Theme";
import Title from "../../components/Title";
import DataInput from "../../components/DataInput";
import { LoadDataContext } from "../../App";

class FlightDetails extends Component {
  static navigationOptions = {
    tabBarIcon: <Icon name={"md-airplane"} size={35} color={"#fff"} />
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Title label={"Flight Details"} />
        <LoadDataContext>
          {data => (
            <View>
              <DataInput
                label={"Aircraft Type"}
                value={data.config_aircraftType}
                onChange={text => data.updateProp("config_aircraftType", text)}
              />

              <DataInput
                label={"Aircraft Registration"}
                value={data.config_aircraftRego}
                onChange={text => data.updateProp("config_aircraftRego", text)}
              />

              <DataInput
                label={"Flight Route"}
                value={data.loadsheet_route}
                onChange={text => data.updateProp("loadsheet_route", text)}
              />

              <DataInput
                label={"Date"}
                value={data.loadsheet_date}
                onChange={text => data.updateProp("loadsheet_date", text)}
              />

              <DataInput
                label={"ETD"}
                value={data.loadsheet_ETD}
                onChange={text => data.updateProp("loadsheet_ETD", text)}
                type={"number-pad"}
              />

              <DataInput
                label={"EET"}
                value={data.loadsheet_EET}
                onChange={text => data.updateProp("loadsheet_EET", text)}
                type={"number-pad"}
              />

              <DataInput
                label={"PIC"}
                value={data.config_pilotName}
                onChange={text => data.updateProp("config_pilotName", text)}
              />
            </View>
          )}
        </LoadDataContext>
      </View>
    );
  }
}

export default FlightDetails;
