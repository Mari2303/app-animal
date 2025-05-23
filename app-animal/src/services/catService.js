import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY = 'live_KvrgoQeUEityPqRTNqjoOse42NwkfybR1h3VgjyjM4Tki5F13jC1maa2HOdVbQKj'; 

export const fetchCats = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'x-api-key': API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cats:', error);
        return [];
    }
};
