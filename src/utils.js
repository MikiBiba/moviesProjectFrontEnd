import axios from "axios";

const getAllData = (url) => {
  return axios.get(url);
};

const getOneItem = (url, id) => {
  return axios.get(`${url}/${id}`);
};

const addNewItem = (url, obj) => {
  return axios.post(url, obj);
};

const updateItem = (url, id, obj) => {
  return axios.put(`${url}/${id}`, obj);
};

const deleteItem = (url, id) => {
  return axios.delete(`${url}/${id}`);
};
export { getAllData, getOneItem, addNewItem, updateItem, deleteItem };
