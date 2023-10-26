import axios from "axios";

const API_URL = "http://localhost:8090/offer/getAll";
let token =
"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJoeWRQSVNNQjdqZkhaYzMtNWRDSE52bkFIWUJNblVJRkJjRTJXcm9DdGQ0In0.eyJleHAiOjE2OTgzNTk4MjUsImlhdCI6MTY5ODM1OTUyNSwianRpIjoiNmQxMTQ1ZjQtNjExZC00ODNiLTk5MDMtN2EwNTU3ZDliMDRhIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrOjgwODAvcmVhbG1zL01pY3JvU2VydmljZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI0OWFmMjAzNS1iYjY4LTRkYmYtYTk3Ny03ZmNlMWFhOWU5NzEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJPZmZlck1pY3JvU2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI5OWUwZjM0Yi00ODZhLTRjZWQtYWE0MS02NTQwNDMzMGY4OGEiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW1pY3Jvc2VydmljZSIsInVtYV9hdXRob3JpemF0aW9uIiwidXNlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiI5OWUwZjM0Yi00ODZhLTRjZWQtYWE0MS02NTQwNDMzMGY4OGEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.N4vGB5qVM_4lo6xZwHG8Oph5ho0rNb7RMkAnEiPgmMb4MxV-1WNb9VqvBpLsn1diyAMfCes30Scvtfjs5sM3W5mA9W37nLBkaun1Q7npFONiuZVLjhwPQeiJM9g152-1QZ-3vz1hDuXyNZblPyBr0uRPJQ5Qw3DilHTLJmr_pooK-UoZf0667aW4SIZi-s8-DxlJZX5xSe-VWHM6D3cErxkfbC9y-JQw50XXo9kdff1svmcDjfMd5KcJZvRgkqsfY6C71tO1g-B1RRkS5ZJzQBySEtJb61KgReNcW3cAf68VM1vn8XSIOJ-fOkLpO2CU3Kd8hIR08F_5qSjn5xFEuQ"
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
