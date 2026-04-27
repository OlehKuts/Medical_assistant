import { useState } from "react";
import { OperationalForm } from "./OperationalForm";
import { OperationalDateForm } from "./OperationalDateForm";
import { defineTomorrowDate } from "../utils/operationalUtils";
import { emptyPatient } from "../initialData/operationalListData";
import { Controls } from "./Controls";
import { OperationalTable } from "./OperationalTable";

export const OperationalList = ({ onHideNavbar, doctors }) => {
  const [showForms, setShowForms] = useState(true);
  const [store, setStore] = useState({
    patients: [],
    date: defineTomorrowDate(),
  });

  const addEmptyLine = () => {
    setStore({ ...store, patients: [...store.patients, emptyPatient] });
  };
  const clearList = () => {
    setStore({ ...store, patients: [] });
  };
  const sortPatients = () => {
    const newPatients = [...store.patients].sort(function (a, b) {
      return Number(a.age) - Number(b.age);
    });
    setStore({ ...store, patients: newPatients });
  };
  const removePatient = (index) => {
    const newPatients = [...store.patients].filter(
      (p, idx) => idx !== index - 1,
    );
    setStore({ ...store, patients: newPatients });
  };
  const addPatient = (
    name,
    diagnosis,
    operation,
    bloodGroup,
    rezusFactor,
    age,
    room,
    surgeon,
    assistant,
    time,
  ) => {
    const newPatient = {
      name: name,
      bloodGroup: bloodGroup,
      rezusFactor: rezusFactor,
      age: age,
      room: room,
      diagnosis: diagnosis,
      operation: operation,
      surgeon: surgeon,
      assistant: assistant,
      time,
    };
    setStore({ ...store, patients: [...store.patients, newPatient] });
  };
  const changeDate = (newDate) => {
    setStore({ ...store, date: newDate });
  };
  const readyToPrint = () => {
    if (!store.patients.length) {
      alert("Додайте пацієнтів або пусті поля для друку списку!");
      return;
    }
    sortPatients();
    setShowForms(false);
    onHideNavbar();
  };
  return (
    <div className="operational_main">
      {showForms && (
        <>
          <OperationalDateForm store={store} changeDate={changeDate} />
          <hr />
          <OperationalForm
            store={store}
            addPatient={addPatient}
            doctors={doctors}
          />
        </>
      )}
      <div className="operational_header">СПИСОК</div>
      <div className="operational_header">
        операцій отоларингологічного відділення на {store.date} року
      </div>
      {showForms && (
        <>
          <Controls
            store={store}
            clearList={clearList}
            removePatient={removePatient}
            addEmptyLine={addEmptyLine}
          />
        </>
      )}
      <OperationalTable store={store} />
      {!showForms && (
        <>
          <div className="operational_flexBetween" id="footer">
            <div>Заступник головного лікаря з хірургічної частини</div>
            <div>В.В.Білинський</div>
          </div>
          <div className="operational_flexBetween">
            <div>Завідувач отоларингологічного відділення</div>
            <div>В.Г.Корицький</div>
          </div>
        </>
      )}
      {showForms && (
        <div style={{ marginTop: "10px" }}>
          <button className="operationalReadyBtn" onClick={readyToPrint}>
            Готово до друку
          </button>
        </div>
      )}
    </div>
  );
};
