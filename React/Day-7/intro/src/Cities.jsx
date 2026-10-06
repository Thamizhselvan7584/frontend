const Cities = () => {

  const cities = [
    "Chennai",
    "Bangalore",
    "Mumbai",
    "Delhi",
    "Hyderabad",
    "Coimbatore"
  ];

  return (
    <div>
      <h2>City Names</h2>

      {cities.map((city, index) => (
        <p key={index}>{city}</p>
      ))}
    </div>
  );
};

export default Cities;