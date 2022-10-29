import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addToArray = (nameObject) => {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === nameObject.name) {
        alert(`${nameObject.name} is already added to the phonebook.`);
        return;
      }
    }
    setPersons(persons.concat(nameObject));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
    };
    addToArray(nameObject);
    setNewName('');
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => (
          <li key={i}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
