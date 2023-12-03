import { useEffect } from "react";
import { useAppSelector } from "./storeHooks";

export const useCloseKey = (componentId: string, action: () => void) => {
  const openedComponents = useAppSelector((state) => state.ui.openedComponents);

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      console.log(event.key, openedComponents.at(-1));
      if (event.key === "Escape" && openedComponents.at(-1) === componentId)
        action();
    }

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [openedComponents, componentId]);
};
