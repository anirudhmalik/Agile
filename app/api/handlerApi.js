import client from "./client";

const getData = (endPoint, data) => {
  return client.get(endPoint, data);
};
export default {
  getData,
};
