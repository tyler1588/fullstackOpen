const Course = ({ course }) => {
  const parts = course.parts.map((part) => (
    <p key={part.id}>
      {part.name} {part.exercises}
    </p>
  ));
  const sum = course.parts.reduce((accumulator, current) => {
    return accumulator + current.exercises;
  }, 0);
  return (
    <div>
      <h1>{course.name}</h1>
      <div>{parts}</div>
      <p>
        <strong>total of exercises {sum}</strong>
      </p>
    </div>
  );
};

export default Course;
