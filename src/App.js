import { AnalysesDirections } from "./components/AnalysesDirections";
import { AppNavbar } from "./components/AppNavbar";
import { Routes, Route } from "react-router";
import { OperationalList } from "./components/OperationalList";
import { Statement } from "./components/Statement";
import { NotFound } from "./components/NotFound";
import { CodeHelper } from "./components/CodeHelper";
import { Settings } from "./components/Settings";
import { useState } from "react";
import { assignIds } from "./utils/assignIds";
import { initDoctors } from "./initialData/settingsData";
import { useLocalStorage } from "./hooks/useLocalStorage";

export const App = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [doctors, setDoctors] = useLocalStorage(
    "doctors",
    assignIds(initDoctors),
  );
  const onHideNavbar = () => {
    setShowNavbar(false);
  };
  const changeDoctors = (newDoctors) => {
    setDoctors(assignIds(newDoctors));
  };
  return (
    <>
      <div className="App">
        {showNavbar ? <AppNavbar /> : null}
        <Routes>
          <Route
            path="/"
            element={
              <AnalysesDirections
                onHideNavbar={onHideNavbar}
                doctors={doctors}
              />
            }
          />
          <Route
            path="/statement"
            element={
              <Statement onHideNavbar={onHideNavbar} doctors={doctors} />
            }
          />
          <Route
            path="/operationalList"
            element={
              <OperationalList onHideNavbar={onHideNavbar} doctors={doctors} />
            }
          />
          <Route path="/codeHelper" element={<CodeHelper />} />
          <Route
            path="/settings"
            element={
              <Settings doctors={doctors} changeDoctors={changeDoctors} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};
