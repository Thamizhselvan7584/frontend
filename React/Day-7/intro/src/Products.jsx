const Products = () => {

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000,
      category: "Electronics"
    },
    {
      id: 3,
      name: "Keyboard",
      price: 1500,
      category: "Accessories"
    },
    {
      id: 4,
      name: "Mouse",
      price: 800,
      category: "Accessories"
    },
    {
      id: 5,
      name: "Monitor",
      price: 15000,
      category: "Electronics"
    }
  ];

  return (
    <div>
      <h2>Product Details</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          <p>Price: ₹{product.price}</p>
          <p>Category: {product.category}</p>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Products;