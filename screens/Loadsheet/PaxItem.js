import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

import Theme from "../../Theme";
import Style from "../../Style";

const PaxItem = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: Theme.primaryLight,
        width: "100%",
        height: 70,
        marginBottom: 7
      }}
    >
      <View style={[Style.flexRow]}>
        <View
          style={{
            height: "100%",
            width: "16%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Icon name={"md-person"} size={50} color={Theme.primaryText} />
        </View>

        <View style={{ width: "84%", height: "100%" }}>
          <View
            style={[
              Style.flexRow,
              {
                height: "60%",
                width: "100%",
                paddingLeft: 40,
                paddingRight: 25
              }
            ]}
          >
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {data.name}
              </Text>
            </View>
            <View>
              <Text>{data.weight} KG</Text>
            </View>
          </View>

          <View
            style={[
              Style.flexRow,
              {
                height: "40%",
                width: "100%",
                paddingLeft: 30,
                paddingRight: 25
              }
            ]}
          >
            <View
              style={{
                height: "100%",
                width: 40,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {data.hasInfant ? (
                <Icon
                  name={"md-person-add"}
                  size={20}
                  color={Theme.primaryText}
                />
              ) : null}
            </View>

            <View style={Style.flexRow}>
              <View>
                <Text>{data.infantName}</Text>
              </View>

              <View>
                <Text>
                  {data.infantWeight} {data.hasInfant ? "KG" : null}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaxItem;
