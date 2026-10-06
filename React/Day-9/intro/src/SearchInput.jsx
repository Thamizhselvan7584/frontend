import { useState } from "react";

const SearchInput = () => {

  const [search, setSearch] = useState("");

  return (
    <div>
      <h2>Search Input</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <p>
        You are searching for: {search}
      </p>
    </div>
  );
};

export default SearchInput;