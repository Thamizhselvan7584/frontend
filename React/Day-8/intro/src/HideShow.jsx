import { useState } from "react";

const HideShow = () => {

  const [show, setShow] = useState(true);

  const toggleContent = () => {
    setShow(!show);
  };

  return (
    <div>
      <h2>Hide and Show</h2>

      {show && (
        <p>
          Welcome to React! This content can be hidden and shown.
        </p>
      )}

      <button onClick={toggleContent}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default HideShow;