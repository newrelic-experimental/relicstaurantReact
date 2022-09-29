import constants from '../constants';

const { default: axios } = require('axios');

export const getRestaurants = async () => {
  const { data } = await axios.get(`http://${constants.localIpAddress}:3001/api/restaurants`);
  return data;
};

export const getRestaurant = async (id) => {
  const { data } = await axios.get(`http://${constants.localIpAddress}:3003/api/menu/${id}`);
  return data;
};

export const handleOrderSending = async (payload) => {
  const data = await axios.post(`http://${constants.localIpAddress}:3002/api/checkout`, payload);
  return data;
};
