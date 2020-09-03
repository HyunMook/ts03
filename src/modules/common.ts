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
