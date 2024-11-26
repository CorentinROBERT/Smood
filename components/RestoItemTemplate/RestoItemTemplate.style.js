import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imgLarge: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
    flex: 1,
    resizeMode: "cover",
  },
  restoName: {
    fontWeight: "bold",
    fontSize: 25,
  },
  container: {
    width: 300,
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
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D83965",
    position: "absolute",
    backgroundColor: "#FFFFFF",
    bottom: 5,
    right: 5,
    overflow: "hidden",
  },
  infosTagPrice: {
    flexDirection: "row",
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  price: {
    fontWeight: "bold",
    color: "#D83965",
  },
  tagName: {
    color: "gray",
  },
  tagsLarge: {
    width: "100%",
    flexDirection: "row",
  },
  separator: {
    color: "gray",
  },
  timeFee: {
    flexDirection: "row",
    alignItems: "center",
  },
  topInfos: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
