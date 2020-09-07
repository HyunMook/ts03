export function getSearchParamsToObject(searchParam: string) {
  const rst: any = {};
  searchParam
    .replace('?', '')
    .split('&')
    .forEach((s) => {
      const [_name, _value] = s.split('=');
      rst[_name] = _value;
    });
  return rst;
}

export function escapeJsonString(stringified: string) {
  return stringified.replace(/\\n/g, '\\n');
  // .replace(/\\'/g, "\\'")
  // .replace(/\\"/g, '\\"')
  // .replace(/\\&/g, '\\&')
  // .replace(/\\r/g, '\\r')
  // .replace(/\\t/g, '\\t')
  // .replace(/\\b/g, '\\b')
  // .replace(/\\f/g, '\\f');
}
export function unescapeJsonString(stringified: string) {
  return stringified.replace(/\\n/g, 'n');
  // .replace(/\\'/g, "'")
  // .replace(/\\"/g, '"')
  // .replace(/\\&/g, '&')
  // .replace(/\\r/g, 'r')
  // .replace(/\\t/g, 't')
  // .replace(/\\b/g, 'b')
  // .replace(/\\f/g, 'f');
}
