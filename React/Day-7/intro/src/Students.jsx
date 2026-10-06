const Students = () => {

  const students = [
    {
      id: 1,
      name: "Arun",
      age: 22,
      course: "React JS"
    },
    {
      id: 2,
      name: "Kumar",
      age: 21,
      course: "Python"
    },
    {
      id: 3,
      name: "Priya",
      age: 23,
      course: "Java"
    },
    {
      id: 4,
      name: "Divya",
      age: 22,
      course: "Data Science"
    }
  ];

  return (
    <div>
      <h2>Student Details</h2>

      {students.map((student) => (
        <div key={student.id}>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Students;