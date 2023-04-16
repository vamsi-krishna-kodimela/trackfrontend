import axios from "axios";
import constants from "../config/constants";

const authService = {
  login: (payload: { email: String; password: string }) => {
    return axios.post(constants.ROUTE + "/user/login", payload);
  },
};

export default authService;
