import { post } from "../utils/axios";
import { httpRoutes } from "../utils/config";

const messageApi = {
  post() {
    return post(httpRoutes.message.post);
  }
};

export default messageApi;
