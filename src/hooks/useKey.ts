import { useEffect } from "react";

export const useKey = (key: string, action: () => void) => {
  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === key) action();
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });
};
