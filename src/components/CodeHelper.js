import React, { useState, useEffect } from "react";
import {
  maxilloSortedList,
  otoSortedList,
} from "../initialData/codeHelperData";

export const CodeHelper = () => {
  const [currentList, setCurrentList] = useState(maxilloSortedList);
  const [isOtolaryngology, setIsOtolaryngology] = useState(false);
  const onIsOtolaryngologyChange = (e) => {
    setIsOtolaryngology(!isOtolaryngology);
  };
  const [disease, setDisease] = useState("");
  const onDiseaseChange = (e) => {
    setDisease(e.target.value);
  };
  const [code, setCode] = useState("");
  const [codeIcpc, setCodeIcpc] = useState("");
  const [codeAkmi, setCodeAkmi] = useState("");
  const [codeAkmiAdd, setCodeAkmiAdd] = useState("");
  const [opName, setOpName] = useState("");
  const [opAddName, setOpAddName] = useState("");

  const onChooseDisease = () => {
    setCodeIcpc(currentList.find((i) => i.name === disease).codeIcpc);
    setCode(currentList.find((i) => i.name === disease).code);
    setCodeAkmi(currentList.find((i) => i.name === disease).codeAkmi);
    setCodeAkmiAdd(function () {
      let result = currentList.find((i) => i.name === disease).codeAkmiAdd;
      result = result === undefined ? "" : result;
      return result;
    });
    setOpName(currentList.find((i) => i.name === disease).opName);
    setOpAddName(function () {
      let result = currentList.find((i) => i.name === disease).opAddName;
      result = result === undefined ? "" : result;
      return result;
    });
  };
  const copyFunction = (element) => {
    element.select();
    document.execCommand("copy");
    alert(`Скопійовано в буфер обміну!`);
  };
  const copyCode = () => {
    const copyText = document.getElementById("code");
    copyFunction(copyText);
  };
  const copyCodeIcpc = () => {
    const copyText = document.getElementById("codeIcpc");
    copyFunction(copyText);
  };
  const copyCodeAkmi = () => {
    const copyText = document.getElementById("codeAkmi");
    copyFunction(copyText);
  };
  const copyCodeAkmiAdd = () => {
    const copyText = document.getElementById("codeAkmiAdd");
    copyFunction(copyText);
  };
  useEffect(() => {
    setCurrentList(isOtolaryngology ? otoSortedList : maxilloSortedList);
  }, [isOtolaryngology]);
  return (
    <div className="codeHelper">
      <div className="helper_header">
        <div className="helper_heading">код-помічник</div>
      </div>

      <div className="helper_container">
        {" "}
        <div className="checkboxLine">
          <div>ЛОР-патологія</div>
          <div>
            <input
              className="helper_checkbox"
              type="checkbox"
              value={isOtolaryngology}
              onChange={onIsOtolaryngologyChange}
              checked={isOtolaryngology}
            />
          </div>
        </div>
        <div className="helper_line">
          <select id="helper_select" value={disease} onChange={onDiseaseChange}>
            {currentList.map((item, idx) => (
              <option value={item.name} key={idx}>
                {item.name}
              </option>
            ))}
          </select>
          <button onClick={onChooseDisease}>Обрати</button>{" "}
        </div>
        <div className="helper_line">
          <label> Причина </label>
          <input readOnly value={codeIcpc} id="codeIcpc" />{" "}
          <button onClick={copyCodeIcpc}>Копіювати</button>{" "}
        </div>
        <div className="helper_line">
          <label> Діагноз </label>
          <input readOnly value={code} id="code" />{" "}
          <button onClick={copyCode}>Копіювати</button>{" "}
        </div>
        <div className="helper_line">
          <label> Операція</label>
          <input readOnly value={codeAkmi} id="codeAkmi" />{" "}
          <button onClick={copyCodeAkmi}>Копіювати</button>
        </div>
        {codeAkmiAdd !== "" && (
          <div className="helper_line">
            <label> Операція 2</label>
            <input type="text" value={codeAkmiAdd} id="codeAkmiAdd" />{" "}
            <button onClick={copyCodeAkmiAdd}>Копіювати</button>
          </div>
        )}
        <div className="helper_line">
          <label> {codeAkmi}</label>
          <label id="helper_longLabel">{opName}</label>
        </div>
        <div className="helper_line">
          <label> {codeAkmiAdd}</label>
          <label id="helper_longLabel">{opAddName}</label>
        </div>
      </div>
    </div>
  );
};
