import * as FaIcons from "react-icons/fa";
import "./Sidebar.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./img/logo.png";

const Sidebar = ({ nombre }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Registro",
      icon: <FaIcons.FaRegAddressCard />,
    },
    {
      path: "/horarios",
      name: "Horarios",
      icon: <FaIcons.FaRegCalendar />,
    },
    {
      path: "/sales",
      name: "Registrar Notas",
      icon: <FaIcons.FaClipboardCheck />,
    },
    {
      path: "/clients",
      name: "Enviar Informes",
      icon: <FaIcons.FaEnvelope />,
    },
  ];
  return (
    <div>
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1
            style={{ display: isOpen ? "flex" : "none" }}
            className="logo"></h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaIcons.FaBars onClick={toggle} />
          </div>
        </div>
        <div>
          <h1 style={{ display: isOpen ? "flex" : "none" }} className="logo">
            <img
              src={Logo}
              alt="logo"
              className="rounded-circle me-2"
              style={{
                height: 100,
                width: 100,
              }}
            />
          </h1>
          <h1 style={{ display: isOpen ? "flex" : "none" }} className="logo">
            <p className="text-user">{nombre}</p>
          </h1>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            exact
            className="link text-light py-3 w-100  px-2"
            activeClassName="active"
            to={item.path}
            key={index}>
            <div className="icon me-2">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      {/* <main>{children}</main> */}
    </div>
  );
};

export default Sidebar;
