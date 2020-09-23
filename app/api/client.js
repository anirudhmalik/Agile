import { create } from "apisauce";
const apiClient = create({
  baseURL: "https://itunes.apple.com/",
});
export default apiClient;
