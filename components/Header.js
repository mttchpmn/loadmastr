import React, { Component } from "react";
import { View, Text } from "react-native";
import { Font } from "expo";

import Theme from "../Theme";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      audiowide: require("../assets/Audiowide.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        {this.state.fontLoaded ? (
          <Text
            style={{
              fontFamily: "audiowide",
              paddingTop: 3,
              fontSize: 36,
              color: "#fff",
              textAlign: this.props.align || "center",
              paddingHorizontal: 10,
              textShadowColor: Theme.secondaryText,
              textShadowOffset: {
                height: 1,
                width: 1
              }
            }}
          >
            Loadmastr.
          </Text>
        ) : null}
      </View>
    );
  }
}

export default Header;
