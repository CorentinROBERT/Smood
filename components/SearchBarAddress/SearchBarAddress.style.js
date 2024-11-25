import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    borderRadius: 10,
    backgroundColor: "white",
    height: 30,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  proposalContainer: {
    marginHorizontal: 5,
    flex: 1,
    padding: 5,
    borderColor: "#ccc",
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    zIndex: 100,
    elevation: 10,
  },
  touchableItem: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
