import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeholderTitle: {
    textAlign: 'center',
    fontSize: 15,
    opacity: 0.9,
  },
  noResultsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  noResultsTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 15,
  },
  noResultsSub: {
    fontSize: 15,
    opacity: 0.65,
    paddingTop: 10,
  },
  columnWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
  }
});

export default styles;
