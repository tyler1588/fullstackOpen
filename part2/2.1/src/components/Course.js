const Course = ({ course }) => {
  const parts = course.parts.map((part) => (
    <p key={part.id}>
      {part.name} {part.exercises}
    </p>
  ));
  let sum = 0;
  course.parts.forEach((part) => {
    sum += part.exercises;
  });
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
