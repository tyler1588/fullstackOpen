import { useState } from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import Phonebook from './components/Phonebook';

const App = () => {
  const [persons, setPersons] = useState([
    { id: 0, name: 'Arto Hellas', number: '555-555-5555' },
    { id: 1, name: 'Jake Paul', number: '666-666-6666' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

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
