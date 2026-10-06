const Employees = () => {

  const employees = [
    {
      id: 1,
      name: "Arun",
      department: "IT",
      salary: 50000
    },
    {
      id: 2,
      name: "Rahul",
      department: "HR",
      salary: 45000
    },
    {
      id: 3,
      name: "Priya",
      department: "Finance",
      salary: 55000
    },
    {
      id: 4,
      name: "Kumar",
      department: "Marketing",
      salary: 48000
    }
  ];

  return (
    <div>
      <h2>Employee Details</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>₹{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;