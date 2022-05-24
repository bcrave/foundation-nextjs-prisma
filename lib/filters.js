export const filterDataByText = (string, data) => {
  const dataToFilter = data.map((item) => item);
  const filteredData = dataToFilter.filter((dataObject) =>
    Object.values(dataObject).some((value) =>
      value.toString().toLowerCase().startsWith(string.toLowerCase())
    )
  );

  return filteredData;
};
