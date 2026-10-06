const Employee = () => {

  const employee = {
    name: "Rahul",
    role: "Software Developer",
    salary: 50000,
    location: "Chennai"
  };

  return (
    <div>
      <h2>Employee Details</h2>

      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <p>Salary: ₹{employee.salary}</p>
      <p>Location: {employee.location}</p>
    </div>
  );
};

export default Employee;