const Phonebook = ({ persons, filter, handleDelete }) => {
  return (
    <ul>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map((person) => (
          <li key={person.id}>
            {person.name} {person.number}{" "}
            {
              <button onClick={() => handleDelete(person.id, person.name)}>
                Delete
              </button>
            }
          </li>
        ))}
    </ul>
  );
};

export default Phonebook;
