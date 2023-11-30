import { useState } from "react";

interface InputState {
  [key: string]: string;
}

export const useColumnValues = () => {
  const [state, setState] = useState<InputState>({});
  const setColumnsValues = (value: string, columndId: string) => {
    setState((v) => {
      return {
        ...v,
        [columndId]: value,
      };
    });
  };

  return { columnValues: state, setColumnsValues };
};
