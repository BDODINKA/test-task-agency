import React, {
  FC,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import { createPortal } from "react-dom";
import { ModalContainer } from "./Modal.styled";

type PropsType = {
  children: React.ReactNode;
  setOpenModal: (setOpenModal: boolean) => void;
  open: boolean;
};

export const ModalMain: FC<PropsType> = ({ children, open, setOpenModal }) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const [container, setContainer] = useState(undefined);

  useEffect(() => {
    setContainer(document.querySelector("#modal") as SetStateAction<any>);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.style.opacity = "1";
      }
    }, 0);
  }, [open]);

  const setActive = () => {
    ref.current.style.opacity = "0";
    setTimeout(() => {
      setOpenModal(false);
    }, 1000);
  };

  if (!open || !children || !container) return null;

  return (
    <>
      {createPortal(
        <ModalContainer
          onClick={setActive}
          id={"overlay"}
          open={open}
          ref={ref}
        >
          {children}
        </ModalContainer>,
        container
      )}
    </>
  );
};
