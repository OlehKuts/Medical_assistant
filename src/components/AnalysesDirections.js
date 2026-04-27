import { useState, useMemo } from "react";
import {
  msDiagonosis,
  analyses,
  lorDiagonosis,
  townList,
  examinationTemplate,
} from "../initialData/directionsData";
import { AnalyseItem } from "./AnalyseItem";

export const AnalysesDirections = ({ onHideNavbar, doctors }) => {
  const [showForm, setShowForm] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [diagnosisList, setDiagnosisList] = useState(lorDiagonosis);
  const [patient, setPatient] = useState({
    name: "",
    birthDate: "",
    doctor: "",
    diagnosis: "",
    residence: "",
    directionNumber: "",
  });
  const [residence, setResidence] = useState("");
  const [currentExaminationName, setCurrentExaminationName] = useState("");
  const [ownExaminations, setOwnExaminations] = useState(
    [...analyses].filter((item) => item.forLor),
  );

  const deleteAnalyse = (analyseId) => {
    setOwnExaminations(ownExaminations.filter((item) => item.id !== analyseId));
  };
  const analyseNames = useMemo(() => {
    return ownExaminations.map((item) => {
      return { name: item.shortName, id: item.id };
    });
  }, [ownExaminations]);
  return (
    <div className="directions">
      <>
        {showForm && (
          <div className="directions_dateForm">
            <div className="directions_formLine">
              <button
                onClick={() => {
                  setDiagnosisList(lorDiagonosis);
                  setOwnExaminations(
                    [...analyses].filter((item) => item.forLor),
                  );
                }}
                id={
                  diagnosisList === lorDiagonosis ? "directions_activeBtn" : ""
                }
              >
                ЛОР
              </button>
              <button
                onClick={() => {
                  setDiagnosisList(msDiagonosis);
                  setOwnExaminations(
                    [...analyses].filter((item) => item.forDent),
                  );
                }}
                id={
                  diagnosisList === msDiagonosis ? "directions_activeBtn" : ""
                }
              >
                ЩЛХ
              </button>
            </div>{" "}
            <div id="directions_specialLine">
              <input
                value={patient.name}
                onChange={(e) =>
                  setPatient({ ...patient, name: e.target.value })
                }
                placeholder="Пацієнт..."
                className="directions_longInput"
              />
            </div>
            <div className="directions_formLine">
              {" "}
              <input
                className="directions_shortInput"
                placeholder="Дата народження..."
                value={patient.birthDate}
                onChange={(e) =>
                  setPatient({ ...patient, birthDate: e.target.value })
                }
              />
              <select
                value={patient.doctor}
                onChange={(e) =>
                  setPatient({ ...patient, doctor: e.target.value })
                }
              >
                {doctors.map(({ title, value, id }) => (
                  <option value={value} key={id}>
                    {title}
                  </option>
                ))}
              </select>
            </div>
            <div className="directions_formLine">
              <label>Патологія</label>
              <select
                className="directions_longSelect"
                value={patient.diagnosis}
                onChange={(e) =>
                  setPatient({ ...patient, diagnosis: e.target.value })
                }
              >
                {diagnosisList.map((item, idx) => (
                  <option value={item} key={idx}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              {" "}
              <input
                className="directions_longInput"
                value={patient.directionNumber}
                onChange={(e) =>
                  setPatient({ ...patient, directionNumber: e.target.value })
                }
                placeholder="№ електронного направлення..."
              />
            </div>
            <div>
              <div className="directions_formLine">
                <select
                  className="directions_extraLongSelect"
                  value={residence}
                  onChange={(e) => setResidence(e.target.value)}
                >
                  {townList.map((item, idx) => {
                    return (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="directions_formLine"></div>
            </div>
            <div></div>
            <div>
              <input
                className="directions_longInput"
                value={residence}
                onChange={(e) => setResidence(e.target.value)}
                placeholder="введіть адресу..."
              />
            </div>
            <div className="smallAnalyseBlock">
              {analyseNames.map((item) => (
                <div
                  key={item.id}
                  className="smallAnalyse"
                  onClick={() => deleteAnalyse(item.id)}
                >
                  {item.name}
                </div>
              ))}
            </div>
            <div className="directions_centered">Додати власне обстеження</div>
            <div className="directions_ownExaminations">
              <input
                className="directions_shortInput"
                id="ownExamInput"
                value={currentExaminationName}
                onChange={(e) => setCurrentExaminationName(e.target.value)}
                placeholder="назва обстеження..."
              />
              <button
                disabled={
                  ownExaminations.length > 7 || !currentExaminationName.length
                    ? true
                    : false
                }
                onClick={() => {
                  setOwnExaminations((prev) => {
                    if (!currentExaminationName.length) return;
                    return [
                      ...prev,
                      {
                        ...examinationTemplate,
                        name: currentExaminationName,
                        shortName: `${currentExaminationName.slice(0, 8)}...`,
                        id: Math.random(),
                      },
                    ];
                  });
                  setCurrentExaminationName("");
                  alert("Додано в перелік обстежень");
                }}
              >
                Додати
              </button>
            </div>
            <div>
              <hr />
              <button
                onClick={() => {
                  if (
                    patient.name === "" ||
                    patient.doctor === "" ||
                    patient.birthDate === "" ||
                    patient.diagnosis === ""
                  ) {
                    alert("Заповніть пусті поля!");
                    return;
                  }
                  setPatient({
                    ...patient,
                    residence: residence,
                  });
                  setShowForm(false);
                  setShowControls(true);
                }}
              >
                Підтвердити
              </button>
            </div>
          </div>
        )}
        {!showForm && (
          <div className="directions_mainBlock">
            {ownExaminations.map((analyse) => (
              <AnalyseItem
                key={analyse.name}
                patient={patient}
                analyse={analyse}
              />
            ))}
          </div>
        )}

        {showControls && (
          <div className="directions_controls">
            <button
              onClick={() => {
                setShowControls(false);
                onHideNavbar();
              }}
            >
              Готово до друку
            </button>
            <button
              onClick={() => {
                setShowForm(true);
                setShowControls(false);
              }}
            >
              Виправити форму
            </button>
          </div>
        )}
      </>
    </div>
  );
};
