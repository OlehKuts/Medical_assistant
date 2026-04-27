export const bloodGroupList = [
  { name: "група крові", value: "" },
  { name: "0(I)", value: "0(I)" },
  { name: "A(II)", value: "A(II)" },
  { name: "B(III)", value: "B(III)" },
  { name: "AB(IV)", value: "AB(IV)" },
];
export const rezusFactorList = [
  { name: "резус-фактор", value: "" },
  { name: "+", value: "+" },
  { name: "-", value: "-" },
];

export const diagnosisTypeList = [
  { name: "Діагноз", diagnosis: "", operation: "" },
  {
    name: "Аденоїди",
    diagnosis: "Аденоїди III ступеню",
    operation: "Аденотомія",
  },
  {
    name: "Епітимпаніт",
    diagnosis: "Хронічний правобічний епітимпаніт",
    operation: "Тимпанопластика праворуч",
  },
  {
    name: "Множинний карієс",
    diagnosis: "Множинний карієс зубів",
    operation: "Санація порожнини рота",
  },
  {
    name: "Коротка вуздечка язика",
    diagnosis: "Коротка вуздечка язика",
    operation: "Пластична френулотомія язика",
  },
  {
    name: "Коротка вуздечка верхньої губи",
    diagnosis: "Коротка вуздечка верхньої губи",
    operation: "Пластична френулотомія верхньої губи",
  },
  {
    name: "Новоутвір",
    diagnosis: "Новоутвір",
    operation: "Ексцизійна біопсія новоутвору",
  },
  {
    name: "Кіста верхньої щелепи",
    diagnosis: "Кіста верхньої щелепи",
    operation: "Цистектомія верхньої щелепи",
  },
  {
    name: "Кіста нижньої щелепи",
    diagnosis: "Кіста нижньої щелепи",
    operation: "Цистектомія нижньої щелепи",
  },
  {
    name: "Ретенція зубів",
    diagnosis: "Ретенція зубів",
    operation: "Атипове видалення зубів",
  },
  {
    name: "Надкомплектні зуби",
    diagnosis: "Надкомплектні дистоповані зуби",
    operation: "Видалення надкомплектних зубів",
  },
];
export const emptyPatient = {
  name: "",
  bloodGroup: "",
  rezusFactor: "",
  age: 18,
  room: "",
  diagnosis: "",
  operation: "",
  surgeon: "",
  assistant: "",
};
