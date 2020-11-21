export function formatDateToLegend(date) {
  const splitDate = date.split("-");
  return `${splitDate[0]} às ${splitDate[1]}`;
}