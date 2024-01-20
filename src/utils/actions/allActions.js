import axios from "axios";
const backendUrl = process.env.REACT_APP_API_ENDPOINT;

export const connectToServer = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(`${backendUrl}/connect-to-server`);
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};
