import * as axios from "../utils/axios";
import { httpRoutes } from "../utils/config";

const helloWorldApi = {
  helloWorld() {
    const helloWorldUrl = httpRoutes.helloWorld;
    return axios.get(helloWorldUrl);
  }
};

export default helloWorldApi;
