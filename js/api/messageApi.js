import * as middleWare from "../utils/axios";
import { httpRoutes } from "../utils/config";

const messageApi = {
  post() {
    return middleWare.post(httpRoutes.message.post);
  }
};

export default messageApi;
