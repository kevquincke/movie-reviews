import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#f1f1f191',
    borderColor: '#000',
    borderRadius: 5,
    flex: 1/3,
    height: '100%',
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
},
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 200,
    resizeMode: 'cover',
    width: '100%',
  },
  infoContainer: {
    overflow: 'hidden',
    padding: 20,
    width: '100%',
  },
  title: {
    color: '#081F32',
    fontSize: 20,
    width: '100%',
  },
  summary: {
    color: '#6E798C',
    fontSize: 16,
    marginVertical: 24,
  },
  row: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowInfo: {
    color: '#A5ADBB',
    fontSize: 12,
  },
});

export default styles;
