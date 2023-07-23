import Axios from "axios";
import { AppConfigs } from "../settings";

export const getAxios = () => {
  return Axios.create({
    baseURL: AppConfigs.apiBaseUrl,
  });
};
