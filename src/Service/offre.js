import axios from "axios";

const API_URL = "http://localhost:8090/offer/getAll";
export let token ="eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhSHBWNjQ2ZkdGOXJVOEpTYS1nQlRuRF90N0JxbUtlU1NFWlJlVFVkNExzIn0"
export const getOffers = async () => {
  try {
    const headers = {
      Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
    };

    const response = await axios.get(API_URL, { headers });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const DeleteOffre = async (id) => {
  try {
    const headers = {
      Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
    };
    const response = await axios.delete("http://localhost:8090/offer/" + id, {
      headers,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const addProvider = async (provider) => {
  try {
    let response = await axios.post("http://localhost:8090/offer/create", provider);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
