const Courses = () => {

  const courses = [
    "React JS",
    "Python",
    "Java",
    "Data Science",
    "Full Stack Development"
  ];

  return (
    <div>
      <h2>Available Courses</h2>

      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course}</h3>
        </div>
      ))}
    </div>
  );
};

export default Courses;