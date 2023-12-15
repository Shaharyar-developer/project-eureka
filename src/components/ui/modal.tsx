import React, { ReactNode } from "react";

import { cn } from "../../libs/utils";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`h-[100vh] z-[9] transition-all w-[100vw] duration-200 fixed ${
          isOpen
            ? "backdrop-blur-sm bg-white/05 opacity-100 pointer-events-auto"
            : " opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed top-1/2 z-[10] transition-all ease-out bg-card p-4 rounded-md left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          isOpen ? "scale-100 opacity-100" : " scale-0 opacity-0"
        }`}
      >
        <div className="relative">
          <button
            className="absolute -top-2 -right-1 text-muted-foreground hover:text-foreground transition-all"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className={cn(className) + ` m-4`}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
