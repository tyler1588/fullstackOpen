import { useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './components/Filter';
import Form from './components/Form';
import Phonebook from './components/Phonebook';

const App = () => {
  // initialize state
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  // get initial data from server
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  // function to add to array
  const addToArray = (personObject) => {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === personObject.name) {
        alert(`${personObject.name} is already added to the phonebook.`);
        return;
      }
    }
    setPersons(persons.concat(personObject));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const personObject = {
      id: persons.length,
      name: newName,
      number: newNumber,
    };
    addToArray(personObject);
    setNewName('');
    setNewNumber('');
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Phonebook persons={persons} filter={filter} />
    </div>
  );
};

export default App;
