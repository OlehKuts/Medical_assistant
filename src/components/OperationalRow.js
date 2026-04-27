export const OperationalRow = ({
  data: {
    name,
    bloodGroup,
    rezusFactor,
    age,
    room,
    diagnosis,
    operation,
    surgeon,
    assistant,
  },
  num,
}) => {
  return (
    <tr className="operationalRow">
      <td>{num}</td>
      <td className="operational_tdName">{name}</td>
      <td>
        {bloodGroup}
        {rezusFactor}
      </td>
      <td>{age === 18 ? "" : age}</td>
      <td>{room}</td>
      <td className="operational_tdWide">{diagnosis}</td>
      <td className="operational_tdWide">{operation}</td>
      <td className="operational_tdMiddle">
        {surgeon}
        {assistant === "" ? "" : `/${assistant}`}
      </td>
    </tr>
  );
};
