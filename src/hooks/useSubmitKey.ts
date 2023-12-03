import { useAppSelector } from "./storeHooks";
import { useKey } from "./useKey";

export const useSubmitKey = (
  componentId: string,
  action: () => Promise<void>
) => {
  const openedComponents = useAppSelector((state) => state.ui.openedComponents);
  const handleClose = async () => {
    if (openedComponents.at(-1) === componentId) await action();
  };

  useKey("Enter", handleClose);
};
