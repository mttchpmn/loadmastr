import React, { Component } from "react";
import { Button, Text, TextInput, View, ScrollView } from "react-native";

import Header from "../../components/Header";
import Theme from "../../Theme";
import Style from "../../Style";
import { LoadDataContext } from "../../App";
import ConfigInput from "./ConfigInput";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";

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
        <Title label={"Aircraft Configuration"} />
        <LoadDataContext.Consumer>
          {data => (
            <View>
              <View>
                <ConfigInput
                  label={"Aircraft Type"}
                  value={data.config_aircraftType}
                  onChange={text =>
                    data.updateProp("config_aircraftType", text)
                  }
                />

                <ConfigInput
                  label={"Aircraft Registration"}
                  value={data.config_aircraftRego}
                  onChange={text =>
                    data.updateProp("config_aircraftRego", text)
                  }
                />

                <ConfigInput
                  label={"Aircraft Capacity (seats)"}
                  value={data.config_aircraftCapacity}
                  onChange={text =>
                    data.updateProp("config_aircraftCapacity", text)
                  }
                  type={"number-pad"}
                />

                {/* TODO - Make this a drop down */}
                <ConfigInput
                  label={"Aircraft Fuel Type"}
                  value={data.config_aircraftFuelType}
                  onChange={text =>
                    data.updateProp("config_aircraftFuelType", text)
                  }
                />

                <ConfigInput
                  label={"Aircraft Fuel Burn (LPH)"}
                  value={data.config_aircraftFuelBurn}
                  onChange={text =>
                    data.updateProp("config_aircraftFuelBurn", text)
                  }
                  type={"number-pad"}
                />

                <ConfigInput
                  label={"Aircraft Empty Weight (KG)"}
                  value={data.config_aircraftEmptyWeight}
                  onChange={text =>
                    data.updateProp("config_aircraftEmptyWeight", text)
                  }
                  type={"number-pad"}
                />

                <ConfigInput
                  label={"Max Takeoff Weight (KG)"}
                  value={data.config_aircraftMaxTakeoffWeight}
                  onChange={text =>
                    data.updateProp("config_aircraftMaxTakeoffWeight", text)
                  }
                  type={"number-pad"}
                />

                <ConfigInput
                  label={"Max Landing Weight (KG)"}
                  value={data.config_aircraftMaxLandingWeight}
                  onChange={text =>
                    data.updateProp("config_aircraftMaxLandingWeight", text)
                  }
                  type={"number-pad"}
                />

                <ConfigInput
                  label={"Pilot Name"}
                  value={data.config_pilotName}
                  onChange={text => data.updateProp("config_pilotName", text)}
                />

                <ConfigInput
                  label={"Pilot Weight (KG)"}
                  value={data.config_pilotWeight}
                  onChange={text => data.updateProp("config_pilotWeight", text)}
                  type={"number-pad"}
                />
              </View>

              <View
                style={{
                  width: "100%",
                  alignItems: "center"
                }}
              >
                <PrimaryButton
                  label={"Save Configuration"}
                  onPress={() => {
                    data.saveAircraftConfig();
                    this.props.navigation.navigate("Home");
                  }}
                />
              </View>
            </View>
          )}
        </LoadDataContext.Consumer>
      </View>
    );
  }
}

export default FlightConfig;
