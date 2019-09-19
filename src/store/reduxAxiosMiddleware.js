import axios from "axios";
import { multiClientMiddleware } from "redux-axios-middleware";

const clients = {
  default: {
    client: axios.create({
      baseURL: "https://songs-api-ubiwhere.now.sh/api",
      responseType: "json",
    })
  }
};

export default multiClientMiddleware(clients);