import { Text } from "./Text";

export const AnalyseItem = ({ patient, analyse, ...props }) => {
  const {
    name,
    birthDate,
    residence,
    doctor,
    diagnosis,
    directionNumber,
    shortName,
  } = patient;
  const date = new Date();
  const stringifiedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  return (
    <div id="directions_analyseItem">
      <div className="directions_centered">{analyse.name.toUpperCase()}</div>
      <div className="directions_analyseLine">
        <Text fontWeight="bold" marginRight="10px" {...props}>
          П.І.Б
        </Text>
        {""}
        <Text>{name}</Text>
      </div>
      <div className="directions_analyseLine">
        <Text fontWeight="bold" marginRight="10px" {...props}>
          Дата народження
        </Text>
        {""}
        <Text>{birthDate}</Text>
      </div>
      <div className="directions_analyseLine">
        <Text fontWeight="bold" marginRight="10px" {...props}>
          Адреса
        </Text>
        {""}
        <Text>{residence}</Text>
      </div>
      <div className="directions_analyseLine">
        <Text fontWeight="bold" marginRight="10px" {...props}>
          Діагноз
        </Text>
        {""}
        <Text>{diagnosis}</Text>
      </div>
      {analyse.needDirection ? (
        <div className="directions_analyseLine">
          <Text fontWeight="bold" marginRight="10px" {...props}>
            № елект. направлення
          </Text>
          {""}
          <Text fontWeight="bold">{directionNumber}</Text>
        </div>
      ) : null}
      <div className="directions_analyseLine">
        <Text fontWeight="bold" marginRight="10px" {...props} size="16px">
          Лікар (ЛОР-відділення)
        </Text>
        {""}
        <Text size="16px">{doctor}</Text>
      </div>
      {!shortName === "Біохімічний" ? (
        <div className="directions_analyseLine">
          <Text fontWeight="bold" marginRight="10px" {...props}>
            Дата
          </Text>
          {""}
          <Text>{stringifiedDate}</Text>{" "}
        </div>
      ) : null}
    </div>
  );
};
