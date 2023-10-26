import axios from "axios"

 const API_URL = "http://localhost:8090/product/addProduct"

    export const addProvider = async (provider) => {
        try {
            let response = await axios.post(API_URL, provider)
           console.log(response)
          } catch (error) {
            console.log(error)
          }
        
    }