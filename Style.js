import Theme from "./Theme";

module.exports = {
  flexContainer: {
    backgroundColor: Theme.background,
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  flexRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
};
