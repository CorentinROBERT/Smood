import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "50%",
  },
  input: {
    borderRadius: 10,
    backgroundColor: "white",
    height: 30,
    borderWidth: 2,
    borderColor: "black",
    paddingLeft: 10,
  },
  proposalContainer: {
    padding: 5,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: "5",
    borderWidth: 1,
    position: "absolute",
    marginTop: 30,
    zIndex: 1,
    elevation: 10,
  },
});
