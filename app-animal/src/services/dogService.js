import axios from 'axios';

const DOG_API_URL = 'https://api.thedogapi.com/v1/breeds';
const API_KEY = 'live_tGvWorBunX4QdduyyrHnSbfsObXG4Jf7GnxSkJNCen6WW90fIugod34eOsSG1t9d'; 

export const fetchDogs = async (limit = 20) => {
  try {
    const response = await axios.get(`${DOG_API_URL}?limit=${limit}`, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching dogs:", error);
    return [];
  }
};
