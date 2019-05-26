import React, { Component } from "react";
import { StyleSheet, Text, AsyncStorage } from "react-native";
import Home from "./screens/Home/Home";

// COULD ABSTRACT THIS INTO SEPARATE FILE
export const LoadDataContext = React.createContext();

export default class App extends Component {
  constructor(props) {
    super(props);

    this.updateProp = (prop, value) => {
      this.setState({ [prop]: value });
    };

    this.saveAircraftConfig = () => {
      acConfigData = {
        config_aircraftType: this.state.config_aircraftType,
        config_aircraftRego: this.state.config_aircraftRego,
        config_aircraftCapacity: this.state.config_aircraftCapacity,
        config_aircraftFuelType: this.state.config_aircraftFuelType,
        config_aircraftFuelBurn: this.state.config_aircraftFuelBurn,
        config_aircraftEmptyWeight: this.state.config_aircraftEmptyWeight,
        config_aircraftMaxTakeoffWeight: this.state
          .config_aircraftMaxTakeoffWeight,
        config_aircraftMaxLandingWeight: this.state
          .config_aircraftMaxLandingWeight,
        config_pilotName: this.state.config_pilotName,
        config_pilotWeight: this.state.config_pilotWeight
      };
      console.log("\nSAVING DATA:");
      console.log(acConfigData, "\n");
      try {
        AsyncStorage.setItem(
          "aircraftConfigurationData",
          JSON.stringify(acConfigData)
        ).then(res => console.log("Data saved.\n", res));
      } catch (err) {
        console.log(err);
      }
    };

    this.addNewPaxToList = ({ paxObject }) => {
      let paxList = this.state.loadsheet_pax;
      paxList.push(paxObject);
      this.setState({ loadsheet_pax: paxList });
    };

    this.state = {
      // CONFIG
      config_aircraftType: "",
      config_aircraftRego: "ZK-***",
      config_aircraftCapacity: "",
      config_aircraftFuelType: "",
      config_aircraftFuelBurn: "", // Litres per Hour
      config_aircraftEmptyWeight: "0", // KG
      config_aircraftMaxTakeoffWeight: "0", // KG
      config_aircraftMaxLandingWeight: "", // KG

      config_pilotName: "",
      config_pilotWeight: "", // KG

      // LOADSHEET
      loadsheet_date: "Today's date",
      loadsheet_route: "",
      loadsheet_etd: "",
      loadsheet_eet: "",
      loadsheet_pax: [],

      // FUNCTIONS
      updateProp: this.updateProp,
      saveAircraftConfig: this.saveAircraftConfig,
      addNewPaxToList: this.addNewPaxToList
    };
  }

  componentDidMount() {
    try {
      AsyncStorage.getItem("aircraftConfigurationData").then(rawData => {
        console.log("Retrieved data:");
        console.log(JSON.parse(rawData));
        let data = JSON.parse(rawData);
        this.setState({
          config_aircraftType: data.config_aircraftType,
          config_aircraftRego: data.config_aircraftRego,
          config_aircraftCapacity: data.config_aircraftCapacity,
          config_aircraftFuelType: data.config_aircraftFuelType,
          config_aircraftFuelBurn: data.config_aircraftFuelBurn, // Litres per Hour
          config_aircraftEmptyWeight: data.config_aircraftEmptyWeight, // KG
          config_aircraftMaxTakeoffWeight: data.config_aircraftMaxTakeoffWeight, // KG
          config_aircraftMaxLandingWeight: data.config_aircraftMaxLandingWeight, // KG

          config_pilotName: data.config_pilotName,
          config_pilotWeight: data.config_pilotWeight // KG
        });
        console.log(this.state);
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <LoadDataContext.Provider value={this.state}>
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
