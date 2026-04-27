export const defineTomorrowDate = () => {
  const initDate = new Date();
  const isLastDay = lastDayInMonthChecker();
  const dateStr = isLastDay
    ? `1.${initDate.getMonth() + 2}.${initDate.getFullYear()}`
    : `${initDate.getDate() + 1}.${
        initDate.getMonth() + 1
      }.${initDate.getFullYear()}`;
  return dateStr;
};
const lastDayInMonthChecker = () => {
  const initDate = new Date();
  const day = Number(initDate.getDate());
  const month = Number(initDate.getMonth() + 1);
  let result =
    day === 28 && month === 2
      ? true
      : day === 30 &&
          (month === 4 || month === 6 || month === 9 || month === 11)
        ? true
        : day === 31
          ? true
          : false;
  return result;
};

export const minutesToHoursConverter = (minutes) => {
  const numberedMins = Number(minutes);
  const mins = numberedMins % 60;
  let hours = (numberedMins / 60).toFixed(0);
  const result =
    numberedMins < 60 ? `${mins} хвилин` : `${hours} год. ${mins} хвилин`;
  return result;
};

export const numArrayCreator = (first, quantity) => {
  let arr = [];
  for (let i = first; i < quantity + 1; i++) {
    arr.push(i);
  }
  return arr;
};
