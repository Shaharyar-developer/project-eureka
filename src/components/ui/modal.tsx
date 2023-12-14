import React, { ReactNode } from "react";
import CloseIcon from "../../components/icons/closeIcon";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed top-1/2 transition-opacity bg-card p-4 rounded-md left-1/2 -translate-x-1/2 -translate-y-1/2 ${
        isOpen ? "opacity-100" : " opacity-0"
      }`}
    >
      <div className="relative">
        <button className="absolute top-0 right-0" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <div className="m-4 min-h-[25svh] min-w-[12vw]">{children}</div>
    </div>
  );
};

export default Modal;
