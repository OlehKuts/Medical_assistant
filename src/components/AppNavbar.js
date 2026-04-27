import { NavLink } from "react-router";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {
  Magic,
  FileEarmarkRuledFill,
  GearFill,
  LayoutTextWindow,
  CardChecklist,
  MotherboardFill,
} from "react-bootstrap-icons";

export const AppNavbar = () => {
  return (
    <>
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        className="mb-3 appNavbar"
        sticky="top"
      >
        <Container>
          <Navbar.Brand className="mb-2">
            <Magic color="coral" size={24} className="align-top" />
            <span className="brandText">Medical assistant</span>
          </Navbar.Brand>
          <Nav className="me-auto" style={{ margin: "0 10rem 0 4rem" }}>
            <Nav.Link as={NavLink} to="/">
              <LayoutTextWindow className="navbarIcons" size={20} />
              Направлення
            </Nav.Link>
            <Nav.Link as={NavLink} to="/statement">
              <FileEarmarkRuledFill className="navbarIcons" size={20} />
              Довідка
            </Nav.Link>
            <Nav.Link as={NavLink} to="/operationalList">
              <CardChecklist className="navbarIcons" size={20} />
              Операційний список
            </Nav.Link>
            <Nav.Link as={NavLink} to="/codeHelper">
              <MotherboardFill size={20} className="navbarIcons" />
              Код-помічник
            </Nav.Link>
            <Nav.Link as={NavLink} to="/settings">
              <GearFill size={20} className="navbarIcons" />
              Налаштування
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
