import React, { useCallback, useState } from 'react';
import { TextInput, View } from 'react-native';
import { func, string } from 'prop-types';

import styles from './styles';
import IconButton from '../IconButton';
import MagnifyGlassIcon from '../../../assets/icons/magnifyingGlass.svg';
import CrossIcon from '../../../assets/icons/cross.svg';

const SearchInput = ({ onSearch, placeholder }) => {
  const [query, setQuery] = useState();

  const clearQuery = useCallback(() => {
    setQuery('');
  }, []);

  return (
    <View style={styles.container}>
      <IconButton
        icon={<MagnifyGlassIcon height={30} width={30} />}
        onPress={() => onSearch(query)}
        style={styles.magnifyGlassIcon}
      />
      <TextInput
        onChangeText={setQuery}
        value={query}
        placeholder={placeholder}
        style={styles.textInput}
      />
      {!!query &&
        <IconButton
          icon={<CrossIcon height={15} width={15} />}
          onPress={clearQuery}
          style={styles.crossIcon}
        />
      }
    </View>
  );
}

SearchInput.propTypes = {
  onSearch: func.isRequired,
  placeholder: string,
}

export default SearchInput;
