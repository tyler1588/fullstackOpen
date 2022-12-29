import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const deleteEntry = (id, name) => {
  const entry = baseUrl + "/" + id;
  const request = axios.delete(entry);
  return request.then((response) => response.data);
};

const exportedObject = {
  getAll,
  create,
  deleteEntry,
};

export default exportedObject;
