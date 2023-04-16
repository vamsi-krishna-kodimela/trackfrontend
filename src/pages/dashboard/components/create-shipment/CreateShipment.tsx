import React, { useState } from "react";
import "./CreateShipment.css";
import { FiX } from "react-icons/fi";
import Colors from "../../../../config/colors";
import IAddress from "../../../../interfaces/address.interface";
import shipmentService from "../../../../services/shipment.service";

const CreateShipment = ({ close }: any) => {
  const [weight, setWeight] = useState("");

  const [pickup, setPick] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [pickupAddress, setPickupAddress] = useState<IAddress>({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const [delivery, setDelivery] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [deliveryAddress, setDeliveryAddress] = useState<IAddress>({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const handlePickupChange = (key: string, value: string) => {
    const data: any = { ...pickup };
    data[key] = value;
    setPick(data);
  };

  const handlePickupAddressChange = (key: string, value: string) => {
    const data: any = { ...pickupAddress };
    data[key] = value;
    setPickupAddress(data);
  };

  const handleDeliveryChange = (key: string, value: string) => {
    const data: any = { ...delivery };
    data[key] = value;
    setDelivery(data);
  };

  const handleDeliveryAddressChange = (key: string, value: string) => {
    const data: any = { ...deliveryAddress };
    data[key] = value;
    setDeliveryAddress(data);
  };

  const registerUser = () => {
    const payload = {
      weight: weight,
      pickupDetails: {
        ...pickup,
        address: { ...pickupAddress },
      },
      deliveryDetails: {
        ...delivery,
        address: { ...deliveryAddress },
      },
    };

    shipmentService
      .book(payload)
      .then((data) => {
        close();
      })
      .catch((err) => {});
  };

  return (
    <div className="create-form">
      <div className="cancel-btn" onClick={close}>
        <FiX color={Colors.secondary} />
      </div>

      <h2 className="secondary ">Book a Shipment</h2>
      <p className="secondary f-2">
        We will pick from you and delivery it anywhere in India
      </p>
      <div className="w-4">
        <input
          type="number"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Package Weght in KG"
          min="0"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <h3>Pickup Details</h3>
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Name"
          value={pickup.name}
          onChange={(e) => handlePickupChange("name", e.target.value)}
        />
        <input
          type="email"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Email"
          value={pickup.email}
          onChange={(e) => handlePickupChange("email", e.target.value)}
        />
        <input
          type="tel"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Mobile Number"
          value={pickup.mobile}
          onChange={(e) => handlePickupChange("mobile", e.target.value)}
        />
        <h4>Pickup Address</h4>
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Address Line"
          value={pickupAddress.address}
          onChange={(e) => handlePickupAddressChange("address", e.target.value)}
        />
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Ciy"
          value={pickupAddress.city}
          onChange={(e) => handlePickupAddressChange("city", e.target.value)}
        />
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="State"
          value={pickupAddress.state}
          onChange={(e) => handlePickupAddressChange("state", e.target.value)}
        />
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Country"
          value={pickupAddress.country}
          onChange={(e) => handlePickupAddressChange("country", e.target.value)}
        />
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Pincode"
          value={pickupAddress.pincode}
          onChange={(e) => handlePickupAddressChange("pincode", e.target.value)}
        />
        <h3>Delivery Details</h3>
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Name"
          value={delivery.name}
          onChange={(e) => handleDeliveryChange("name", e.target.value)}
        />
        <input
          type="email"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Email"
          value={delivery.email}
          onChange={(e) => handleDeliveryChange("email", e.target.value)}
        />
        <input
          type="tel"
          className="mt-2 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Mobile Number"
          value={delivery.mobile}
          onChange={(e) => handleDeliveryChange("mobile", e.target.value)}
        />
        <h4>Delivery Address</h4>
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Address Line"
          value={deliveryAddress.address}
          onChange={(e) =>
            handleDeliveryAddressChange("address", e.target.value)
          }
        />
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Ciy"
          value={deliveryAddress.city}
          onChange={(e) => handleDeliveryAddressChange("city", e.target.value)}
        />
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="State"
          value={deliveryAddress.state}
          onChange={(e) => handleDeliveryAddressChange("state", e.target.value)}
        />
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Country"
          value={deliveryAddress.country}
          onChange={(e) =>
            handleDeliveryAddressChange("country", e.target.value)
          }
        />
        <input
          type="text"
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1"
          placeholder="Pincode"
          value={deliveryAddress.pincode}
          onChange={(e) =>
            handleDeliveryAddressChange("pincode", e.target.value)
          }
        />

        <button
          className="mt-1 mb-2 w-4 pb-1 pt-1 pl-1 pr-1 light bg-primary"
          onClick={registerUser}
        >
          Book Shipment
        </button>
      </div>
    </div>
  );
};

export default CreateShipment;
