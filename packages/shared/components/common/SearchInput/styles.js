import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 5,
    flexDirection: 'row',
    height: 50,
    width: '100%',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    height: '100%',
    ...Platform.select({ web: { outlineStyle: 'none' } }),
  },
  crossIcon: {
    marginRight: 15,
  },
  magnifyGlassIcon: {
    marginLeft: 10,
  },
});

export default styles;
