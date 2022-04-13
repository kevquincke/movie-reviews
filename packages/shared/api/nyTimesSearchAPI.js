import httpClient from '../httpClient';
import { applyQueryParams } from '../helpers';

const apiKey = 'api-key';
const searchUrl = '/reviews/search.json';

class SearchAPI {
  static doSearch = (query) => {
    console.log(query);
    return httpClient.get(applyQueryParams(searchUrl, {
      query,
      [apiKey]: 'api-key'
    }));
  }
}

export default SearchAPI;
