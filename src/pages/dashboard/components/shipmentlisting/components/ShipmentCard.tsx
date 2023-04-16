import React, { useState } from "react";
import "./ShipmentCard.css";
import { FiX } from "react-icons/fi";
import Colors from "../../../../../config/colors";
import moment from "moment";

const ShipmentCard = ({ close, details }: any) => {
  return (
    <div className="shipment-details">
      <div className="cancel-btn" onClick={close}>
        <FiX color={Colors.secondary} />
      </div>

      <h2 className="secondary mb-3">Shipment Details</h2>
      <table className="details">
        <tr>
          <td>Booked On:</td>
          <td>{moment(details.bookedOn).format("DD/MM/YYYY")}</td>
        </tr>
        <tr>
          <td>Last Updated On:</td>
          <td>{moment(details.latestStatus.date).format("DD/MM/YYYY")}</td>
        </tr>
        <tr>
          <td>Status:</td>
          <td>{details.latestStatus.status}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{details.weight}</td>
        </tr>
        <tr>
          <th colSpan={2}>Pickup Details</th>
        </tr>
        <tr>
          <td>Name:</td>
          <td>{details.pickupDetails?.name}</td>
        </tr>

        <tr>
          <td>Email:</td>
          <td>{details.pickupDetails?.email}</td>
        </tr>

        <tr>
          <td>Mobile:</td>
          <td>{details.pickupDetails?.mobile}</td>
        </tr>

        <tr>
          <td>Address:</td>
          <td>
            {details.pickupDetails?.address?.address},<br />
            {details.pickupDetails?.address?.city},<br />
            {details.pickupDetails?.address?.state},<br />
            {details.pickupDetails?.address?.country}
          </td>
        </tr>

        <tr>
          <th colSpan={2}>Delivery Details</th>
        </tr>
        <tr>
          <td>Name:</td>
          <td>{details.deliveryDetails?.name}</td>
        </tr>

        <tr>
          <td>Email:</td>
          <td>{details.deliveryDetails?.email}</td>
        </tr>

        <tr>
          <td>Mobile:</td>
          <td>{details.deliveryDetails?.mobile}</td>
        </tr>

        <tr>
          <td>Address:</td>
          <td>
            {details.deliveryDetails?.address?.address},<br />
            {details.deliveryDetails?.address?.city},<br />
            {details.deliveryDetails?.address?.state},<br />
            {details.deliveryDetails?.address?.country}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ShipmentCard;
