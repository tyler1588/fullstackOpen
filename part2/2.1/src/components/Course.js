const Course = ({ course }) => {
  const parts = course.parts.map((part) => (
    <p key={part.id}>
      {part.name} {part.exercises}
    </p>
  ));
  return (
    <div>
      <h1>{course.name}</h1>
      <div>{parts}</div>
    </div>
  );
};

export default Course;
