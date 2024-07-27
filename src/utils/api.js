import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await axios.get('/api/products'); // Adjust the endpoint as needed
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    return [];
  }
};
