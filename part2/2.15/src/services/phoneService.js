import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const deleteEntry = (id, name) => {
  const entry = baseUrl + "/" + id;
  const request = axios.delete(entry);
  return request.then((response) => response.data);
};

const exportedObject = {
  getAll,
  create,
  update,
  deleteEntry,
};

export default exportedObject;
