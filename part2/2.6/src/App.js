import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { id: 0, name: 'Arto Hellas', number: '555-555-5555' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
