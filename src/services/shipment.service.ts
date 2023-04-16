import axios from "axios";
import constants from "../config/constants";

const shipmentService = {
  book: (payload: any) => {
    const token = JSON.parse(localStorage.getItem("user")!).token;
    return axios.post(constants.ROUTE + "/shipment/create", payload, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};

export default shipmentService;
