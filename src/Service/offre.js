import axios from "axios";

const API_URL = "http://localhost:8090/offer/getAll";
let token =
  "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJoeWRQSVNNQjdqZkhaYzMtNWRDSE52bkFIWUJNblVJRkJjRTJXcm9DdGQ0In0.eyJleHAiOjE2OTgzNjA4OTIsImlhdCI6MTY5ODM2MDU5MiwianRpIjoiMTFmZDY4ZGUtNjIxZC00ZjI2LTg4MTQtNjJlOGZhZTlhNWI1IiwiaXNzIjoiaHR0cDovL2tleWNsb2FrOjgwODAvcmVhbG1zL01pY3JvU2VydmljZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI0OWFmMjAzNS1iYjY4LTRkYmYtYTk3Ny03ZmNlMWFhOWU5NzEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJPZmZlck1pY3JvU2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJkNDZiMmRjMi02YmRiLTQ0NWUtODJkOS0xMDMxNzQ3YWE4YjUiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW1pY3Jvc2VydmljZSIsInVtYV9hdXRob3JpemF0aW9uIiwidXNlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiJkNDZiMmRjMi02YmRiLTQ0NWUtODJkOS0xMDMxNzQ3YWE4YjUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.ATVgeB-CPcCDPAIjaHzST8lBkso0uKp4TEaL_Ut8mdv9QPf4mRdFlPffpC7wTPSyx6WXcKMHB7I85OoLN5YX3NqQpELe_nTJ84yk23xi9Nph-T0_WxrGi16S3H_KRpnjgUvvqUaybu7znh7r-lAk5xezd3cPexeoFsKQCzRq6sMNj83_EU5j_2fLkZSDyRPfqj1cOG4g0cYPekGfYXyt0tDmBb8pZuXzLxtWNn_2muwULgXNMDYM5VY28b1RUkHK83khzvaCyjgLi5iCBcgLcq80uU4329nx9r3u-tFA4dmDxjsFMSac58ij3bvrlrml2QYyS0QGgF2SmZCMu2-ykg";
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
