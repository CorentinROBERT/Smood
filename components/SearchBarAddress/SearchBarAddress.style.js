import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderRadius: 10,
    backgroundColor: "white",
    height: 30,
    borderWidth: 2,
    borderColor: "black",
    paddingLeft: 10,
    marginHorizontal: 5,
  },
  proposalContainer: {
    flex: 1,
    padding: 5,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: "5",
    borderWidth: 1,
    zIndex: 100,
    elevation: 10,
    marginTop: 30,
    position: "absolute",
  },
});
