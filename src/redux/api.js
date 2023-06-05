import axios from 'axios';


const API = axios.create({baseURL:"https://cobbler-backend-5hgv.vercel.app"});

export const signIn = async (formData) => {
    try {
      const response = await API.post("/api/v1/users/signin", formData);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(error.response.data);
    }
  };