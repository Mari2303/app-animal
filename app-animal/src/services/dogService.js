import axios from 'axios';

const DOG_API_URL = 'https://api.thedogapi.com/v1/breeds';

export const fetchDogs = async () => {
  try {
    const response = await axios.get(DOG_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching dogs:", error);
    return [];
  }
};
