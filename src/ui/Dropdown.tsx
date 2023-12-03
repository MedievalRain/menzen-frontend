import {
  PropsWithChildren,
  cloneElement,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { ChildrenProps, ElementProps } from "./types";
import { useAppDispatch } from "../hooks/storeHooks";
import { closeComponent, openComponent } from "./UIControls/uiSlice";
import { useCloseOutside } from "../hooks/useCloseOutside";

interface ContextType {
  isOpened: boolean;
  id: string;
  open: () => void;
  close: () => void;
}

const defaultContextValue: ContextType = {
  id: "",
  isOpened: false,
  open: () => {},
  close: () => {},
};

const DropdownContext = createContext<ContextType>(defaultContextValue);

function Dropdown({ children }: PropsWithChildren) {
  const [isOpened, setIsOpened] = useState(false);
  const [id] = useState(crypto.randomUUID());
  const dispatch = useAppDispatch();
  const open = () => {
    setIsOpened(true);
    dispatch(openComponent(id));
  };
  const close = () => {
    setIsOpened(false);
    dispatch(closeComponent(id));
  };

  return (
    <DropdownContext.Provider value={{ isOpened, open, close, id }}>
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
  const { isOpened, close, id } = useContext(DropdownContext);
  const listRef = useRef<HTMLDivElement>(null);
  useCloseOutside(listRef, close, id);
  if (isOpened) return <div ref={listRef}>{children}</div>;
}

Dropdown.Trigger = Trigger;
Dropdown.List = List;
Dropdown.Item = Item;
export default Dropdown;
