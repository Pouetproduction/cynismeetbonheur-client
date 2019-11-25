import * as middleWare from "../utils/axios";
import { httpRoutes } from "../utils/config";

const helloWorldApi = {
  helloWorld() {
    const helloWorldUrl = httpRoutes.helloWorld;
    return middleWare.get(helloWorldUrl);
  }
};

export default helloWorldApi;
