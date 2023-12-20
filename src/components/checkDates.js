/* eslint-disable react/prop-types */
import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const checkDates = (dataArray = [], checkingItem) => {
  let double = dataArray.find(item => {
    // debugger
    const day1 = dayjs(item.date, "DD.MM.YYYY");
    const day2 = dayjs(checkingItem.date, "DD.MM.YYYY");
    if (dayjs(day2).isSame(dayjs(day1))) {
      return true
    } 
    return false;
  });

  console.log(double);

  if (double) {
    double.steps = `${+double.steps + +checkingItem.steps}`;
  } else {
    dataArray.push(checkingItem);
  }
  // debugger
  return dataArray;
}

export default checkDates;