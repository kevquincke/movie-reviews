import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  resultsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    ...Platform.select({  web: { paddingTop: 40 } }),
  },
  error: {
    textAlign: 'center',
  },
});

export default styles;
