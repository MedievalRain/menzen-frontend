import {
  cloneElement,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { ChildrenProps, ElementProps } from "./types";
import { useClickOutside } from "../hooks/useClickOutside";

interface ContextType {
  isOpened: boolean;
  open: () => void;
  close: () => void;
}

const defaultContextValue: ContextType = {
  isOpened: false,
  open: () => {},
  close: () => {},
};

const DropdownContext = createContext<ContextType>(defaultContextValue);

function Dropdown({ children }: ChildrenProps) {
  const [isOpened, setIsOpened] = useState(false);
  const open = () => setIsOpened(true);
  const close = () => setIsOpened(false);

  return (
    <DropdownContext.Provider value={{ isOpened, open, close }}>
      {children}
    </DropdownContext.Provider>
  );
}

function Trigger({ children }: ElementProps) {
  const { open } = useContext(DropdownContext);
  return cloneElement(children, { onClick: open });
}

function Item({ children }: ElementProps) {
  const { close } = useContext(DropdownContext);

  return cloneElement(children, {
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      close();
      if (typeof children.props.onClick === "function") {
        children.props.onClick(event);
      }
    },
  });
}

function List({ children }: ChildrenProps) {
  const { isOpened, close } = useContext(DropdownContext);
  const listRef = useRef<HTMLDivElement>(null);
  useClickOutside(listRef, close);
  return (
    <div style={{ display: isOpened ? undefined : "none" }} ref={listRef}>
      {children}
    </div>
  );
}

Dropdown.Trigger = Trigger;
Dropdown.List = List;
Dropdown.Item = Item;
export default Dropdown;
