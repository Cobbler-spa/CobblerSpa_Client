import axios from 'axios';


const API = axios.create({baseURL:"http://localhost:5000/api/v1"});

export const signIn = async (formData) => {
    try {
      const response = await API.post("/api/v1/users/signin", formData);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error.response);
      throw new Error(error.response);
    }
  };