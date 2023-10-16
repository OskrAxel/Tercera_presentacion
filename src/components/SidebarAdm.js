import * as FaIcons from "react-icons/fa";
import "./Sidebar.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./img/logo.png";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

const SidebarAdm = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Usuarios",
      icon: <FaIcons.FaUserGraduate />,
    },
    {
      path: "/personal",
      name: "Personal",
      icon: <FaIcons.FaUsers />,
    },
    {
      path: "/patrocinador",
      name: "Patrocinador",
      icon: <FaIcons.FaBuilding />,
    },
    {
      path: "/informes",
      name: "Informes",
      icon: <FaIcons.FaEnvelopeOpenText />,
    },
  ];
  return (
    // <div>
    //   <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
    //     <div className="top_section">
    //       <h1
    //         style={{ display: isOpen ? "flex" : "none" }}
    //         className="logo"></h1>
    //       <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
    //         <FaIcons.FaBars onClick={toggle} />
    //       </div>
    //     </div>
    //     <div>
    //       <h1 style={{ display: isOpen ? "flex" : "none" }} className="logo">
    //         <img
    //           src={Logo}
    //           alt="logo"
    //           className="rounded-circle me-2"
    //           style={{
    //             height: 100,
    //             width: 100,
    //           }}
    //         />
    //       </h1>
    //       <h1 style={{ display: isOpen ? "flex" : "none" }} className="logo">
    //         <p className="text-user">Alcides Oscar Cusi Ajno</p>
    //       </h1>
    //     </div>
    //     {menuItem.map((item, index) => (
    //       <NavLink
    //         exact
    //         className="link text-light py-3 w-100  px-2"
    //         activeClassName="active"
    //         to={item.path}
    //         key={index}>
    //         <div className="icon me-2">{item.icon}</div>
    //         <div
    //           style={{ display: isOpen ? "block" : "none" }}
    //           className="link_text">
    //           {item.name}
    //         </div>
    //       </NavLink>
    //     ))}
    //   </div>
    //   {/* <main>{children}</main> */}
    // </div>
    <div>
      <Button color="primary" onClick={function noRefCheck() {}}>
        Open
      </Button>
      <Offcanvas /* fade isOpen={false}  */ toggle={function noRefCheck() {}}>
        <OffcanvasHeader toggle={function noRefCheck() {}}>
          Offcanvas
        </OffcanvasHeader>
        <OffcanvasBody>
          <strong>This is the Offcanvas body.</strong>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default SidebarAdm;
