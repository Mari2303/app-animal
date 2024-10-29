import axios from 'axios';

const CAT_API_URL = 'https://api.thecatapi.com/v1/breeds';

export const fetchCats = async () => {
  try {
    const response = await axios.get(CAT_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching cats:", error);
    return [];
  }
};

