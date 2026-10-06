const Courses = () => {

  const courses = [
    "React JS",
    "JavaScript",
    "Python",
    "Java",
    "Node JS"
  ];

  return (
    <div>
      <h2>Courses</h2>

      {courses.map((course, index) => (
        <p key={index}>{course}</p>
      ))}
    </div>
  );
};

export default Courses;