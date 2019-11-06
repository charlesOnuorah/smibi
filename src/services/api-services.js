import Axios from "axios";
import { LOGIN } from "./api";

const AuthService = {};

AuthService.login = async data => {
  return Axios.post(LOGIN, data);
};

export default AuthService;
