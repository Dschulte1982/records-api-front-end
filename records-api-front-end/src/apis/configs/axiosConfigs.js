import axios from "axios";
import { notification } from "andtd";

// Create the base URL to connect to the API
export const api = axios.create({
  baseURL: "https://crudapi.dustinschulte.com/api/records",
});

// Define the error handler for all APIs
const errorHandler = (error) => {
  const statusCode = error.response?.status;

  if (error.code === "ERR_CANCELED") {
    notification.error({
      placement: "bottomRight",
      description: "API canceled!",
    });
    return Promise.resolve();
  }

  // Log all errors that are not status code 401
  if (statusCode && statusCode !== 401) {
    console.error(error);
  }
  return Promise.reject(error);
};

// Register the custom errtor handler to the axios "api" instance
api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
