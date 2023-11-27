import {
  createContext,
  useState,
  useContext,
  cloneElement,
  useRef,
} from "react";
import styles from "./Dialog.module.css";
import ReactDOM from "react-dom";
import { useClickOutside } from "../../hooks/useClickOutside";
import { ChildrenProps, ElementProps } from "../types";

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
const DialogContext = createContext<ContextType>(defaultContextValue);

function Dialog({ children }: ChildrenProps) {
  const [isOpened, setIsOpened] = useState(false);
  const open = () => setIsOpened(true);
  const close = () => setIsOpened(false);
  return (
    <DialogContext.Provider value={{ isOpened, open, close }}>
      {children}
    </DialogContext.Provider>
  );
}

function Trigger({ children }: ElementProps) {
  const { open } = useContext(DialogContext);
  return cloneElement(children, { onClick: open });
}

function Close({ children }: ElementProps) {
  const { close } = useContext(DialogContext);
  return cloneElement(children, {
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      if (typeof children.props.onClick === "function") {
        children.props.onClick(event);
      }
      close();
    },
  });
}

function Window({ children }: ChildrenProps) {
  const { isOpened, close } = useContext(DialogContext);
  const windowRef = useRef<HTMLDivElement>(null);
  useClickOutside(windowRef, close);
  if (isOpened)
    return ReactDOM.createPortal(
      <div className={styles["outside-container"]}>
        <div
          ref={windowRef}
          className={`${styles["window-container"]} shadow border-container`}
        >
          {children}
        </div>
      </div>,
      document.body
    );
}

Dialog.Window = Window;
Dialog.Trigger = Trigger;
Dialog.Close = Close;

export default Dialog;
