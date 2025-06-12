import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">MiApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/verPeliculas">Ver Películas</Nav.Link>
            <Nav.Link as={Link} to="/visualizaciones">Ver Visualizaciones</Nav.Link>
            <NavDropdown title="Administración" id="nav-dropdown">
              <NavDropdown.Item as={Link} to="/administrar/crearGenero">Crear Género</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/administrar/crearPelicula">Crear Película</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;