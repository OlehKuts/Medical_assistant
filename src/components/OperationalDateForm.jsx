import { Component } from "react";

export class OperationalDateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.store.date,
    };
    this.dateChange = this.dateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  dateChange(event) {
    this.setState({ date: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.changeDate(this.state.date);
  }
  render() {
    return (
      <div className="operational_dateForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            Дата
            <input
              type="text"
              value={this.state.date}
              onChange={this.dateChange}
              id="operational_middleInput"
            />
          </label>
          <button type="submit" className="operational_submit">
            {" "}
            Змінити
          </button>
        </form>
      </div>
    );
  }
}
