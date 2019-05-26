import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

import Header from "../../components/Header";
import Theme from "../../Theme";
import Title from "../../components/Title";
import { LoadDataContext } from "../../App";
import DataLimitDisplay from "./DataLimitDisplay";

class FlightTotals extends Component {
  static navigationOptions = {
    tabBarIcon: <Icon name={"md-calculator"} size={35} color={"#fff"} />
  };

  constructor(props) {
    super(props);
  }

  getPaxWeight(paxList) {
    let totalWeight = 0;

    paxList.map(person => {
      console.log("PAX: ", person);
      totalWeight += parseInt(person.weight, 10);
      if (person.hasInfant) totalWeight += parseInt(person.infantWeight, 10);
    });

    return totalWeight;
  }

  render() {
    return (
      <View>
        <Title label={"Flight Totals"} />
        <LoadDataContext.Consumer>
          {data => (
            <View>
              <DataLimitDisplay
                label={"Aircraft Empty Weight"}
                data={data.config_aircraftEmptyWeight}
              />
              <DataLimitDisplay
                label={"Crew Weight"}
                data={data.getCrewWeight()}
              />
              <DataLimitDisplay
                label={"Total Passenger Weight"}
                data={data.getPaxWeight()}
              />

              <DataLimitDisplay
                label={"Zero Fuel Weight"}
                data={data.getZeroFuelWeight()}
              />
              <DataLimitDisplay
                label={"Fuel Weight"}
                data={data.getFuelWeight()}
              />

              <DataLimitDisplay
                label={"Takeoff Weight"}
                data={data.getTakeoffWeight()}
                limit={parseInt(data.config_aircraftMaxTakeoffWeight, 10)}
              />
              <DataLimitDisplay label={"Fuel Burn"} data={data.getFuelBurn()} />
              <DataLimitDisplay
                label={"Landing Weight"}
                data={data.getLandingWeight()}
                limit={data.config_aircraftMaxLandingWeight}
              />
              {/* TODO = COG Calculations */}
            </View>
          )}
        </LoadDataContext.Consumer>
      </View>
    );
  }
}

export default FlightTotals;
