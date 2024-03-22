import { api } from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const RecordsAPI = {
  get: async function (id, cancel = false) {
    const response = await api.request({
      url: `/records/${id}`,
      method: "GET",
      // Retrieve the signal value using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // Return the single record returned by the API
    return response.data;
  },

  getAll: async function (cancel = false) {
    const response = await api.request({
      url: "/records",
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });
    console.log(response);
    return response.data;
  },

  create: async function (record, cancel = false) {
    await api.request({
      url: "/records",
      method: "POST",
      data: record,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });
  },
};

// Define the cancel API object for RecordsAPI
const cancelApiObject = defineCancelApiObject(RecordsAPI);
