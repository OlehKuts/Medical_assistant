import { Component } from "react";
import { OperationalRow } from "./OperationalRow";

export class OperationalTable extends Component {
  render() {
    const { store } = this.props;
    return (
      <table className="operationalTable">
        <thead>
          <tr>
            <td>№</td>
            <td className="operational_tdWide">П.І.Б пацієнта</td>
            <td>Група крові</td>
            <td>Вік</td>
            <td>Палата</td>
            <td className="operational_tdWide">Дігноз</td>
            <td className="operational_tdWide">Операція</td>
            <td className="operational_tdMiddle">Хірурги/Асистенти</td>
          </tr>
        </thead>
        <tbody>
          {store.patients.map((p, idx) => (
            <OperationalRow data={p} key={idx} num={idx + 1} />
          ))}
        </tbody>
      </table>
    );
  }
}
