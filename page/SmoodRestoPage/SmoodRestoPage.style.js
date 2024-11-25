import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {},
  header: {
    zIndex: 10,
    elevation: 10,
  },
  univers: {
    zIndex: 1,
    elevation: 1,
  },
  title: {
    fontSize: 20,
    color: "gray",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  scrollToTop: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
