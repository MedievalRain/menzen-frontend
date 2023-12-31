import {
  createContext,
  useState,
  useContext,
  cloneElement,
  useRef,
  PropsWithChildren,
  useEffect,
} from "react";
import styles from "./Dialog.module.css";
import ReactDOM from "react-dom";

import { ElementProps } from "../types";
import { useCloseOutside } from "../../hooks/useCloseOutside";
import { useAppDispatch } from "../../hooks/storeHooks";
import { openComponent, closeComponent } from "../UIControls/uiSlice";
import { useCloseKey } from "../../hooks/useCloseKey";

interface ContextType {
  isOpened: boolean;
  open: () => void;
  close: () => void;
  id: string;
}

const defaultContextValue: ContextType = {
  isOpened: false,
  open: () => {},
  close: () => {},
  id: "",
};
const DialogContext = createContext<ContextType>(defaultContextValue);

function Dialog({ children }: PropsWithChildren) {
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
    <DialogContext.Provider value={{ isOpened, open, close, id }}>
      {children}
    </DialogContext.Provider>
  );
}

function Trigger({ children }: ElementProps) {
  const { open } = useContext(DialogContext);
  return cloneElement(children, {
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      if (typeof children.props.onClick === "function") {
        children.props.onClick(event);
      }
      open();
    },
  });
}

interface SubmitProps extends ElementProps {
  shouldClose?: boolean;
}

function Submit({ children, shouldClose }: SubmitProps) {
  const { close } = useContext(DialogContext);
  useEffect(() => {
    if (shouldClose) {
      close();
    }
  }, [shouldClose, close]);
  const handleClick = async () => {
    if (typeof children.props.onClick === "function") {
      const result = children.props.onClick();
      if (result instanceof Promise) {
        await result;
      }
      if (shouldClose === undefined) {
        close();
      }
    }
  };

  return cloneElement(children, {
    onClick: handleClick,
  });
}

function Close({ children }: ElementProps) {
  const { close } = useContext(DialogContext);
  const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
    if (typeof children.props.onClick === "function") {
      children.props.onClick(event);
    }
    close();
  };

  return cloneElement(children, {
    onClick: handleClick,
  });
}
interface WindowProps extends PropsWithChildren {
  className?: string;
}
function Window({ children, className }: WindowProps) {
  const { isOpened, close, id } = useContext(DialogContext);
  const windowRef = useRef<HTMLDivElement>(null);
  useCloseOutside(windowRef, close, id);
  useCloseKey(id, close);
  if (isOpened)
    return ReactDOM.createPortal(
      <div className={styles["outside-container"]}>
        <div
          ref={windowRef}
          className={`${styles["window-container"]} shadow border-container ${className}`}
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
Dialog.Submit = Submit;

export default Dialog;
