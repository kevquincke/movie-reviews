import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { string } from 'prop-types';

import styles from './styles';

const SearchBar = ({ placeholder }) => {
  const [query, setQuery] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setQuery}
        value={query}
        placeholder={placeholder}
        style={styles.textInput}
      />
    </View>
  );
}

SearchBar.propTypes = {
  placeholder: string,
  inputStyle: string,
}

export default SearchBar;
