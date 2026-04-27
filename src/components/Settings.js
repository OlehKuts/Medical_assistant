import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Settings = ({ doctors, changeDoctors }) => {
  const navigate = useNavigate();
  const stringifiedDoctors = doctors
    .map((item) => item.value)
    .filter((item) => item);
  const [newDoctors, setNewDoctors] = useState(stringifiedDoctors.join(","));
  const saveChanges = () => {
    const splittedDoctors = newDoctors.split(",");
    alert("Зміни застосовано!");
    navigate("/");
    changeDoctors(splittedDoctors);
  };
  return (
    <div className="settings">
      <Card className="text-center settingsCard">
        <Card.Header>Список лікарів</Card.Header>
        <Card.Body>
          <Card.Title>Вкажіть список лікарів через кому</Card.Title>
          <Card.Text>
            <textarea
              name="doctors"
              rows={5}
              id="doctorsArea"
              value={newDoctors}
              onChange={(e) => setNewDoctors(e.target.value)}
            />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary" onClick={saveChanges}>
            Зберегти зміни
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};
