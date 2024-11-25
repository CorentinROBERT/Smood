import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: "stretch",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imgLarge: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
    flex: 1,
    resizeMode: "stretch",
  },
  restoName: {
    fontWeight: "bold",
    fontSize: 25,
  },
  container: {
    marginHorizontal: 5,
    height: 300,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
  largeContainer: {
    height: 320,
    borderColor: "black",
    borderWidth: 0,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infos: {
    padding: 10,
  },
  newTag: {
    color: "#D83965",
    fontWeight: "bold",
    paddingRight: 10,
  },
  infosTagPrice: {
    flexDirection: "row",
  },
  tags: {
    flexDirection: "row",
  },
  price: {
    fontWeight: "bold",
  },
  tagName: {
    color: "gray",
    textAlign: "left",
    paddingHorizontal: 5,
  },
  tagsLarge: {
    width: "100%",
    flexDirection: "row",
  },
  tags: {
    width: 300,
  },
});
