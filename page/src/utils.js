export function getTableData(data) {
  const list = [];
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const value = data[key];
      list.push({ key, value });
    }
  }
}
