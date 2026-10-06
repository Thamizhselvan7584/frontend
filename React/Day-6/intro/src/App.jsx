import Employee from "./Employee";

const App = () => {

  const employee = {
    name: "Rahul",
    role: "Software Developer",
    salary: 50000,
    city: "Chennai"
  };

  return (
    <div>
      <Employee employee={employee} />
    </div>
  );
};

export default App;