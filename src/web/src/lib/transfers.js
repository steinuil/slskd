import api from './api';

export const getAll = async ({ direction }) => {
  const response = (await api.get(`/transfers/${direction}s`)).data;

  if (!Array.isArray(response)) {
    console.warn('got non-array response from transfers API', response)
    return undefined;
  }

  return response;
};

export const download = ({ username, filename, size }) => {
  return api.post(`/transfers/downloads/${username}`, { filename, size });
};

export const cancel = ({ direction, username, id, remove = false }) => {
  return api.delete(`/transfers/${direction}s/${username}/${id}?remove=${remove}`);
};

export const getPlaceInQueue = ({ username, id }) => {
  return api.get(`/transfers/downloads/${username}/${id}`);
};