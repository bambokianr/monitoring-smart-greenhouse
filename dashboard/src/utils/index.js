export const validUser = {
  name: "usuário teste",
  token: "123456abcd",
};

export function formatDate(date) {
  const splitDate = date.split("-");
  const time = splitDate[1];
  const mm_dd_yyyy = splitDate[0].split("/");
  const day = mm_dd_yyyy[1];
  const month = mm_dd_yyyy[0];
  const year = mm_dd_yyyy[2].slice(-2);
  const dd_mm_yy = `${day}/${month}/${year}`;

  return `${dd_mm_yy} às ${time}`;
}

export const filterOptions = [
  { key: "week", tag: "última semana" },
  { key: "month", tag: "últimos 30 dias" },
  { key: "all", tag: "todos os dados" },
];

export function filterData(key, data) {
  console.log(key);

  switch (key) {
    case "week":
      console.log("1");
      return data;
    case "month":
      console.log("2");
      return data;
    case "all":
      console.log("3");
      return data;
    default:
      return data;
  }
}
