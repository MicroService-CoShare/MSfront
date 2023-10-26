import axios from "axios";

const API_URL = "http://localhost:8090/product/getAll";
let token =
"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJoeWRQSVNNQjdqZkhaYzMtNWRDSE52bkFIWUJNblVJRkJjRTJXcm9DdGQ0In0.eyJleHAiOjE2OTgzNjExNzEsImlhdCI6MTY5ODM2MDg3MSwianRpIjoiNjI5OWRiNjctNDVkMS00ZmJlLTg0ZDctNzUxMGI3ZjkzY2QzIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrOjgwODAvcmVhbG1zL01pY3JvU2VydmljZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI0OWFmMjAzNS1iYjY4LTRkYmYtYTk3Ny03ZmNlMWFhOWU5NzEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJPZmZlck1pY3JvU2VydmljZSIsInNlc3Npb25fc3RhdGUiOiIwMmJiYjhiYi0zMmI3LTQwNDctYjYxOS0xNWExOTM0YjY2ZTAiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW1pY3Jvc2VydmljZSIsInVtYV9hdXRob3JpemF0aW9uIiwidXNlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiIwMmJiYjhiYi0zMmI3LTQwNDctYjYxOS0xNWExOTM0YjY2ZTAiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.pg1di10SLru6xT89QpQ5lvIev9BNgJfMgEeBdj2B9YYEaNDtx2Uq1loSvBXhAL37h_X3J25K8DIYO4n7td2kkA527LzLMjYKrE29qRTm0jDhf5PfdYzEQT_bLx6nLRIIfF9Lrn7H--Vang4nq8HZDE1YMq1tRFg6crN0eaG-D9zp5uVk79bbGDCY6GSs1_tEPb4s2agpv1k7JbJT36XvpjCrPDT4xprwkgTVTU4zPIMDZiTchmVxDXfbv8qsDjpNoWEydrEjgyenIbJnbiWtITKVyXopYvvv3ytWH6jKWepT_T6-1efpWb9c7ijpZ-fEgnywjjkgslseWyrIR24HjA"
export const getProducts = async () => {
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

export const DeleteProduct = async (id) => {
  try {
    const headers = {
      Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
    };
    const response = await axios.delete(
      "http://localhost:8090/product/deleteProduct/" + id,
      {
        headers,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
