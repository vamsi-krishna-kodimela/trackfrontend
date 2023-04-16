import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Modal from "react-modal";
import CreateShipment from "../create-shipment/CreateShipment";
import { FiGrid, FiPackage } from "react-icons/fi";
import Colors from "../../../../config/colors";
import { useSelector, useDispatch } from "react-redux";

const Sidebar = () => {
  const toggle = useSelector((state: any) => state.sidebar.toggle);
  const [showCreateShipment, setshowCreateShipment] = useState<boolean>(false);
  const openShowCreateShipmentModal = () => {
    setshowCreateShipment(true);
  };
  const customStyles = {
    content: {
      backgroundColor: "transparent",
      boxShadow: "none",
      border: "none",
      overflow: "hidden",
    },
  };
  return (
    <>
      {toggle && (
        <div className="sidebar pt-2 pb-2 pl-1 pr-1">
          <ul className="menu">
            <li className="menu-item">
              <Link to="/">
                <FiGrid color={Colors.primary} /> Dashborad
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/">
                <FiPackage color={Colors.primary} /> My Shipments
              </Link>
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
      )}
    </>
  );
};

export default Sidebar;
