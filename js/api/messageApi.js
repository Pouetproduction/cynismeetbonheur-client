import { post, get } from "../utils/axios";
import { httpRoutes } from "../utils/config";

const messageApi = {
  post(message) {
    const data = {
      message
    }
    return post(httpRoutes.message, data);
  },

  get() {
    return get(httpRoutes.message);
  }
};

export default messageApi;
