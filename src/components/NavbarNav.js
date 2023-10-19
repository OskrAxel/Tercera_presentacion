import React, { useState } from "react";
import "./navbar.scss";
import Logo from "./img/logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import SidebarAdm from "./SidebarAdm";

function NavbarNav(args) {
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
            {/* //ms */}
            <UncontrolledDropdown nav direction="down">
              <DropdownToggle nav caret className="text-light">
                MENU
              </DropdownToggle>
              <DropdownMenu className="drop-menu">
                <DropdownItem>Instrucciones</DropdownItem>
                <DropdownItem href="../../src/Pages/Admin/documentos/convocatoria/CONVOCATORIA.pdf">
                  Postulación
                </DropdownItem>
                {/* <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink> */}
                <DropdownItem>Sobre Nosotros...</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Perfil</DropdownItem>
                <DropdownItem>Foto</DropdownItem>
                <DropdownItem>Cambiar Contraseña</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Salir</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarNav;
