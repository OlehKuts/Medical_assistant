import { Component } from "react";
import {
  bloodGroupList,
  rezusFactorList,
  diagnosisTypeList,
} from "../initialData/operationalListData";
import { numArrayCreator } from "../utils/operationalUtils";
const ageList = numArrayCreator(0, 17);
const roomList = numArrayCreator(1, 7);

export class OperationalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      diagnosis: diagnosisTypeList[0].diagnosis,
      operation: diagnosisTypeList[0].operation,
      bloodGroup: bloodGroupList[0].value,
      rezusFactor: rezusFactorList[0].value,
      age: ageList[0],
      room: roomList[0],
      surgeon: this.props.doctors[0].value,
      assistant: this.props.doctors[0].value,
      diagnosisType: diagnosisTypeList[0].name,
      diagnosisIdx: 0,
      time: 30,
    };
    this.nameChange = this.nameChange.bind(this);
    this.diagnosisChange = this.diagnosisChange.bind(this);
    this.diagnosisTypeChange = this.diagnosisTypeChange.bind(this);
    this.operationChange = this.operationChange.bind(this);
    this.bloodGroupChange = this.bloodGroupChange.bind(this);
    this.rezusFactorChange = this.rezusFactorChange.bind(this);
    this.ageChange = this.ageChange.bind(this);
    this.roomChange = this.roomChange.bind(this);
    this.surgeonChange = this.surgeonChange.bind(this);
    this.assistantChange = this.assistantChange.bind(this);
    this.timeChange = this.timeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  diagnosisChange(event) {
    this.setState({ diagnosis: event.target.value });
  }
  diagnosisTypeChange(event) {
    this.setState({
      diagnosisType: event.target.value,
      diagnosisIdx: event.target.value,
    });
  }
  operationChange(event) {
    this.setState({ operation: event.target.value });
  }
  nameChange(event) {
    this.setState({ name: event.target.value });
  }
  bloodGroupChange(event) {
    this.setState({
      bloodGroup: event.target.value,
      diagnosis: diagnosisTypeList[this.state.diagnosisIdx].diagnosis,
      operation: diagnosisTypeList[this.state.diagnosisIdx].operation,
      time: diagnosisTypeList[this.state.diagnosisIdx].time,
    });
  }
  rezusFactorChange(event) {
    this.setState({ rezusFactor: event.target.value });
  }
  ageChange(event) {
    this.setState({ age: event.target.value });
  }
  roomChange(event) {
    this.setState({ room: event.target.value });
  }
  surgeonChange(event) {
    this.setState({ surgeon: event.target.value });
  }
  assistantChange(event) {
    this.setState({ assistant: event.target.value });
  }
  timeChange(event) {
    this.setState({ time: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name === "") {
      alert(`Не вказано пацієнта!`);
      return;
    }
    if (this.state.diagnosis === "") {
      alert(`Не вказано діагноз!`);
      return;
    }
    if (this.state.operation === "") {
      alert(`Не вказано операцію!`);
      return;
    }
    if (this.state.surgeon === "") {
      alert(`Не вказано хірурга!`);
      return;
    }

    if (this.state.assistant === this.state.surgeon) {
      alert(`Хірург та асистент повинні бути різними лікарями!`);
      return;
    }
    alert("Пацієнта додано!");
    this.props.addPatient(
      this.state.name,
      this.state.diagnosis,
      this.state.operation,
      this.state.bloodGroup,
      this.state.rezusFactor,
      this.state.age,
      this.state.room,
      this.state.surgeon,
      this.state.assistant,
      this.state.time,
    );
    this.setState({
      name: "",
      diagnosis: "",
      operation: "",
      bloodGroup: bloodGroupList[0].value,
      rezusFactor: rezusFactorList[0].value,
      age: ageList[0],
      room: roomList[0],
      surgeon: this.props.doctors[0].value,
      assistant: this.props.doctors[0].value,
      diagnosisType: "",
    });
  }

  render() {
    return (
      <>
        <div className="operational_form">
          <form onSubmit={this.handleSubmit}>
            <div className="operational_formLine">
              <input
                className="operational_longInput"
                type="text"
                value={this.state.name}
                onChange={this.nameChange}
                placeholder="П.І.Б. пацієнта..."
              />
              <select
                value={this.state.diagnosisType}
                onChange={this.diagnosisTypeChange}
                className="operational_middleSelect"
              >
                {diagnosisTypeList.map((item, idx) => (
                  <option value={idx} key={idx}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="operational_formLine">
              <select
                className="operational_middleSelect"
                value={this.state.bloodGroup}
                onChange={this.bloodGroupChange}
              >
                {bloodGroupList.map((item, idx) => (
                  <option value={item.value} key={idx}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select
                className="operational_middleSelect"
                value={this.state.rezusFactor}
                onChange={this.rezusFactorChange}
              >
                {rezusFactorList.map((item, idx) => (
                  <option value={item.value} key={idx}>
                    {item.name}
                  </option>
                ))}
              </select>
              <label>
                Вік
                <select
                  value={this.state.age}
                  onChange={this.ageChange}
                  className="operational_shortSelect"
                >
                  {ageList.map((item, idx) => (
                    <option value={item} key={idx}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Палата
                <select
                  className="operational_shortSelect"
                  value={this.state.room}
                  onChange={this.roomChange}
                >
                  {roomList.map((item, idx) => (
                    <option value={item} key={idx}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <select
                value={this.state.surgeon}
                onChange={this.surgeonChange}
                className="operational_middleSelect"
              >
                {this.props.doctors.map(({ title, id, value }) => (
                  <option value={value} key={id}>
                    {title}
                  </option>
                ))}
              </select>
              <select
                value={this.state.assistant}
                onChange={this.assistantChange}
                className="operational_middleSelect"
              >
                {this.props.doctors.map(({ title, id, value }) => (
                  <option value={value} key={id}>
                    {title}
                  </option>
                ))}
              </select>
            </div>
            <div className="operational_formLine">
              <input
                className="operational_longInput"
                type="text"
                value={this.state.diagnosis}
                onChange={this.diagnosisChange}
                placeholder="Діагноз..."
              />
              <input
                className="operational_longInput"
                type="text"
                value={this.state.operation}
                onChange={this.operationChange}
                placeholder="Операція..."
              />
            </div>
            <div className="operational_sendLine">
              <button className="submit" type="submit">
                Додати пацієнта
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
