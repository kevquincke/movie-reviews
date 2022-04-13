import httpClient from '../httpClient';
import { applyQueryParams } from '../helpers';

const API_KEY = 'api-key';
const searchUrl = '/reviews/search.json';

class SearchAPI {
  static doSearch = (query) => {
    return httpClient.get(applyQueryParams(searchUrl, {
      query,
      [API_KEY]: 'your-api-key-here',
    }));
  }
}

export default SearchAPI;
