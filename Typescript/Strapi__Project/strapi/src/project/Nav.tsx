import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto btn btn-outline-success my-2 my-sm-0">
          <Nav.Link to="/Add" as={NavLink}>
            Add Project
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
