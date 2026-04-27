import { Component } from "react";
import { numArrayCreator } from "../utils/operationalUtils";
const patientsMaxLength = numArrayCreator(1, 15);

export class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientNum: patientsMaxLength[0],
    };
    this.patientNumChange = this.patientNumChange.bind(this);
  }
  patientNumChange(event) {
    this.setState({ patientNum: event.target.value });
  }
  clearList = () => {
    this.props.clearList();
  };
  removePatient = () => {
    this.props.removePatient(this.state.patientNum);
  };
  addEmptyLine = () => {
    this.props.addEmptyLine();
  };

  render() {
    return (
      <div className="operational_controls">
        <hr />
        <button className="operationalBtn" onClick={this.clearList}>
          Очистити список
        </button>
        <label>
          № пацієнта
          <select
            value={this.state.patientNum}
            onChange={this.patientNumChange}
            className="operational_shortSelect"
          >
            {patientsMaxLength.map((item, idx) => (
              <option value={item} key={idx}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <button className="operationalBtn" onClick={this.removePatient}>
          Видалити пацієнта
        </button>
        <button className="operationalBtn" onClick={this.addEmptyLine}>
          Додати пусте поле
        </button>
        <hr />
      </div>
    );
  }
}
