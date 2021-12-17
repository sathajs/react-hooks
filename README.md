# satha-react-hooks

React hooks for satha (https://satha.netlify.app/)

### install satha and satha-react-hooks

```ts
// npm
npm i @satha/core @satha/react-hooks

// pnpm
pnpm add @satha/core @satha/react-hooks
```

### `useSatha` hook

```ts
import { useSatha } from "@satha/react-hooks";
```

Example:

```ts
import React from "react";
import { useStorage } from "@satha/core";
import { useSatha } from "@satha/react-hooks";

const App = () => {
  const numbersStore = useStorage("number", 0);
  const value = useSatha(numbersStore);

  const handleAddOne = () => {
    numbersStore.set((state) => state + 1);
  };

  return (
    <div>
      <button onClick={handleAddOne}>Add</button>
      <section>{value}</section>
    </div>
  );
};
export default App;
```
