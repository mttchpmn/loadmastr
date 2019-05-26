import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

import Theme from "../../Theme";

const PaxItem = ({ data }) => {
  return (
    <View>
      <View>
        <Icon name={"md-person"} size={30} color={Theme.primaryText} />

        <View>
          <Text>{data.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default PaxItem;
