import React, { Component } from "react";
import { StyleSheet, FlatList, Text, View, Switch } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "@expo/vector-icons/Ionicons";

import Header from "../../components/Header";
import Theme from "../../Theme";
import Style from "../../Style";
import Title from "../../components/Title";
import PrimaryButton from "../../components/PrimaryButton";
import { LoadDataContext } from "../../App";
import ContentModal from "../../components/ContentModal";
import DataInput from "../../components/DataInput";
import PaxItem from "./PaxItem";

class PaxDetails extends Component {
  static navigationOptions = {
    tabBarIcon: <Icon name={"md-contacts"} size={35} color={"#fff"} />
  };

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,

      // Empty props of the paxObject skeleton
      newPaxInfantWeight: "",
      newPaxWeight: "",
      newPaxHasInfant: false,
      newPaxInfantWeight: ""
    };
  }

  render() {
    return (
      <View style={{ height: "100%", width: "100%" }}>
        <Title label={"Passenger Details"} />
        <LoadDataContext.Consumer>
          {data => (
            <View style={{ alignItems: "center" }}>
              {data.loadsheet_pax.length === 0 ? (
                <Text>The aircraft is currently empty</Text>
              ) : null}

              <ContentModal
                visible={this.state.modalOpen}
                onClose={() => {
                  this.setState({ modalOpen: false });
                }}
              >
                <View
                  style={{
                    alignItems: "center"
                  }}
                >
                  <Title label={"New passenger"} />
                  <DataInput
                    label={"Name"}
                    value={this.state.newPaxName}
                    onChange={newPaxName => this.setState({ newPaxName })}
                  />

                  <DataInput
                    label={"Weight (KG)"}
                    value={this.state.newPaxWeight}
                    onChange={newPaxWeight => this.setState({ newPaxWeight })}
                  />

                  <View
                    style={{
                      width: "100%",
                      height: 60,
                      paddingHorizontal: 10,
                      paddingVertical: 5
                    }}
                  >
                    <View style={Style.flexRow}>
                      <Text style={{ fontSize: 16 }}>
                        Travelling with Infant?
                      </Text>
                      <Switch
                        value={this.state.newPaxHasInfant}
                        onValueChange={() =>
                          this.setState(state => ({
                            newPaxHasInfant: !state.newPaxHasInfant
                          }))
                        }
                      />
                    </View>
                  </View>
                  {this.state.newPaxHasInfant ? (
                    <DataInput
                      label={"Infant Weight"}
                      value={this.state.newPaxInfantWeight}
                      onChange={newPaxInfantWeight =>
                        this.setState({ newPaxInfantWeight })
                      }
                    />
                  ) : null}
                  <PrimaryButton
                    label={"Add to payload"}
                    onPress={() => {
                      let paxObject = {};
                      (paxObject.name = this.state.newPaxName),
                        (paxObject.weight = this.state.newPaxWeight),
                        (paxObject.hasInfant = this.state.newPaxHasInfant),
                        (paxObject.infantWeight = this.state.newPaxInfantWeight);
                      console.log("OBJ", paxObject);
                      data.addNewPaxToList({ paxObject });
                      this.setState({ modalOpen: false });
                    }}
                  />
                </View>
              </ContentModal>

              {data.loadsheet_pax.map(item => {
                return (
                  <PaxItem data={item} key={`${item.name}-${item.weight}`} />
                );
              })}

              {/* NOT SURE WHY HAVE TO ADD TEH MINUS 1 ??? */}
              {data.loadsheet_pax.length <
              parseInt(data.config_aircraftCapacity, 10) - 1 ? (
                <PrimaryButton
                  label={"Add a new passenger"}
                  onPress={() => {
                    // data.addPaxToList();
                    this.setState({ modalOpen: true });
                  }}
                />
              ) : (
                <Title label={"Aircraft is at max capacity"} />
              )}
            </View>
          )}
        </LoadDataContext.Consumer>
      </View>
    );
  }
}

export default PaxDetails;
