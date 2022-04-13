import queryString from 'query-string';

export const applyQueryParams = (
  url,
  params = {},
) => {
  if (!params) {
    return url;
  }
  const queryParams = queryString.stringify(params);
  return `${url}?${queryParams}`;
};
