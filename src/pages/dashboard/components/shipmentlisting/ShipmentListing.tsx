import React, { useEffect, useState } from "react";
import "./ShipmentListing.css";
import shipmentService from "../../../../services/shipment.service";
import { FiEye } from "react-icons/fi";
import Colors from "../../../../config/colors";
import moment from "moment";
import { useSelector } from "react-redux";

const ShipmentListing = () => {
  const user = useSelector((state: any) => state.auth.user);
  const [shipments, setShipments] = useState<any>([]);
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
    shipmentService.updateStatus(shipment._id, status).then((res) => {
      shipment.latestStatus = { ...res.data };
      setShipments([...shipments]);
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
      <table>
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
                  disabled={user.type == "Customer"}
                  onChange={(e) => updateStatus(idx, e.target.value)}
                >
                  {statuses.map((status) => (
                    <option>{status}</option>
                  ))}
                </select>
              </td>
              <td>
                <FiEye color={Colors.primary} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentListing;
