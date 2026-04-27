export const randomizer = () => {
  const randomNumber = (Math.random() * 10).toFixed();
  const month = Number(new Date().getMonth());
  const firstNumber = month === 0 ? 1 : month;
  return `${firstNumber}${randomNumber}`;
};

export const maleChecker = (namesArray, testString = "Куц Олена Василівна") => {
  let index1 = testString.indexOf(" ");
  index1 += 1;
  const sliced = testString.slice(index1);
  const index2 = sliced.indexOf(" ");
  const finalName = sliced.slice(0, index2);
  const result = namesArray.some((n) => n === finalName);
  return result;
};

export const finalVersionCreator = (
  date,
  startDate,
  finalDate,
  childType1,
  childType2,
  doctor,
  name,
  birthDate,
  diagnosis,
  deferment,
) => {
  return {
    date,
    startDate,
    finalDate,
    childType1,
    childType2,
    doctor,
    name,
    birthDate,
    diagnosis,
    deferment,
  };
};
