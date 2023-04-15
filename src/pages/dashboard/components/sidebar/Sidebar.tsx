import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Modal from "react-modal";
import CreateShipment from "../create-shipment/CreateShipment";

const Sidebar = () => {
  const [showCreateShipment, setshowCreateShipment] = useState<boolean>(false);
  const openShowCreateShipmentModal = () => {
    setshowCreateShipment(true);
  };
  const customStyles = {
    content: {
      backgroundColor: "transparent",
      boxShadow: "none",
      border: "none",
      overflow:"hidden"
    },
  };
  return (
    <>
      <div className="sidebar pt-2 pb-2 pl-1 pr-1">
        <ul className="menu">
          <li className="menu-item">
            <Link to="/">Dashborad</Link>
          </li>
          <li className="menu-item">
            <Link to="/">My Shipments</Link>
          </li>
          <li className="menu-item">
            <Link to="/">Dashborad</Link>
          </li>
        </ul>
        <div className="quick-actions">
          <button
            className="w-4 pt-1 pb-1 bg-primary light"
            onClick={openShowCreateShipmentModal}
          >
            + Create Shipment
          </button>
        </div>
        <Modal isOpen={showCreateShipment} style={customStyles}>
          <CreateShipment />
        </Modal>
      </div>
    </>
  );
};

export default Sidebar;
