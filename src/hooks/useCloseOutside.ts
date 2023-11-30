import { useEffect, RefObject } from "react";
import { useAppSelector } from "./storeHooks";

export const useCloseOutside = (
  ref: RefObject<HTMLElement>,
  action: () => void,
  componentId: string
) => {
  const openedComponents = useAppSelector((state) => state.ui.openedComponents);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (openedComponents[openedComponents.length - 1] === componentId) {
          action();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openedComponents, componentId]);
};
