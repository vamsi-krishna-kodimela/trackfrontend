import React, { useEffect, useState } from "react";
import "./ShipmentListing.css";
import shipmentService from "../../../../services/shipment.service";
import { FiEye } from "react-icons/fi";
import Colors from "../../../../config/colors";
import moment from "moment";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import ShipmentCard from "./components/ShipmentCard";
import { toast } from "react-hot-toast";

const ShipmentListing = () => {
  const user = useSelector((state: any) => state.auth.user);
  const [showShipmentDetails, setShowShipmentDetails] = useState(false);
  const [shipments, setShipments] = useState<any>([]);

  const [shipmentDetails, setShipmentDetails] = useState(null);
  const toggleShipmentDetails = () => {
    setShowShipmentDetails(!showShipmentDetails);
  };
  const openDetails = (id: number) => {
    setShipmentDetails(shipments[id]);
    toggleShipmentDetails();
  };
  const customStyles = {
    content: {
      backgroundColor: "transparent",
      boxShadow: "none",
      border: "none",
      overflow: "hidden",
    },
  };
  useEffect(() => {
    getShipments();
  }, []);

  const statuses = [
    "In Progress",
    "Booked",
    "Pickup In Progress",
    "Picked",
    "Unable To Reach",
    "Cancelled",
    "Reached",
    "Out For Delivery",
    "Delivered",
  ];

  const updateStatus = (idx: number, status: string) => {
    const shipment = shipments[idx];
    shipmentService
      .updateStatus(shipment._id, status)
      .then((res) => {
        shipment.latestStatus = { ...res.data };
        setShipments([...shipments]);
        toast.success("Status created!");
      })
      .catch((err) => {
        toast.error("Failed to update status!");
      });
  };

  const getShipments = () => {
    shipmentService.getShipments().then((res: any) => {
      const data = res.data;
      setShipments([...data]);
    });
  };
  return (
    <div className="shipment">
      <h2>Shipments</h2>
      <table className="shipment-table">
        <thead>
          <tr>
            <th>Booked On</th>
            <th>Updated On</th>
            <th>Destination</th>
            <th>Weight</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment: any, idx: number) => (
            <tr key={shipment._id}>
              <td>{moment(shipment.bookedOn).format("DD/MM/YYYY")}</td>
              <td>{moment(shipment.latestStatus.date).format("DD/MM/YYYY")}</td>
              <td>
                {shipment.pickupDetails?.address?.city}-
                {shipment.deliveryDetails?.address?.city}
              </td>
              <td>{shipment.weight ?? "-"}</td>
              <td>
                <select
                  value={shipment.latestStatus.status}
                  className="bg-transparent secondary"
                  disabled={user.type === "Customer"}
                  onChange={(e) => updateStatus(idx, e.target.value)}
                >
                  {statuses.map((status) => (
                    <option key={status}>{status}</option>
                  ))}
                </select>
              </td>
              <td>
                <FiEye
                  color={Colors.primary}
                  style={{ cursor: "pointer" }}
                  onClick={() => openDetails(idx)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={showShipmentDetails} style={customStyles}>
        <ShipmentCard close={toggleShipmentDetails} details={shipmentDetails} />
      </Modal>
    </div>
  );
};

export default ShipmentListing;
