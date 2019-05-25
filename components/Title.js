import React from "react";
import { Text, View } from "react-native";

const Title = ({ label }) => {
  return (
    <View style={{ marginVertical: 5 }}>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 20
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default Title;
