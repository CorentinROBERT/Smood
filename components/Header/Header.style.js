import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 2,
  },
  img: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 20,
    color: "#D83965",
    fontWeight: "bold",
  },
  searchbar: {
    zIndex: 10,
  },
});
