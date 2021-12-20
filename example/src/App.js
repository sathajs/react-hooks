import React from "react";
import { useStorage } from "@satha/core";
import { useSatha } from "@satha/react-hooks";

const App = () => {
  const numbersStore = useStorage("number", 0);
  const [value, setValue] = useSatha(numbersStore);

  const handleAddOne = () => {
    setValue((state) => state + 1);
  };

  return (
    <div>
      <button onClick={handleAddOne}>Add {value + 3}</button>

      {value}
    </div>
  );
};
export default App;
