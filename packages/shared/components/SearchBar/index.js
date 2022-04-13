import React, { useCallback } from 'react';

import SearchInput from '../common/SearchInput';
import SearchAPI from '../../api/nyTimesSearchAPI';

const SearchBar = () => {
  const onSearch = useCallback(async (searchTerm) => {
    const response = await SearchAPI.doSearch(searchTerm);
  }, []);

  return (
    <SearchInput
      placeholder="Search for movie titles to get reviews"
      onSearch={onSearch}
    />
  );
}

export default SearchBar;