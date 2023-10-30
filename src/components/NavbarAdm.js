import React, { useState } from "react";
import "./navbar.scss";
import Logo from "./img/logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Outlet, useNavigate } from "react-router-dom";
import SidebarAdm from "./SidebarAdm";

function NavbarAdm(args) {
  const naviget = useNavigate();
  function logoutSubmit() {
    localStorage.setItem("login", "");
    localStorage.setItem("loginStatus", "Cierre de sesión satisfactoria!");
    naviget("/");
  }
  const user = localStorage.getItem("user");

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar expand="md" {...args}>
        <SidebarAdm />
        <NavbarBrand href="/" className="text-light">
          <img
            src={Logo}
            alt="logo"
            className="me-2"
            style={{
              height: 40,
              width: 100,
            }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            {/* //REVISAR */}
            <NavbarText className="text-light">{user}</NavbarText>
            <UncontrolledDropdown nav direction="down">
              <DropdownToggle nav caret className="text-light">
                MENU
              </DropdownToggle>
              <DropdownMenu className="drop-menu">
                <DropdownItem>Instrucciones</DropdownItem>
                <DropdownItem>Postulacion</DropdownItem>
                <DropdownItem>Sobre Nosotros...</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Perfil</DropdownItem>
                <DropdownItem>Foto</DropdownItem>
                <DropdownItem>Cambiar Contraseña</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logoutSubmit}>Salir</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default NavbarAdm;
