import { useAppSelector } from "./storeHooks";
import { useKey } from "./useKey";

export const useCloseKey = (componentId: string, action: () => void) => {
  const openedComponents = useAppSelector((state) => state.ui.openedComponents);
  const handleClose = () => {
    if (openedComponents.at(-1) === componentId) action();
  };

  useKey("Escape", handleClose);
};
