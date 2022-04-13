import React, { useCallback, useState } from 'react';
import { TextInput, View } from 'react-native';
import { func, string } from 'prop-types';

import styles from './styles';
import IconButton from '../IconButton';
import MagnifyGlassIcon from '../../assets/icons/magnifyingGlass.svg';
import CrossIcon from '../../assets/icons/cross.svg';

const SearchInput = ({ onSearch, onClearQuery, placeholder }) => {
  const [query, setQuery] = useState('');

  const clearQuery = useCallback(() => {
    setQuery('');
    onClearQuery();
  }, [setQuery]);

  const onDoSearch = useCallback(() => {
    onSearch(query);
  }, [onSearch, query]);

  return (
    <View style={styles.container}>
      <IconButton
        icon={<MagnifyGlassIcon height={30} width={30} />}
        onPress={onDoSearch}
        style={styles.magnifyGlassIcon}
      />
      <TextInput
        value={query}
        placeholder={placeholder}
        onChangeText={setQuery}
        onSubmitEditing={onDoSearch}
        autoCorrect={false}
        keyboardType="default"
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
  onClearQuery: func.isRequired,
  placeholder: string,
}

export default SearchInput;
