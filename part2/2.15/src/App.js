import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Notification from "./components/Notification";
import Phonebook from "./components/Phonebook";
import phoneService from "./services/phoneService";

const App = () => {
  // initialize state
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    message: null,
    color: null,
  });

  // get initial data from server
  useEffect(() => {
    phoneService.getAll().then((initial) => {
      setPersons(initial);
    });
  }, []);

  // function to add to array
  const addToArray = (personObject) => {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === personObject.name) {
        if (
          window.confirm(
            personObject.name +
              " is already added to the phonebook, replace the old number with a new one?"
          )
        ) {
          phoneService.update(
            persons[i].id,
            personObject,
            updatePersons,
            handleErrorMessage
          );
        }
        return;
      }
    }
    phoneService.create(personObject, handleErrorMessage).then((response) => {
      setPersons(persons.concat(response.data));
      setNewName("");
      setNewNumber("");
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    addToArray(personObject);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const updatePersons = (id, updatedPerson) => {
    setPersons(
      persons.map((person) =>
        person.id !== id ? person : { ...person, number: updatedPerson.number }
      )
    );
  };

  const handleErrorMessage = (message, color) => {
    setErrorMessage({
      message: message,
      color: color,
    });
    setTimeout(() => {
      setErrorMessage({
        message: null,
        color: null,
      });
    }, 5000);
  };

  const handleDelete = (id, name) => {
    if (window.confirm("Delete " + name + "?")) {
      phoneService.deleteEntry(id, name).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage.message} color={errorMessage.color} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add new</h2>
      <Form
        newName={newName}
        newNumber={newNumber}
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Phonebook
        persons={persons}
        filter={filter}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
