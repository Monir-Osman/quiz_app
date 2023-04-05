import { createContext, useState } from "react";

export const StateContext = createContext(null);

export function Provider({ children }) {
  const [categoryId, setCategoryId] = useState(null);
  const [difficultyLevel, setDifficultyLevel] = useState(null);
  const [error, setError] = useState(null);

  const value = {
    categoryId,
    setCategoryId,
    difficultyLevel,
    setDifficultyLevel,
    error,
    setError,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}
