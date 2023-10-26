import axios from "axios";

const API_URL = "http://localhost:8090/offer/getAll";

export let token =
  "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJoeWRQSVNNQjdqZkhaYzMtNWRDSE52bkFIWUJNblVJRkJjRTJXcm9DdGQ0In0.eyJleHAiOjE2OTgzNjM2MTYsImlhdCI6MTY5ODM2MzMxNiwianRpIjoiODhmMmY3ZGItMWU5Ni00MmQ4LWE3YjEtNWU2MzhlNjY1OTJkIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrOjgwODAvcmVhbG1zL01pY3JvU2VydmljZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI0OWFmMjAzNS1iYjY4LTRkYmYtYTk3Ny03ZmNlMWFhOWU5NzEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJPZmZlck1pY3JvU2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJkYzBmMTVhMC04NDliLTQzMzMtYjk1Yi05ZjFjMDI5YjE0M2IiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW1pY3Jvc2VydmljZSIsInVtYV9hdXRob3JpemF0aW9uIiwidXNlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiJkYzBmMTVhMC04NDliLTQzMzMtYjk1Yi05ZjFjMDI5YjE0M2IiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.oXIupFYteHa89zV5XUJ1vX9UyHv9G6DWQ6mwZ1aezrpI1vXFujWklLjp3YDfXiiwCcLFim1m6ycwda0CigPJq_dtujcC0FCtsgzp3zZxSGVn1vqeuWP4jX08PepZv_JMXNKGOgQ-jrgfc4h-3ueqmz57Ab3V1XmejEBXgqvFSaoq-xb-defxwuf-YYlGjZsHdaFOs_Vx2u6E-TunEklFc_TN6ifB3NZ0DGK5h3rvtOaNVhX9MbsM7FDQ2u5CrQYijrFbCThKVOnNS3M2-UsqVMjlOv0UoBYdgcUYXwafXv18FR7B5mXCIaeef81kkfcumRx7xgfaRr7nisSuFfp0yA";
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
export const createoffer = async (provider) => {
  try {
    const headers = {
      Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
    };
    console.log(provider);
    let response = await axios.post(
      "http://localhost:8090/offer/create/",
      provider,
      { headers }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
export const updateoffer = async (provider, id) => {
  try {
    console.log(provider);
    const headers = {
      Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
    };
    let response = await axios.put(
      "http://localhost:8090/offer/" + id,
      provider,
      { headers }
    );

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
