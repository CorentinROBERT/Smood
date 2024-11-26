import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {},
  scrollContainer: {
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    color: 'gray',
    paddingHorizontal: 10,
  },

  text: {
    marginVertical: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  univer: {
    marginBottom: 5,
    backgroundColor: 'white',
    marginTop: 5,
    borderRadius: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
