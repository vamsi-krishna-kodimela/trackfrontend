import axios from "axios";
import constants from "../config/constants";
import IUser from "../interfaces/user.interface";

const authService = {
  login: (payload: { email: String; password: string }) => {
    return axios.post(constants.ROUTE + "/user/login", payload);
  },
  register: (payload: IUser) => {
    return axios.post(constants.ROUTE + "/user/register", payload);
  },
};

export default authService;
