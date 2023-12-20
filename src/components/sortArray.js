import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

// const sorter = (a, b) => {
//   const day1 = dayjs(a.date, "DD.MM.YYYY");
//   const day2 = dayjs(b.date, "DD.MM.YYYY");

//   if (dayjs(day1).isAfter(dayjs(day2))) {
//     return -1;
//   }
//   if (dayjs(day1).isBefore(dayjs(day2))) {
//     return 1;
//   }
//   // a должно быть равным b
//   if (dayjs(day1).isSame(dayjs(day2))) {
//     return 0;
//   }
// }

const sortArray = (dataArray, sorter) => {
  const sortedArray = dataArray.sort(sorter);

  return sortedArray;
}

export default sortArray