import React, { useState } from "react";
import "./navbar.scss";
import Logo from "./img/logo.png";
import * as FaIcons from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { Outlet, useNavigate } from "react-router-dom";
import SidebarBec from "./SidebarBec";
function NavbarBec(args) {
  const naviget = useNavigate();
  function logoutSubmit() {
    localStorage.setItem("login", "");
    localStorage.setItem("loginStatus", "Cierre de sesión satisfactoria!");
    naviget("/");
  }
  const user = localStorage.getItem("user");

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  ////
  const [modalInsertar, setModalInsertar] = useState(false);
  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };
  ////
  return (
    <div>
      <Navbar expand="md" {...args}>
        <SidebarBec />
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
            <NavItem>
              <Button
                color="warning"
                onClick={() => abrirCerrarModalInsertar()}>
                ENVIAR INF
              </Button>
            </NavItem>
            <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
            {/* //REVISAR */}
            <NavbarText className="text-light">{user}</NavbarText>
            <UncontrolledDropdown nav direction="down">
              <DropdownToggle nav caret className="text-light">
                MENU
              </DropdownToggle>
              <DropdownMenu className="drop-menu">
                <DropdownItem href="./Pdfman1" target="_blank">
                  Instrucciones
                </DropdownItem>
                <DropdownItem href="./PdfConv2" target="_blank">
                  Postulacion
                </DropdownItem>
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
      <Modal isOpen={modalInsertar}>
        <ModalHeader>Enviar Informes</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Nombre Becario</label>
            <br />
            <input type="text" className="form-control" name="nombre" />
            <br />
            <label>Archivos: </label>
            <br />
            <input type="file" className="form-control" name="archivos" />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" size="lg">
            <FaIcons.FaUpload />
            &nbsp; Cargar
          </Button>
          <Button
            color="danger"
            size="lg"
            onClick={() => abrirCerrarModalInsertar()}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      <Outlet />
    </div>
  );
}

export default NavbarBec;
