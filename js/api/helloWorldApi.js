import { get } from "../utils/axios";
import { httpRoutes } from "../utils/config";

const helloWorldApi = {
  helloWorld() {
    return get(httpRoutes.helloWorld);
  }
};

export default helloWorldApi;
