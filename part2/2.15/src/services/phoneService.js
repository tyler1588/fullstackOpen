import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject, setErrorMessage) => {
  setErrorMessage("Added " + newObject.name, "green");
  return axios.post(baseUrl, newObject);
};

const update = (id, newObject, updatePersons, handleErrorMessage) => {
  axios
    .put(`${baseUrl}/${id}`, newObject)
    .then(updatePersons(id, newObject))
    .catch(() => {
      handleErrorMessage(
        "Information of " +
          newObject.name +
          " has already been removed from the server",
        "red"
      );
    });
};

const deleteEntry = (id) => {
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
